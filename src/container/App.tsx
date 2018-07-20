import * as React from 'react';
import Draggable from 'react-draggable';

import './App.css';

interface IProps {
  name?: string;
}

interface IAttribute {
  id: number,
  name: string,
  type: string,
}

interface IEntity {
  id: number,
  name: string,
  attributes: IAttribute[];
}

interface IEntityProps {
  list: IEntity[],
}

const entityList: Array<IEntity> = [
  {
    id: 1,
    name: 'Company',
    attributes: [
      {
        id: 0,
        name: 'ID',
        type: 'string',
      },
    ]
  },
  {    
    id: 2,
    name: 'Department',
    attributes: [
      {
        id: 0,
        name: 'ID',
        type: 'string',
      },
    ]
  },
  {    
    id: 3,
    name: 'People',
    attributes: [
      {
        id: 0,
        name: 'ID',
        type: 'string',
      },
    ]    
  },
  {    
    id: 4,
    name: 'Account',
    attributes: [
      {
        id: 0,
        name: 'ID',
        type: 'string',
      },
    ]
  },  
];

const EntityBox: React.SFC<IProps> = () => (     
  <Draggable 
    axis="both"
    defaultPosition = {{x: 0, y: 0}}
    grid={[25, 25]}
    handle=".handle"
    bounds={{top: 0, left: 0, right: 800, bottom: 400}}
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

const EntityList: React.SFC<IProps> = () => (     
  <div>
    <Entity list={entityList} />
  </div>
);

class App extends React.Component<IProps, {}> {
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
  