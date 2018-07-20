import * as React from 'react';
import { EntityList } from './components/EntityList';
import { EntityBox } from './components/EntityBox';
import './App.css';

class App extends React.Component<{}, {}> {
  public render() {        
    return (
      <div className="App">
        <h1>GDMN: Query Builder</h1>
        <div className="qb-main">
          <div className="entity-list"> 
            <EntityList />
          </div>
          <div className="box-container">
            <EntityBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;