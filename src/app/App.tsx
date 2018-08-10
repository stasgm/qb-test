import React from 'react';
import { EntityList, EntityBox, AttributeBox } from '@src/app/components';
import { IEntity, IAttribute } from '@src/app/model';
import { entityAPI } from '@src/app/api/entity';
import './App.css';

interface IState {
  statusMessage: IEnityListMessage;
  entities: IEntity[];
  selectedEntities: IEntity[];
}

interface IEnityListMessage {
  loadingData?: boolean;
  loadingText?: string;
  loadingError?: boolean;
}

export class App extends React.PureComponent<any, IState> {
  public state = {
    statusMessage: {},
    entities: [],
    selectedEntities: []
  };

  public componentDidMount() {
    this.handleLoadMockEntities();
  }

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
          selectedEntities: [],
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
    console.log(id);
    if (checked) {
      const selectedEntity = this.state.entities.find((i: IEntity) => i.id === id);
      if (selectedEntity) {
        this.setState({ selectedEntities: [...this.state.selectedEntities, selectedEntity] });
      }
      return;
    }

    this.setState({ selectedEntities: this.state.selectedEntities.filter((i: IEntity) => i.id !== id) });
  };

  public render() {
    return (
      <div className="App">
        <main className="application-main" role="main">
          <EntityList
            list={this.state.entities}
            statusMessage={this.state.statusMessage}
            onSelectEntity={this.handleSelectEntity}
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
