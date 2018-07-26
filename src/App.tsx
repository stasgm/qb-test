import React from "react";
import { EntityList, EntityBox } from "./components";
import { IEntity } from "./model";
import { entityAPI } from "./api/entity";
import "./App.css";

interface IState {
  entities: IEntity[];
  filteredEntities: IEntity[];
  selectedEntities: IEntity[];
}

class App extends React.Component<any, IState> {
  state = {
    entities: [],
    filteredEntities: [],
    selectedEntities: []
  };

  public componentDidMount() {
    entityAPI.fetchMembers().then(entities => {
      this.setState({ entities, filteredEntities: entities });
    });
  }

  private handleSelectEntity = (id: number) => {
    this.setState({
      selectedEntities: [
        ...this.state.selectedEntities,
        this.state.filteredEntities[id]
      ]
    });
  };

  private handleDeleteEntity = (name: string) => {
    this.setState({
      selectedEntities: this.state.selectedEntities.filter(
        (i: IEntity) => i.name !== name
      )
    });
  };

  private handleFilterEntities = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      filteredEntities: this.state.entities.filter((i: IEntity) =>
        i.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });
  };

  public render() {
    return (
      <div className="App">
        <h1>GDMN: Query Builder</h1>
        <div className="qb-main">
          <div className="entity-list-box">
            <EntityList
              list={this.state.filteredEntities}
              addEntity={this.handleSelectEntity}
              filterEntities={this.handleFilterEntities}
            />
          </div>
          <div className="box-container">
            <EntityBox
              list={this.state.selectedEntities}
              deleteEntity={this.handleDeleteEntity}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
