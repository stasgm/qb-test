import React from 'react';
import { IEntity } from '../../model';
import { EntityBlock } from './EntityBlock';
import { Filter } from './Filter';

import './index.css';

interface IProps {
  list: IEntity[];
  isLoading: boolean;
  filterText: string;
  onAddEntity: (id: string) => void;
  onFilterEntities: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLoadMockEntities: () => void;
  onLoadEntities: () => void;
  onClearFilter: () => void;
}

export const EntityList: React.SFC<IProps> = props => (
  <div className="left-box-container">
    <div className="load-buttons-container">
      <button onClick={props.onLoadMockEntities}>Загрузить (тест) </button>
      <button onClick={props.onLoadEntities}>Загрузить</button>
    </div>
    <Filter value={props.filterText} onChange={props.onFilterEntities} onClearFilter={props.onClearFilter}/>
    <div className="entity-list">
      {props.isLoading ? (
        <div className="loading-message">Чтение данных...</div>
      ) : props.list.length === 0 ? (
        <div className="loading-message">Совпадений не найдено</div>
      ) : (
        props.list.map((item: IEntity) => <EntityBlock {...item} onClick={props.onAddEntity} key={item.id} />)
      )}
    </div>
  </div>
);
