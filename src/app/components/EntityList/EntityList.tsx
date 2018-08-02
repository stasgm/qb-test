import React from 'react';
import { IEntity } from '../../model';
import { EntityBlock } from './EntityBlock';
import { Filter } from './Filter';

import './index.css';

interface IProps {
  list: IEntity[];
  loadingData: boolean;
  filterText: string;
  onAddEntity: (id: string) => void;
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearFilter: () => void;
  onLoadMockEntities: () => void;
  onLoadEntities: () => void;
}

export const EntityList: React.SFC<IProps> = props => (
  <div className="left-box-container">
    <div className="load-buttons-container">
      <button onClick={props.onLoadMockEntities}>Загрузить (тест) </button>
      <button onClick={props.onLoadEntities}>Загрузить</button>
    </div>
    <Filter value={props.filterText} onChangeFilter={props.onChangeFilter} onClearFilter={props.onClearFilter} />
    <div className="entity-list">
      {props.loadingData ? (
        <div className="loading-message">Чтение данных...</div>
      ) : props.list.length === 0 ? (
        <div className="loading-message">Совпадений не найдено</div>
      ) : (
        props.list.map((item: IEntity) => <EntityBlock {...item} onClick={props.onAddEntity} key={item.id} />)
      )}
    </div>
  </div>
);
