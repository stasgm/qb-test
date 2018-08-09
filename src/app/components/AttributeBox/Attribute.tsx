import React from 'react';
import Draggable from 'react-draggable';
import { IAttribute } from '@src/app/model';

import './index.css';

export interface IEntityEvent {
  onClickDelete: (id: string) => void;
}

export const Attribute: React.SFC<{ name: String; attribute: IAttribute } & IEntityEvent> = props => (
  <Draggable axis="none" defaultPosition={{ x: 0, y: 0 }}>
    <div className="attribute-box">
      <div className="attribute-box-handle">
        <div className="attribute-box-handle-title">
          [ {props.name} ] : {props.attribute.name} : : {props.attribute.id}
        </div>
        <div className="action-button" onClick={() => props.onClickDelete(props.attribute.id || '')}>
<<<<<<< HEAD:src/components/AttributeBox/Attribute.tsx
          <i className="fas fa-times fa-xs"></i>
=======
          <i className="fas fa-times" />
>>>>>>> upstream/master:src/app/components/AttributeBox/Attribute.tsx
        </div>
      </div>
    </div>
  </Draggable>
);
