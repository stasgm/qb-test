import React from 'react';
import { IEntity } from '../../model';
import { EntityBlock } from './EntityBlock';
import { Filter } from './Filter';

interface IProps {
  list: IEntity[];
  isLoding: boolean;
  filterText: string;
  onAddEntity: (id: string) => void;
  onFilterEntities: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLoadMockEntities: () => void;
  onLoadEntities: () => void;
}

export const EntityList: React.SFC<IProps> = props => (
  <div className="left-box-container">
    <div className="load-buttons-container">
      <button onClick={props.onLoadMockEntities}>Загрузить (тест) </button>
      <button onClick={props.onLoadEntities}>Загрузить</button>
    </div>
    <Filter value={props.filterText} onChange={props.onFilterEntities} />
    <div className="entity-list">
      {props.isLoding ? (
        <div className="loading-message">Чтение данных...</div>
      ) : props.list.length === 0 ? (
        <div className="loading-message">Совпадений не найдено</div>
      ) : (
        props.list.map((item: IEntity) => <EntityBlock {...item} onClick={props.onAddEntity} key={item.id} />)
      )}
    </div>
  </div>
);
