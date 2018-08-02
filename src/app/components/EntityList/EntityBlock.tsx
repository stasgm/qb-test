import React from 'react';
import { IEntity } from '@src/app/model';

import './index.css';

interface IEntityEvent {
  onClick: (id: string) => void;
}

export const EntityBlock: React.SFC<IEntity & IEntityEvent> = props => (
  <div className="entity-container">
    <div className="entity-title">{props.name}</div>
    <div className="action-button" onClick={() => props.onClick(props.id || '')}>
      <i className="fas fa-plus fa-xs" />
    </div>
  </div>
);
