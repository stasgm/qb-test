import * as React from 'react';
import { IEntity } from '../../model';

interface IEntityEvent {
  id: number,
  onClick: (event: any) => void,
}

export const EntityBlock: React.SFC<IEntity & IEntityEvent> = (props) => (
  <div className="entity-container">
    <div className="entity-item entity-item-title">{props.name} ({props.id})</div>
    <div className="entity-item entity-item-add" onClick={() => props.onClick(props.id)}>+</div>
  </div>
);