import React from 'react';
import shortid from 'shortid';
import { entityAPI } from '@src/app/api/entity';
import {
  EntityLink,
  EntityQuery,
  ERModel,
  EntityAttribute,
  SetAttribute,
  DetailAttribute,
  ParentAttribute
} from 'gdmn-orm';
import { EntityInspector, ITreeNode, FilterBox, AttributeBox, IEnityListMessage } from '@src/app/components';
import './App.css';

export interface IAttributeFilter {
  entityAlias: string;
  fieldName: string;
}

interface IEntityFilter {
  entityAlias: string;
  entityName: string;
}
interface IState {
  statusMessage: IEnityListMessage;
  erModel?: ERModel;
  selectedEntity?: IEntityFilter;
  selectedAttributes: IAttributeFilter[];
  treeData?: ITreeNode;
}

export class App extends React.PureComponent<any, IState> {
  public state: Readonly<IState> = {
    statusMessage: {},
    erModel: undefined,
    treeData: undefined,
    selectedEntity: undefined,
    selectedAttributes: []
  };

  public componentDidMount() {
    this.handleLoadMockEntities();
  }

  private updateTreeData = (): void => {
    const { erModel, selectedEntity } = this.state;
    if (!erModel || !selectedEntity) {
      this.setState({ treeData: undefined });
      return;
    }

    const attributeList = erModel.entity(selectedEntity.entityName).attributes;

    const attributes: ITreeNode[] = Object.values(attributeList).map(attr => {
      const checked = !!this.state.selectedAttributes.find(
        (i: IAttributeFilter) => i.entityAlias === selectedEntity.entityName && i.fieldName === attr.name
      );

      return EntityAttribute.isType(attr) &&
        !SetAttribute.isType(attr) &&
        !ParentAttribute.isType(attr) &&
        !DetailAttribute.isType(attr)
        ? {
            name: attr.name,
            entities: Object.values(attr.entities).map(i => i.name),
            parentAlias: selectedEntity.entityName,
            checked
          }
        : { name: attr.name, parentAlias: selectedEntity.entityName, checked };
    });

    this.setState({ treeData: { name: selectedEntity.entityName, children: attributes, parentAlias: '' } });
  };

  private handleLoadMockEntities = () => {
    entityAPI
      .fetchMockData()
      .then(erModel => {
        this.setState({
          statusMessage: { loadingData: false, loadingText: '', loadingError: false },
          erModel
        });
      })
      .catch(e =>
        this.setState({
          statusMessage: { loadingData: false, loadingText: `Ошибка: ${e.message}`, loadingError: true }
        })
      );
  };

  private getData = () => {
    entityAPI
      .fetchData()
      .then(erModel => {
        this.setState({
          statusMessage: { loadingData: false, loadingText: '', loadingError: false },
          erModel
        });
      })
      .catch(e =>
        this.setState({
          statusMessage: { loadingData: false, loadingText: `Ошибка: ${e.message}`, loadingError: true }
        })
      );
  };

  private handleLoadEntities = () => {
    this.setState(
      {
        statusMessage: { loadingData: true, loadingText: 'Загрузка данных...', loadingError: false }
      },
      this.getData
    );
  };

  private handleSelectEntity = (name: string, checked: boolean) => {
    if (!checked) return;
    // TODO: Обработать чекед\анчекед. убрать handleUnSelectEntity

    const { erModel } = this.state;

    if (!erModel) return;

    const entityName = erModel.entities[name].name;

    if (!entityName) return;

    // const entityAlias = shortid.generate();

    this.setState({ selectedEntity: { entityName, entityAlias: entityName } }, this.updateTreeData);
  };

  private handleUnSelectEntity = () => {
    this.setState({ selectedEntity: undefined, selectedAttributes: [] }, this.updateTreeData);
  };

  private handleSelectAttribute = (parentAlias: string, name: string, checked: boolean) => {
    const attr: IAttributeFilter = { entityAlias: parentAlias, fieldName: name };
    if (checked) {
      this.setState({ selectedAttributes: [...this.state.selectedAttributes, attr] }, this.updateTreeData);
      return;
    }

    const newList: IAttributeFilter[] = this.state.selectedAttributes.filter(
      i => !(i.fieldName === name && i.entityAlias === parentAlias)
    );
    this.setState({ selectedAttributes: newList }, this.updateTreeData);
  };

  public render() {
    const list = !!this.state.erModel ? Object.keys(this.state.erModel.entities) : [];
    return (
      <div className="App">
        <main className="application-main" role="main">
          <EntityInspector
            list={list}
            treeData={this.state.treeData}
            statusMessage={this.state.statusMessage}
            onLoadMockEntities={this.handleLoadMockEntities}
            onLoadEntities={this.handleLoadEntities}
            onSelectEntity={this.handleSelectEntity}
            onUnselectEntity={this.handleUnSelectEntity}
            onSelectAttribute={this.handleSelectAttribute}
          />
          <AttributeBox
            list={this.state.selectedAttributes.map(i => ({
              expression: { entityName: i.entityAlias, fieldName: i.fieldName }
            }))} /* onDeleteAttribute={this.handleUnselectAttribute}  */
          />
          <FilterBox /* list={this.state.selectedEntity} onUnselectEntity={this.handleSelectEntity} */ />
        </main>
      </div>
    );
  }
}
