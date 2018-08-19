import React from 'react';
import memoize from 'memoize-one';
import { Filter } from '@src/app/components/EntityInspector/Filter';
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

  onSelectAttribute: (id: string, checked: boolean) => void;
}

interface IState {
  filterText: string;
}

export class EntityTreeView extends React.PureComponent<IAppProps, IState> {
  public state = {
    filterText: ''
  };

  private filter = memoize((list: ITreeNode[] | undefined, filterText: string) => {
    if (list === undefined) {
      return [];
    }
    return list.filter(item => item.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));
  });

  private handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filterText: event.target.value });
  };

  private handleFilterClear = () => {
    this.setState({ filterText: '' });
  };

  private handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    return this.props.onSelectAttribute(id, event.target.checked);
  };

  private getListItemNode = (item: ITreeNode) => (
    <AttributeBlock {...item} onSelectEntity={this.handleChange(item.name)} key={item.name} />
  );

  private getStatusMessageNode = (filteredList: ITreeNode[]) => (
    <div className="entity-list">
      {this.props.data === undefined ? (
        <div className="loading-message">Совпадений не найдено</div>
      ) : (
        <ul>{filteredList.map(this.getListItemNode)}</ul>
      )}
    </div>
  );

  public render() {
    const rootItem = this.props.data;
    const filteredList: ITreeNode[] = this.filter(this.props.data.children, this.state.filterText);
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
        {this.getStatusMessageNode(filteredList)}
      </div>
    );
  }
}

const getName = (name: string): string => {
  return `entity-item-${name}`;
};

interface IEntityEvent {
  onSelectEntity: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AttributeBlock = (props: ITreeNode & IEntityEvent) => {
  return (
    <li key={props.name} className="entity-item">
      {props.entities ? (
        <button className="attribute-entity-button">
          <i className="fas fa-angle-right" />
        </button>
      ) : (
        <input type="checkbox" id={getName(props.name)} className="checkmark" onChange={props.onSelectEntity} />
      )}
      <label htmlFor={getName(props.name)}>{props.name}</label>
    </li>
  );
};
