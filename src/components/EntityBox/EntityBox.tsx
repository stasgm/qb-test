import React from 'react';
import { IEntity } from '../../model';
import { Entity } from './Entity';

interface IProps {
  list: IEntity[];
  deleteEntity: (id: string) => void;
}

export class EntityBox extends React.Component<IProps, any> {
  public render() {
    return (
      <div className="center-box-container">
        {this.props.list.map((item: IEntity) => (
          <Entity {...item} key={item.id} onClickDelete={this.props.deleteEntity} />
        ))}
      </div>
    );
  }
}
