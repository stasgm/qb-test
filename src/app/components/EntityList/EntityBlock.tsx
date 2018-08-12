import React from 'react';
import { IEntity } from '@src/app/model';

import './index.css';

interface IEntityEvent {
  onSelectEntity: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getName = (name: string): string => {
  return `entity-item-${name}`;
};

/* const selectItem = (onClick: Function): React.ChangeEvent<HTMLInputElement> => {
  return onClick;
} */

export const EntityBlock: React.SFC<IEntity & IEntityEvent> = props => (
  <li className="entity-item">
    <input
      className="checkmark"
      id={getName(props.name)}
      type="checkbox"
      onChange={props.onSelectEntity} /* checked={this.state.complete} */
    />
    <label htmlFor={getName(props.name)}>{props.name}</label>
  </li>
);
