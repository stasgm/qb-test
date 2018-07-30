import React from 'react';
import { EntityList, EntityBox, AttributeBox } from './components';
import { IEntity, IAttribute } from './model';
import { entityAPI } from './api/entity';
import './App.css';

interface IState {
  filterText: string;
  entities: IEntity[];
  filteredEntities: IEntity[];
  selectedEntities: IEntity[];
  selectedAttributes: Array<{ name: String; attribute: IAttribute }>;
}

export class App extends React.Component<any, IState> {
  public state = {
    filterText: '',
    entities: [],
    filteredEntities: [],
    selectedEntities: [],
    selectedAttributes: [{ name: 'Test', attribute: { name: 'test-attribute', id: '1' } }]
  };

  public componentDidMount() {
    this.handleLoadMockEntities();
  }

  private handleLoadMockEntities = () => {
    entityAPI.fetchMembers().then(entities => {
      this.setState({ entities, filteredEntities: entities });
    });
  };

  private handleLoadEntities = () => {
    this.setState({entities: [], filteredEntities: []});
    entityAPI.fetchMembersAsync().then(entities => {
      this.setState({ entities, filteredEntities: entities });
    });
  };

  private handleSelectEntity = (id: string) => {
    this.setState({
      selectedEntities: [...this.state.selectedEntities, this.state.entities.filter((i: IEntity) => i.id === id)[0]]
      // Переделать на поиск только 1 элемента
    });
  };

  private handleDeleteEntity = (id: string) => {
    // Наименование - unselect
    this.setState({
      selectedEntities: this.state.selectedEntities.filter((i: IEntity) => i.id !== id)
    });
  };

  private handleDeleteAttribute = (id: string) => {
    // Наименование - unselect
    console.log(id);
    this.setState({
      selectedAttributes: this.state.selectedAttributes.filter((i: IAttribute) => i.id !== id)
    });
  };

  private handleFilterEntities = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      filterText: event.target.value, filteredEntities: this.state.entities.filter((i: IEntity) =>
        i.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });
  };

  public render() {
    return (
      <div className="App">
        <header className="Header">GDMN: Query Builder</header>
        <div className="application-main" role="main">
          <EntityList
            list={this.state.filteredEntities}
            addEntity={this.handleSelectEntity}
            filterEntities={this.handleFilterEntities}
            loadMockEntities={this.handleLoadMockEntities}
            loadEntities={this.handleLoadEntities}
            filterText={this.state.filterText}
          />
          <EntityBox list={this.state.selectedEntities} deleteEntity={this.handleDeleteEntity} />
          <AttributeBox list={this.state.selectedAttributes} deleteAttribute={this.handleDeleteAttribute} />
        </div>
      </div>
    );
  }
}
