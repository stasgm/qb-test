import React from 'react';
import Draggable from 'react-draggable';
import { IAttribute } from '@src/app/model';
import { IAttributeParams} from './AttributeBox';

import './index.css';

export interface IEntityEvent {
  onClickDelete?: (id: string) => void;
}

export const Attribute: React.SFC< IAttributeParams & IEntityEvent> = props => (
  <Draggable axis="none" defaultPosition={{ x: 0, y: 0 }}>
    <div className="attribute-box">
      <div className="attribute-box-handle">
        <div className="attribute-box-handle-title">
          [ {props.expression.enityName} ] : {props.expression.fieldName} : : {props.id}
        </div>
        <div className="action-button" /* onClick={() => props.onClickDelete(props.attribute.id || '') }*/>
          <i className="fas fa-times" />
        </div>
      </div>
    </div>
  </Draggable>
);
