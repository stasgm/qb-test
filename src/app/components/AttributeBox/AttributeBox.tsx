import React, { ReactEventHandler, Component } from 'react';
import { IAttribute } from '@src/app/model';
import { Attribute } from '@src/app/components/AttributeBox/Attribute';
import { sortType, SortType } from '../../types';

import './index.css';

/* export interface IProps {
  deleteAttribute?: (id: string) => void;
  list?: Array<{ name: String; attribute: IAttribute }>;
}
 */

export interface IAttributeParams {
  id: string;
  visible: boolean;
  expression: { enityName: string; fieldName: string };
  fieldAlias: string;
  sortType: string;
}

interface IState {
  attributeList: IAttributeParams[];
}

export class AttributeBox extends Component<any, IState> {
  public state = {
    attributeList: [
      {
        id: '0',
        visible: true,
        expression: { enityName: 'Company', fieldName: 'ID' },
        fieldAlias: 'Идентифиатор',
        sortType: sortType[0]
      },
      {
        id: '1',
        visible: true,
        expression: { enityName: 'Company', fieldName: 'NAME' },
        fieldAlias: 'Наименование',
        sortType: sortType[0]
      },
      {
        id: '2',
        visible: true,
        expression: { enityName: 'Company', fieldName: 'TYPE' },
        fieldAlias: 'Тип',
        sortType: sortType[0]
      },
      {
        id: '3',
        visible: true,
        expression: { enityName: 'Folder', fieldName: 'ID' },
        fieldAlias: 'Идентифиатор',
        sortType: sortType[1]
      },
      {
        id: '4',
        visible: true,
        expression: { enityName: 'Folder', fieldName: 'NAME' },
        fieldAlias: 'Наименование',
        sortType: sortType[0]
      },
      {
        id: '5',
        visible: true,
        expression: { enityName: 'Folder', fieldName: 'PARENT' },
        fieldAlias: 'Родитель',
        sortType: sortType[0]
      }
    ]
  };

  private handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAttributeList: IAttributeParams[] = this.state.attributeList.map(
      (item: IAttributeParams) => (item.id === id ? { ...item, visible: event.target.checked } : item)
    );
    this.setState({ attributeList: newAttributeList });
    console.log(this.state.attributeList);
  };

  private handleChangeFieldAlias = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAttributeList: IAttributeParams[] = this.state.attributeList.map(
      (item: IAttributeParams) => (item.id === id ? { ...item, fieldAlias: event.target.value } : item)
    );
    this.setState({ attributeList: newAttributeList });
  };

  private handleChangeSortType = (id: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newAttributeList: IAttributeParams[] = this.state.attributeList.map(
      (item: IAttributeParams) => (item.id === id ? { ...item, sortType: event.target.value } : item)
    );
    this.setState({ attributeList: newAttributeList });
  };

  private handleVisibleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  public render() {
    return (
      <div className="bottom-box-container">
        <table>
          <thead>
            <tr className="header">
              <th>Visible</th>
              <th>Expression</th>
              <th>Field alias</th>
              <th>Sort type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.attributeList.map((item: IAttributeParams) => (
              <Attribute
                {...item}
                onChange={this.handleChange(item.id)}
                onChangeSortType={this.handleChangeSortType(item.id)}
                onChangeFieldAlias={this.handleChangeFieldAlias(item.id)}
                /* onClickDelete={this.props.deleteAttribute} */ key={item.id!}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
