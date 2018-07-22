import * as React from 'react';
import * as ERModel from '../erdata';

interface IEntityProps {
  list: ERModel.IEntity[],
  addEntity: (id: number) => void,
}

interface IEntityEvent {
  id: number,
  onClick: (event: any) => void,
}

export const Entity: React.SFC<ERModel.IEntity & IEntityEvent> = (props) => (
  <div className="entity-container">
    <div className="entity-item entity-item-title">{props.name} ({props.id})</div>
    <div className="entity-item entity-item-add" onClick={() => props.onClick(props.id)}>+</div>
  </div>      
);
  
export const EntityList: React.SFC<IEntityProps> = (props) => (     
    <div>
      {
        props.list.map((i, idx) => 
          <Entity name={i.name} onClick={props.addEntity} id={idx}/>
        )
      }
    </div>
);