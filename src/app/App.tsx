import React from 'react';
import { EntityList, ITreeNode, EntityBox, AttributeBox } from '@src/app/components';
import { IEntity, IAttribute } from '@src/app/model';
import { entityAPI } from '@src/app/api/entity';
import './App.css';

interface IState {
  statusMessage: IEnityListMessage;
  entities: IEntity[];
  selectedEntities: IEntity | undefined;
  treeData?: ITreeNode;
}

interface IEnityListMessage {
  loadingData?: boolean;
  loadingText?: string;
  loadingError?: boolean;
}

const data: ITreeNode = {
  name: 'root',
  toggled: true,
  children: [
    {
      name: 'parent',
      children: [{ name: 'child1' }, { name: 'child2' }]
    },
    {
      name: 'loading parent',
      loading: true,
      children: []
    },
    {
      name: 'parent',
      children: [
        {
          name: 'nested parent',
          children: [{ name: 'nested child 1' }, { name: 'nested child 2' }]
        }
      ]
    }
  ]
};

export class App extends React.PureComponent<any, IState> {
  public state = {
    statusMessage: {},
    entities: [],
    selectedEntities: undefined,
    treeData: undefined
  };

  public componentDidMount() {
    this.handleLoadMockEntities();
  }

  private setTreeData = (item: IEntity | undefined) => () => {
    if (item === undefined) {
      this.setState({ treeData: undefined });
      return;
    }

    let attributes: ITreeNode[] = [];
    if (item.attributes !== undefined) {
      attributes = item.attributes.map((i: IAttribute) => {
        if (i.type === 'EntityAttribute') { return { name: i.name, entities: i.references} }
        else { return { name: i.name} }
      })
    }

    this.setState({ treeData: { name: item.name, children: attributes } });
  };

  private handleLoadMockEntities = () => {
    entityAPI.fetchMockData().then(entities => {
      this.setState({
        statusMessage: { loadingData: false, loadingText: '', loadingError: false },
        entities
      });
    });
  };

  private getData = () => {
    entityAPI
      .fetchData()
      .then(entities => {
        this.setState({
          statusMessage: { loadingData: false, loadingText: '', loadingError: false },
          entities
        });
      })
      .catch(e =>
        this.setState({
          entities: [],
          selectedEntities: undefined,
          statusMessage: { loadingData: false, loadingText: `Ошибка: ${e.message}`, loadingError: true }
        })
      );
  };

  private handleLoadEntities = () => {
    this.setState(
      {
        statusMessage: { loadingData: true, loadingText: 'Загрузка данных...', loadingError: false },
        entities: []
      },
      this.getData
    );
  };

  private handleSelectEntity = (id: string, checked: boolean) => {
    if (!checked) return;

    const selectedEntity = this.state.entities.find((i: IEntity) => i.id === id);
    if (selectedEntity) {
      this.setState({ selectedEntities: selectedEntity }, this.setTreeData(selectedEntity));
    }
    // this.setState({ selectedEntities: this.state.selectedEntities.find((i: IEntity) => i.id !== id) });
  };

  private handleUnSelectEntity = () => {
    this.setState({ selectedEntities: undefined }, this.setTreeData(undefined));
  };

  public render() {
    return (
      <div className="App">
        <main className="application-main" role="main">
          <EntityList
            list={this.state.entities}
            treeData={this.state.treeData}
            statusMessage={this.state.statusMessage}
            onSelectEntity={this.handleSelectEntity}
            onUnselectEntity={this.handleUnSelectEntity}
            onLoadMockEntities={this.handleLoadMockEntities}
            onLoadEntities={this.handleLoadEntities}
          />
          <EntityBox list={this.state.selectedEntities} onUnselectEntity={this.handleSelectEntity} />
          <AttributeBox /* list={this.state.selectedAttributes} onDeleteAttribute={this.handleUnselectAttribute}  */ />
        </main>
      </div>
    );
  }
}
