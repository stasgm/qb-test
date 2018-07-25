import React from "react";
import { EntityList, EntityBox } from "./components";
import { IEntity } from "./model";
import { entityAPI } from "./api/entity";
import "./App.css";

interface IState {
    entityList: IEntity[];
    selectedEntity: IEntity[];
}

class App extends React.Component<any, IState> {
    state = {
        entityList: [],
        selectedEntity: []
    };

    public componentDidMount() {
        entityAPI.fetchMembers().then(entityList => {
            this.setState({ entityList });
        });
    }

    public addEntityHandle = (id: number) => {
        this.setState({
            selectedEntity: [
                ...this.state.selectedEntity,
                this.state.entityList[id]
            ]
        });
    };

    public deleteEntityHandle = (id: number) => {
        this.setState({selectedEntity: this.state.selectedEntity.filter(i => i != id)});
    };

    public render() {
        return (
            <div className="App">
                <h1>GDMN: Query Builder</h1>
                <div className="qb-main">
                    <div className="entity-list-box">
                        <EntityList
                            list={this.state.entityList}
                            addEntity={this.addEntityHandle}
                        />
                    </div>
                    <div className="box-container">
                        <EntityBox
                            list={this.state.selectedEntity}
                            deleteEntity={this.deleteEntityHandle}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
