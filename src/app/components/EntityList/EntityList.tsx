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
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearFilter: () => void;
  onLoadMockEntities: () => void;
  onLoadEntities: () => void;
}

export class EntityList extends React.PureComponent<IProps> {
  private handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    return this.props.onSelectEntity(id, event.target.checked);
  };

  private getListItemNode = (item: IEntity) => (
    <EntityBlock {...item} onSelectEntity={this.handleChange(item.id!)} key={item.id} />
  );

  private getStatusMessageNode = () => (
    <div className="entity-list">
      {this.props.statusMessage.loadingData ? (
        <div className="loading-message">{this.props.statusMessage.loadingText}</div>
      ) : this.props.statusMessage.loadingError ? (
        <div className="loading-message">{this.props.statusMessage.loadingText}</div>
      ) : this.props.list.length === 0 ? (
        <div className="loading-message">Совпадений не найдено</div>
      ) : (
        <ul>{this.props.list.map(this.getListItemNode)}</ul>
      )}
    </div>
  );

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
        {this.getStatusMessageNode()}
      </div>
    );
  }
}
