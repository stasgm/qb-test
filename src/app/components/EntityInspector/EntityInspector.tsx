import React from 'react';
// import { Entities, Entity } from 'gdmn-orm';
import { EntityList, IEnityListMessage } from '@src/app/components/EntityInspector/EntityList';
import { EntityTreeView, ITreeNode } from '@src/app/components/EntityInspector/EntityTreeView';

export { ITreeNode, IEnityListMessage };

import './index.css';

interface IProps {
  list: string[];
  treeData?: ITreeNode;
  statusMessage: IEnityListMessage;
  onLoadMockEntities: () => void;
  onLoadEntities: () => void;
  onSelectEntity: (id: string, checked: boolean) => void;
  onUnselectEntity: () => void;
  onSelectAttribute: (parentAlias: string, name: string, checked: boolean) => void;
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
          <EntityTreeView
            data={this.props.treeData}
            onClear={this.props.onUnselectEntity}
            onSelectAttribute={this.props.onSelectAttribute}
          />
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
