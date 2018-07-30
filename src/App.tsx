import React from 'react';
import { EntityList, EntityBox, AttributeBox } from './components';
import { IEntity, IAttribute } from './model';
import { entityAPI } from './api/entity';
import './App.css';

interface IState {
  isLoading: boolean;
  filterText: string;
  entities: IEntity[];
  filteredEntities: IEntity[];
  selectedEntities: IEntity[];
  selectedAttributes: Array<{ name: String; attribute: IAttribute }>;
}

export class App extends React.PureComponent<any, IState> {
  public state = {
    isLoading: false,
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
    entityAPI.fetchData().then(entities => {
      this.setState({ filterText: '', entities, filteredEntities: entities });
    });
  };

  private getData = () => {
    entityAPI.fetchDataAsync().then(entities => {
      this.setState({ filterText: '', isLoading: false, entities, filteredEntities: entities });
    });
  };

  private handleLoadEntities = () => {
    this.setState({ isLoading: true, entities: [], filteredEntities: [] }, this.getData);
  };

  private handleSelectEntity = (id: string) => {
    this.setState({
      selectedEntities: [...this.state.selectedEntities, this.state.entities.filter((i: IEntity) => i.id === id)[0]]
      // Переделать на поиск только 1 элемента
    });
  };

  private handleUnselectEntity = (id: string) => {
    this.setState({
      selectedEntities: this.state.selectedEntities.filter((i: IEntity) => i.id !== id)
    });
  };

  private handleUnselectAttribute = (id: string) => {
    console.log(id);
    this.setState({
      selectedAttributes: this.state.selectedAttributes.filter((i: IAttribute) => i.id !== id)
    });
  };

  private handleFilterEntities = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      filterText: event.target.value,
      filteredEntities: this.state.entities.filter((i: IEntity) =>
        i.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });
  };

/*   private handleClearFilter = () => {
    this.setState({filterText: ''});
  } */

  public render() {
    return (
      <div className="App">
        <header className="Header">GDMN: Query Builder</header>
        <div className="application-main" role="main">
          <EntityList
            list={this.state.filteredEntities}
            isLoading={this.state.isLoading}
            onAddEntity={this.handleSelectEntity}
            onFilterEntities={this.handleFilterEntities}
            onLoadMockEntities={this.handleLoadMockEntities}
            onLoadEntities={this.handleLoadEntities}
            filterText={this.state.filterText}
          />
          <EntityBox list={this.state.selectedEntities} onDeleteEntity={this.handleUnselectEntity} />
          <AttributeBox list={this.state.selectedAttributes} onDeleteAttribute={this.handleUnselectAttribute} />
        </div>
      </div>
    );
  }
}
