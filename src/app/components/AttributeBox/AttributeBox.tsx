import React from 'react';
import { IAttribute } from '@src/app/model';
import { Attribute } from './Attribute';

import './index.css';

/* export interface IProps {
  deleteAttribute?: (id: string) => void;
  list?: Array<{ name: String; attribute: IAttribute }>;
}
 */
const enum sortType {
  'ASC',
  'DESC'
}

export interface IAttributeParams {
  id: string;
  visible: boolean;
  expression: { enityName: string; fieldName: string };
  fieldAlias: string;
  sortType: sortType;
}

interface IState {
  attributeList: IAttributeParams[];
}

export class AttributeBox extends React.Component<any, IState> {
  public state = {
    attributeList: [
      {
        id: '0',
        visible: true,
        expression: { enityName: 'Company', fieldName: 'ID' },
        fieldAlias: 'Идентифиатор',
        sortType: sortType.ASC
      },
      {
        id: '1',
        visible: true,
        expression: { enityName: 'Company', fieldName: 'NAME' },
        fieldAlias: 'Наименование',
        sortType: sortType.ASC
      },
      {
        id: '2',
        visible: true,
        expression: { enityName: 'Company', fieldName: 'TYPE' },
        fieldAlias: 'Тип',
        sortType: sortType.ASC
      }
    ]
  };

  public render() {
    return (
      <div className="right-box-container">
        {this.state.attributeList.map((item: IAttributeParams) => (
          <Attribute
            {...item}
            /* onClickDelete={this.props.deleteAttribute} */ key={item.id!}
          />
        ))}
      </div>
    );
  }
}
