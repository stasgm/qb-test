import React from 'react';
import { IEntity } from '../../model';
import { EntityBlock } from './EntityBlock';
import { Filter } from './Filter';

interface IProps {
  list: IEntity[];
  filterText: string;
  addEntity: (id: string) => void;
  filterEntities: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loadMockEntities: () => void;
  loadEntities: () => void;
}

export const EntityList: React.SFC<IProps> = props => (
  <div className="left-box-container">
    <div className="load-buttons-container">
      <button onClick={props.loadMockEntities}>Загрузить (тест) </button>
      <button onClick={props.loadEntities}>Загрузить</button>
    </div>
    <Filter value={props.filterText} onChange={props.filterEntities} />
    <div className="entity-list">
      {props.list.length === 0 ? (
        <div className="loading-message">Чтение данных...</div>
      ) : (
        props.list.map((item: IEntity) => <EntityBlock {...item} onClick={props.addEntity} key={item.id} />)
      )}
    </div>
  </div>
);
