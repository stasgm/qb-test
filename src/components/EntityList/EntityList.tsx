import React from 'react';
import { IEntity } from '../../model';
import { EntityBlock } from './EntityBlock';

interface IProps {
  list: IEntity[];
  addEntity: (id: string) => void;
  filterEntities: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loadMockEntities: () => void;
  loadEntities: () => void;
}

export class EntityList extends React.Component<IProps, any> {
  public render() {
    return (
      <div className="left-box-container">
        <div className="load-buttons-container">
          <button onClick={this.props.loadMockEntities}>Тест данные </button>
          <button onClick={this.props.loadEntities}>С бэка</button>
        </div>
        <div className="entity-filter">
          <button className="clear-filter">X</button>
          <div className="inner">
            <input
              type="text"
              className="entity-filter-input"
              placeholder="Введите наименование"
              onChange={this.props.filterEntities}
            />
          </div>
        </div>
        <div className="entity-list">
          {this.props.list.map((item: IEntity) => (
            <EntityBlock {...item} onClick={this.props.addEntity} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}
