import React from 'react';
import { EntityList, EntityBox, AttributeBox } from './components';
import { IEntity, IAttribute } from './model';
import { entityAPI } from './api/entity';
import './App.css';

interface IState {
  statusMessage: IEnityListMessage;
  filterText: string;
  entities: IEntity[];
  filteredEntities: IEntity[];
  selectedEntities: IEntity[];
  selectedAttributes: Array<{ name: String; attribute: IAttribute }>;
}

interface IEnityListMessage {
  loadingData?: boolean;
  loadingText?: string;
  loadingError?: boolean;
}

export class App extends React.PureComponent<any, IState> {
  public state = {
    statusMessage: {},
    filterText: '',
    entities: [],
    filteredEntities: [],
    selectedEntities: [],
    selectedAttributes: [
      { name: 'Test', attribute: { name: 'test-attribute', id: '1' } },
      { name: 'gd_inna', attribute: { name: 'vsc-theme', id: '1' } },
      { name: 'gd_stas', attribute: { name: 'drone', id: '1' } }
    ]
  };

  public componentDidMount() {
    this.handleLoadMockEntities();
  }

  private handleLoadMockEntities = () => {
    entityAPI.fetchMockData().then(entities => {
      this.setState({
        statusMessage: { loadingData: false, loadingText: '', loadingError: false },
        entities,
        filteredEntities: entities
      });
    });
  };

  private getData = () => {
    entityAPI
      .fetchData()
      .then(entities => {
        this.setState({
          statusMessage: { loadingData: false, loadingText: '', loadingError: false },
          entities,
          filteredEntities: entities
        });
      })
      .catch(e =>
        this.setState({
          entities: [], filteredEntities: [], selectedEntities: [],
          statusMessage: { loadingData: false, loadingText: `Ошибка: ${e.message}`, loadingError: true }
        })
      );
  };

  private handleLoadEntities = () => {
    this.setState(
      {
        statusMessage: { loadingData: true, loadingText: 'Загрузка данных...', loadingError: false },
        entities: [],
        filteredEntities: []
      },
      this.getData
    );
  };

  private handleSelectEntity = (id: string, checked: boolean) => {
    if (checked) {
      const selectedEntity = this.state.entities.find((i: IEntity) => i.id === id);
      if (selectedEntity) {
        this.setState({ selectedEntities: [...this.state.selectedEntities, selectedEntity] });
      }
      return ;
    }

    this.setState({ selectedEntities: this.state.selectedEntities.filter((i: IEntity) => i.id !== id) });
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

  private handleFilterEntities: React.ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({
      filterText: event.target.value,
      filteredEntities: this.state.entities.filter((i: IEntity) =>
        i.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });
  };

  private handleClearFilter = () => {
    this.setState({ filterText: '', filteredEntities: this.state.entities });
  };

  public render() {
    return (
      <div className="App">
        {/* <header className="Header">GDMN: Query Builder</header> */}
        <main className="application-main" role="main">
          <EntityList
            list={this.state.filteredEntities}
            statusMessage={this.state.statusMessage}
            onSelectEntity={this.handleSelectEntity}
            onChangeFilter={this.handleFilterEntities}
            onClearFilter={this.handleClearFilter}
            onLoadMockEntities={this.handleLoadMockEntities}
            onLoadEntities={this.handleLoadEntities}
            filterText={this.state.filterText}
          />
          <EntityBox list={this.state.selectedEntities} onDeleteEntity={this.handleUnselectEntity} />
          <AttributeBox /* list={this.state.selectedAttributes} onDeleteAttribute={this.handleUnselectAttribute}  *//>
        </main>
      </div>
    );
  }
}
