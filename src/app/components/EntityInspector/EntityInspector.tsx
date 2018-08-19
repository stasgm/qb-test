import React from 'react';
import { IEntity } from '@src/app/model';
import { EntityList, IEnityListMessage } from '@src/app/components/EntityInspector/EntityList';
import { EntityTreeView, ITreeNode } from '@src/app/components/EntityInspector/EntityTreeView';

export { ITreeNode, IEnityListMessage };

import './index.css';

interface IProps {
  list: IEntity[];
  treeData?: ITreeNode;
  statusMessage: IEnityListMessage;
  onSelectEntity: (id: string, checked: boolean) => void;
  onUnselectEntity: () => void;
  onLoadMockEntities: () => void;
  onLoadEntities: () => void;
}

interface IState {
  filterText: string;
}

export class EntityInspector extends React.PureComponent<IProps, IState> {
  public render() {
    return (
      <div className="left-box-container">
        <div className="qb-logo">GDMN: Query Builder</div>
        {this.props.treeData !== undefined ? (
          <EntityTreeView data={this.props.treeData} onClear={this.props.onUnselectEntity} />
        ) : (
          <EntityList
            list={this.props.list}
            statusMessage={this.props.statusMessage}
            onSelectEntity={this.props.onSelectEntity}
            onLoadMockEntities={this.props.onLoadMockEntities}
            onLoadEntities={this.props.onLoadEntities}
          />
        )}
      </div>
    );
  }
}
