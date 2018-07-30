import React from 'react';
import { IAttribute } from '../../model';
import { Attribute } from './Attribute';

export interface IProps {
  deleteAttribute: (id: string) => void;
  list: Array<{ name: String; attribute: IAttribute }>;
}

export class AttributeBox extends React.Component<any, IProps> {
  public render() {
    return (
      <div className="right-box-container">
        {this.props.list.map((item: { name: String; attribute: IAttribute }) => (
          <Attribute
            {...item.name}
            {...item}
            onClickDelete={this.props.deleteAttribute}
            key={item.attribute.id || ''}
          />
        ))}
      </div>
    );
  }
}
