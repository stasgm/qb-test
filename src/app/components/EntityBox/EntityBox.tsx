import React from 'react';
import { IEntity } from '@src/app/model';
import { Entity } from './Entity';

import './index.css';

interface IProps {
  list: IEntity[];
  onDeleteEntity: (id: string) => void;
}

export class EntityBox extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className="center-box-container">
        {this.props.list.map((item: IEntity) => (
          <Entity {...item} key={item.id} onClickDelete={this.props.onDeleteEntity} />
        ))}
      </div>
    );
  }
}
