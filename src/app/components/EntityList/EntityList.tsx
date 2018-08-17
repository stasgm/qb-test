import React from 'react';
import memoize from 'memoize-one';
// @ts-ignore;
import { Treebeard } from 'react-treebeard';

import { IEntity } from '@src/app/model';
import { EntityBlock } from '@src/app/components/EntityList/EntityBlock';
import { Filter } from '@src/app/components/EntityList/Filter';

import './index.css';

const data = {
  name: 'root',
  toggled: true,
  children: [
    {
      name: 'parent',
      children: [{ name: 'child1' }, { name: 'child2' }]
    },
    {
      name: 'loading parent',
      loading: true,
      children: []
    },
    {
      name: 'parent',
      children: [
        {
          name: 'nested parent',
          children: [{ name: 'nested child 1' }, { name: 'nested child 2' }]
        }
      ]
    }
  ]
};

interface IEnityListMessage {
  loadingData?: boolean;
  loadingText?: string;
  loadingError?: boolean;
}

interface IProps {
  list: IEntity[];
  treeData: object;
  statusMessage: IEnityListMessage;
  onSelectEntity: (id: string, checked: boolean) => void;
  onLoadMockEntities: () => void;
  onLoadEntities: () => void;
}

interface IState {
  filterText: string;
}

export class EntityList extends React.PureComponent<IProps, IState> {
  public state = {
    filterText: '',
  };

  public componentWillReceiveProps (nextprop: IProps) {
    console.log('nxtprop');
    // this.setState({ selectedEntity: nextprop.list[0] });
  };

  private filter = memoize((list: IEntity[], filterText: string) =>
    list.filter(item => item.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()))
  );

  private handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filterText: event.target.value });
  };

  private handleFilterClear = () => {
    this.setState({ filterText: '' });
  };

  private handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    return this.props.onSelectEntity(id, event.target.checked);
  };

  private getListItemNode = (item: IEntity) => (
    <EntityBlock {...item} onSelectEntity={this.handleChange(item.id!)} key={item.id} />
  );

  private getStatusMessageNode = (filteredList: IEntity[]) => (
    <div className="entity-list">
      {this.props.statusMessage.loadingData ? (
        <div className="loading-message">{this.props.statusMessage.loadingText}</div>
      ) : this.props.statusMessage.loadingError ? (
        <div className="loading-message">{this.props.statusMessage.loadingText}</div>
      ) : this.props.list.length === 0 ? (
        <div className="loading-message">Совпадений не найдено</div>
      ) : (
        <ul>{filteredList.map(this.getListItemNode)}</ul>
      )}
    </div>
  );

  public render() {
    const filteredList = this.filter(this.props.list, this.state.filterText);

    return (
      <div className="left-box-container">
        <div className="qb-logo">GDMN: Query Builder</div>
        {(this.props.treeData.toString() === '' ) ? (
          <Treebeard data={this.props.treeData} onToggle="onToggle" />
        ) : (
          <div>
            <div className="load-buttons-container">
              <button onClick={this.props.onLoadMockEntities}>Загрузить (тест) </button>
              <button onClick={this.props.onLoadEntities}>Загрузить</button>
            </div>
            <Filter
              value={this.state.filterText}
              onChangeFilter={this.handleFilterChange}
              onClearFilter={this.handleFilterClear}
            />
            {this.getStatusMessageNode(filteredList)}
          </div>
        )}
      </div>
    );
  }
}
