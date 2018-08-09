import React from 'react';
import { IEntity } from '@src/app/model';
import { EntityBlock } from './EntityBlock';
import { Filter } from './Filter';

import './index.css';

interface IEnityListMessage {
  loadingData?: boolean;
  loadingText?: string;
  loadingError?: boolean;
}

interface IProps {
  list: IEntity[];
  statusMessage: IEnityListMessage;
  filterText: string;
  onSelectEntity: (id: string, checked: boolean) => void;
  // onSelectEntity: (event: React.ChangeEvent<HTMLInputElement>) => {id: number, checked: boolean};
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearFilter: () => void;
  onLoadMockEntities: () => void;
  onLoadEntities: () => void;
}

export class EntityList extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className="left-box-container">
        <div className="qb-logo">GDMN: Query Builder</div>
        <div className="load-buttons-container">
          <button onClick={this.props.onLoadMockEntities}>Загрузить (тест) </button>
          <button onClick={this.props.onLoadEntities}>Загрузить</button>
        </div>
        <Filter
          value={this.props.filterText}
          onChangeFilter={this.props.onChangeFilter}
          onClearFilter={this.props.onClearFilter}
        />
        {statusMessage(this.props)}
      </div>
    );
  }
}

const statusMessage = (props: IProps) => (
  <div className="entity-list">
    {props.statusMessage.loadingData ? (
      <div className="loading-message">{props.statusMessage.loadingText}</div>
    ) : props.statusMessage.loadingError ? (
      <div className="loading-message">{props.statusMessage.loadingText}</div>
    ) : props.list.length === 0 ? (
      <div className="loading-message">Совпадений не найдено</div>
    ) : (
      <ul>
        {props.list.map((item: IEntity) => (
          <EntityBlock {...item} onSelectEntity={(e) => handleChange(item.id || '', e, props.onSelectEntity)} key={item.id} />
        ))}
      </ul>
    )}
  </div>
);

const handleChange = (id: string, event: React.ChangeEvent<HTMLInputElement>, onSelectEntity: Function) => {
  return onSelectEntity(id, event.target.checked)
}
