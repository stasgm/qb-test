import React, { ReactEventHandler } from 'react';
import Draggable from 'react-draggable';
import { IAttribute } from '@src/app/model';
import { IAttributeParams} from './AttributeBox';

import './index.css';

export interface IEntityEvent {
  onClickDelete?: (id: string) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Attribute: React.SFC< IAttributeParams & IEntityEvent> = props => (
  <tr>
    <td>
      <input
      type="checkbox"
      checked={props.visible}
      key={props.id}
      onChange={props.onChange}/>
    </td>
    <td>{props.expression.enityName}.{props.expression.fieldName}</td>
    <td>{props.fieldAlias}</td>
    <td>{props.sortType}</td>
  </tr>
);
