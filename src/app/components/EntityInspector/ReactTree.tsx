import React from 'react';
// @ts-ignore
import InfiniteTree from 'react-infinite-tree';
// @ts-ignore
import Checkbox from '@trendmicro/react-checkbox';
import styled from 'styled-components';
import { ITreeNode } from '@src/app/components/EntityInspector/EntityInspector';

interface IReactTreeProps {
  data?: ITreeNode;
}

export const ReactTree: React.SFC<IReactTreeProps> = props => (
  <InfiniteTree className="center-box-container" width="100%" height={400} rowHeight={30} data={props.data}>
    {({ node, tree }: any) => {
      // Determine the toggle state
      let toggleState = '';
      const hasChildren = node.hasChildren();

      if ((!hasChildren && node.loadOnDemand) || (hasChildren && !node.state.open)) {
        toggleState = 'closed';
      }
      if (hasChildren && node.state.open) {
        toggleState = 'opened';
      }

      return (
        <TreeNode
          {...{ selected: node.state.selected, depth: node.state.depth }}
          onClick={(event: any) => {
            tree.selectNode(node);
          }}
        >
          <Toggler
            state={toggleState}
            onClick={() => {
              if (toggleState === 'closed') {
                tree.openNode(node);
              } else if (toggleState === 'opened') {
                tree.closeNode(node);
              }
            }}
          />
          <Checkbox
            className="checkmark"
            checked={node.state.checked}
            indeterminate={node.state.indeterminate}
            onClick={(event: any) => {
              event.stopPropagation();
            }}
            onChange={(event: any) => {
              tree.checkNode(node);
              // onUpdate(node);
            }}
          />
          <span>{node.name}</span>
        </TreeNode>
      );
    }}
  </InfiniteTree>
);

const defaultRowHeight = 30;

const TreeNode = ({ selected, depth, ...divProps }: any) => (
  <div
    className="tree-node"
    style={{
      cursor: 'default',
      position: 'relative',
      lineHeight: `${defaultRowHeight}px`,
      background: selected ? '#deecfd' : 'transparent',
      border: selected ? '1px solid #06c' : '1px solid transparent',
      paddingLeft: `${depth * 18}px`
    }}
    {...divProps}
  />
);

const Toggler = styled(({ state, ...props }: any) => (
  <a {...props}>
    {state === 'closed' && <i className="fa fa-fw fa-chevron-right" />}
    {state === 'opened' && <i className="fa fa-fw fa-chevron-down" />}
  </a>
))`
  color: #333;
  display: inline-block;
  text-align: center;
  margin-right: 2px;
`;
