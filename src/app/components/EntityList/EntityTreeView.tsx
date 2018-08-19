import React from 'react';
import memoize from 'memoize-one';
import { Filter } from '@src/app/components/EntityList/Filter';
import { IAttribute } from '@src/app/model';

export interface ITreeNode {
  name: string;
  loading?: boolean;
  checked?: boolean;
  toggled?: boolean;
  entities?: string[];
  children?: ITreeNode[] | undefined;
}

interface IAppProps {
  data: ITreeNode;
  onClear: () => void;
}

interface IState {
  filterText: string;
}

export class EntityTreeView extends React.PureComponent<IAppProps, IState> {
  public state = {
    filterText: ''
  };

private filter = memoize((list: IAttribute[], filterText: string) =>
  list.filter(item => item.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()))
);

private handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({ filterText: event.target.value });
};

private handleFilterClear = () => {
  this.setState({ filterText: '' });
};

  public render() {
    const rootItem = this.props.data;
    return (
      <div className="data-container">
        <div className="entity-name">
          <span>{rootItem.name}</span>
          <button className="filter-clear" onClick={this.props.onClear}>
            <i className="fas fa-times" />
          </button>
        </div>
        <Filter
          value={this.state.filterText}
          onChangeFilter={this.handleFilterChange}
          onClearFilter={this.handleFilterClear}
        />
        <ul>
          {rootItem.children !== undefined ? (
            rootItem.children.map((i, idx) => (
              <li key={idx} className="entity-item">
                {i.entities ? <span>+</span> : <input type="checkbox" id="checkbox" className="checkmark" />}
                <label htmlFor="checkbox">{i.name}</label>
              </li>
            ))
          ) : (
            <li>Нет данных</li>
          )}
        </ul>
      </div>
    );
  }
}
