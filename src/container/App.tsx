import * as React from 'react';
import Draggable from 'react-draggable';
import * as ERModel from './erdata';
import './App.css';

type Props = {
  name?: string;
}

interface IEntityProps {
  list: ERModel.IEntity[],
}

const EntityBox: React.SFC<Props> = () => (     
  <Draggable 
    axis="both"
    defaultPosition = {{x: 0, y: 0}}
    grid={[25, 25]}
    handle=".handle"
    bounds={{top: 0, left: 0, right: 800, bottom: 280}}
  >
    <div className="box no-cursor">
      <div className="handle cursor">COMPANY</div>
      <div className="content">
        <ul className="attributes">
          <li><input type="checkbox" id="checkbox-id"/><label htmlFor="checkbox-id"> ID</label></li>
          <li><input type="checkbox" id="checkbox-name"/><label htmlFor="checkbox-name"> Name</label></li>
          <li><input type="checkbox" id="checkbox-parent"/><label htmlFor="checkbox-parent"> Parent</label></li>
        </ul>
      </div>
    </div>
  </Draggable>
);

const Entity: React.SFC<IEntityProps> = (props) => (
  <div>
    {
      props.list.map(i => 
        <div className="entity-item handle cursor">
          {i.name}
        </div>
      )}
  </div>    
);

const EntityList: React.SFC<Props> = () => (     
  <div>
    <Entity list={ERModel.entityList} />
  </div>
);

class App extends React.Component<Props, {}> {
  public render() {        
    return (
      <div className="App">
        <h1>GDMN: Query Builder</h1>
        <div className="qb-main">
          <div className="entity-list "> 
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
  