import React from 'react';
import { EntityInspector, ITreeNode, FilterBox, AttributeBox, IEnityListMessage } from '@src/app/components';
import { IEntity, IAttribute } from '@src/app/model';
import { entityAPI } from '@src/app/api/entity';
import { EntityLink, EntityQuery, ERModel, Entities, Entity } from 'gdmn-orm';
import './App.css';

interface IAttributeFilter {
  entityAlias: string;
  fielName: string;
}
interface IState {
  statusMessage: IEnityListMessage;
  erModel?: ERModel;
  entities: Entities;
  selectedEntity?: IEntity;
  selectedAttributes: IAttributeFilter[];
  treeData?: ITreeNode;
}

export class App extends React.PureComponent<any, IState> {
  public state = {
    statusMessage: {},
    entities: {},
    erModel: undefined,
    treeData: undefined,
    selectedEntity: undefined,
    selectedAttributes: [],
  };

  public componentDidMount() {
    this.handleLoadMockEntities();
  }

  private updateTreeData = (item: IEntity | undefined) => () => {
    if (item === undefined) {
      this.setState({ treeData: undefined });
      return;
    }

    let attributes: ITreeNode[] = [];
    if (item.attributes !== undefined) {
      attributes = item.attributes.map((i: IAttribute) => {
        if (i.type === 'EntityAttribute') {
          return { name: i.name, entities: i.references };
        } else {
          return { name: i.name };
        }
      });
    }

    this.setState({ treeData: { name: item.name, children: attributes } });
  };

  private handleLoadMockEntities = () => {
    entityAPI.fetchMockData().then(entities => {
      /* this.setState({
        statusMessage: { loadingData: false, loadingText: '', loadingError: false },
        entities
       });*/
    });
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

  private handleSelectEntity = (id: string, checked: boolean) => {
    if (!checked) return;
    // TODO: Обработать чекед\анчекед. убрать handleUnSelectEntity

    /*    if (this.state.erModel !== undefined) {
    EntityLink.inspectorToObject(this.state.erModel, )
    const selectedEntity = this.state.entities.find((i: IEntity) => i.id === id);
    if (selectedEntity) {
      this.setState({ selectedEntity }, this.updateTreeData(selectedEntity));
    } */
  };

  private handleUnSelectEntity = () => {
    this.setState({ selectedEntity: undefined, selectedAttributes: [] }, this.updateTreeData(undefined));
  };

  private handleSelectAttribute = (name: string, checked: boolean) => {
    // const newList = this.state.selectedAttributes.map((i: IAttributeFilter) => i.fielName === name)
    /*     if (checked) {
      this.setState({ selectedAttributes: selectedAttribute }, this.updateTreeData(selectedAttribute));
    } */
  };

  public render() {
    //  const list = !!this.state.erModel ?  Object.keys((this.state.erModel! as ERModel).entities) : []
    const {erModel} = this.state;
    // const list = !!erModel ? Object.keys(erModel.entities) : []
    const list = !!this.state.erModel && Object.keys(erModel.entities) || []
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
          <AttributeBox /* list={this.state.selectedAttributes} onDeleteAttribute={this.handleUnselectAttribute}  */ />
          <FilterBox list={this.state.selectedEntity} onUnselectEntity={this.handleSelectEntity} />
        </main>
      </div>
    );
  }
}
