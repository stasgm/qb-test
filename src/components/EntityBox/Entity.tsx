import * as React from 'react';
import Draggable from 'react-draggable';
import { IEntity } from '../../model';
import { AttributeList } from './AttributeList'

export interface IEntityEvent {
  id: number,
  onClick: (event: any) => void,
}

export const Entity: React.SFC<IEntity & IEntityEvent> = (props) => (
  <Draggable
    axis="both"
    defaultPosition={{ x: 0, y: 0 }}
    grid={[25, 25]}
    handle=".handle"
  // bounds={{top: 0, left: 0, right: 1800, bottom: 1280}}
  >
    <div className="box no-cursor">
      <div className="handle">{props.name}</div>
      <div onClick={() => props.onClick(props.id)}>[ X ]</div>
      <AttributeList data={props.attributes || []} />
    </div>
  </Draggable>
);