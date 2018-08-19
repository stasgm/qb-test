import React from 'react';
import memoize from 'memoize-one';
import { Filter } from '@src/app/components/EntityInspector/Filter';
import { IAttribute, IEntity } from '@src/app/model';

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

const getName = (name: string): string => {
  return `attribute-item-${name}`;
};

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
      <div className="component-container">
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
        <AttributeList data={rootItem} />
      </div>
    );
  }
}

const AttributeList = (props: { data: ITreeNode }) => {
  return (
    <div className="entity-list">
      <ul>
        {props.data.children !== undefined ? (
          props.data.children.map((i, idx) => (
            <li key={idx} className="entity-item">
              {i.entities ? (
                <button className="attribute-entity-button">
                  <i className="fas fa-angle-right" />
                </button>
              ) : (
                <input type="checkbox" id={getName(i.name)} className="checkmark" />
              )}
              <label htmlFor={getName(i.name)}>{i.name}</label>
            </li>
          ))
        ) : (
          <li>Нет данных</li>
        )}
      </ul>
    </div>
  );
};
