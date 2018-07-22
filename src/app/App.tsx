import * as React from 'react';
import { EntityList, EntityBox } from './components';
import * as ERModel from './erdata';
import './App.css';

class App extends React.Component<{}, {entity: object[]}> {

  constructor() {
    super({}, {});
    this.addEntityHandle = this.addEntityHandle.bind(this)
  } 
  
  state = {
    entity: [],  
  }

  private addEntityHandle(id: number) : void {
     this.setState({entity: [ ERModel.entityList[id] ]});
  }

  public render() {        
    return (
      <div className="App">
        <h1>GDMN: Query Builder</h1>
        <div className="qb-main">
          <div className="entity-list"> 
            <EntityList list={ERModel.entityList} addEntity={this.addEntityHandle}/>
          </div>
          <div className="box-container">
            <EntityBox data={this.state.entity}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;