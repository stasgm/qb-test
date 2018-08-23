import PropTypes, { array } from 'prop-types';
import React, { Component } from 'react';
// @ts-ignore
import InfiniteTree from 'infinite-tree';
import VirtualList from 'react-tiny-virtual-list';

const lcfirst = (str: string) => {
    str += '';
    return str.charAt(0).toLowerCase() + str.substr(1);
};

interface IBaseProps {
  el?: string;
  className? :string;
  style? :string;
  // [name: string]: object;
}

interface IProps {
  // Whether to open all nodes when tree is loaded.
  autoOpen?: boolean;
  // Whether or not a node is selectable in the tree.
  selectable?: boolean;
  // Specifies the tab order to make tree focusable.
  tabIndex?: number;
  // Tree data structure, or a collection of tree data structures.
  data?: [] | object;
  // Width of the tree.
  width?: string | number;
  // Height of the tree.
  height?: string | number;
  // Either a fixed height, an array containing the heights of all the rows, or a function that returns the height of a row given its index: `(index: number): number`
  rowHeight?: number | [] | (() => void);
  // A row renderer for rendering a tree node.
  rowRenderer?: () => void;
  // Loads nodes on demand.
  loadNodes?: () => void;
  // Provides a function to determine if a node can be selected or deselected. The function must return `true` or `false`. This function will not take effect if `selectable` is not `true`.
  shouldSelectNode?: () => void;
  // Controls the scroll offset.
  scrollOffset?: number;
  // Node index to scroll to.
  scrollToIndex?: number;
  // Callback invoked whenever the scroll offset changes.
  onScroll?: () => void;
  // Callback invoked before updating the tree.
  onContentWillUpdate?: () => void;
  // Callback invoked when the tree is updated.
  onContentDidUpdate?: () => void;
  // Callback invoked when a node is opened.
  onOpenNode?: () => void;
  // Callback invoked when a node is closed.
  onCloseNode?: () => void;
  // Callback invoked when a node is selected or deselected.
  onSelectNode?: () => void;
  // Callback invoked before opening a node.
  onWillOpenNode?: () => void;
  // Callback invoked before closing a node.
  onWillCloseNode?: () => void;
  // Callback invoked before selecting or deselecting a node.
  onWillSelectNode?: () => void;
}

interface IState {
  nodes: [];
}

interface ITreeObject {
  filter: () => void;
}

export class InfiniteTree extends Component<IProps & IBaseProps, IState> {
    public static displayName: string = 'InfiniteTree';

    public static defaultProps = {
        autoOpen: false,
        selectable: true,
        tabIndex: 0,
        data: [],
        width: '100%'
    };

    public tree: ITreeObject | null = null;

    public state: Readonly<IState> = {
        nodes: []
    };

    public filter() {
      return
    }

    public eventHandlers = {
        onContentWillUpdate: null,
        onContentDidUpdate: null,
        onOpenNode: null,
        onCloseNode: null,
        onSelectNode: null,
        onWillOpenNode: null,
        onWillCloseNode: null,
        onWillSelectNode: null
    };

    public componentDidMount() {
        const { children, className, style, ...options } = this.props;

        if (options.el !== undefined) {
            delete options.el;
        }

        options.rowRenderer = () => '';

        this.tree = new InfiniteTree(options);

        // Filters nodes.
        // https://github.com/cheton/infinite-tree/wiki/Functions:-Tree#filterpredicate-options
        const treeFilter = this.tree.filter.bind(this.tree);
        this.tree.filter = (...args) => {
            setTimeout(() => {
                this.virtualList.recomputeSizes(0);
            }, 0);
            return treeFilter(...args);
        };

        // Unfilter nodes.
        // https://github.com/cheton/infinite-tree/wiki/Functions:-Tree#unfilter
        const treeUnfilter = this.tree.unfilter.bind(this.tree);
        this.tree.unfilter = (...args) => {
            setTimeout(() => {
                this.virtualList.recomputeSizes(0);
            }, 0);
            return treeUnfilter(...args);
        };

        // Sets the current scroll position to this node.
        // @param {Node} node The Node object.
        // @return {boolean} Returns true on success, false otherwise.
        this.tree.scrollToNode = (node) => {
            if (!this.tree || !this.virtualList) {
                return false;
            }

            const nodeIndex = this.tree.nodes.indexOf(node);
            if (nodeIndex < 0) {
                return false;
            }

            const offset = this.virtualList.getOffsetForIndex(nodeIndex);
            this.virtualList.scrollTo(offset);

            return true;
        };

        // Gets (or sets) the current vertical position of the scroll bar.
        // @param {number} [value] If the value is specified, indicates the new position to set the scroll bar to.
        // @return {number} Returns the vertical scroll position.
        this.tree.scrollTop = (value) => {
            if (!this.tree || !this.virtualList) {
                return;
            }

            if (value !== undefined) {
                this.virtualList.scrollTo(Number(value));
            }

            return this.virtualList.getNodeOffset();
        };

        // Updates the tree.
        this.tree.update = () => {
            this.tree.emit('contentWillUpdate');
            this.setState(state => ({
                nodes: this.tree.nodes
            }), () => {
                this.tree.emit('contentDidUpdate');
            });
        };

        Object.keys(this.eventHandlers).forEach(key => {
            if (!this.props[key]) {
                return;
            }

            const eventName = lcfirst(key.substr(2)); // e.g. onContentWillUpdate -> contentWillUpdate
            this.eventHandlers[key] = this.props[key];
            this.tree.on(eventName, this.eventHandlers[key]);
        });
    }

    public componentWillUnmount() {
        Object.keys(this.eventHandlers).forEach(key => {
            if (!this.eventHandlers[key]) {
                return;
            }

            const eventName = lcfirst(key.substr(2)); // e.g. onUpdate -> update
            this.tree.removeListener(eventName, this.eventHandlers[key]);
            this.eventHandlers[key] = null;
        });

        this.tree.destroy();
        this.tree = null;
    }

    public render() {
        const {
            autoOpen,
            selectable,
            tabIndex,
            data,
            width,
            height,
            rowHeight,
            rowRenderer,
            shouldLoadNodes,
            loadNodes,
            shouldSelectNode,
            scrollOffset,
            scrollToIndex,
            onScroll,
            onContentWillUpdate,
            onContentDidUpdate,
            onOpenNode,
            onCloseNode,
            onSelectNode,
            onWillOpenNode,
            onWillCloseNode,
            onWillSelectNode,
            style,
            children,
            ...props
        } = this.props;

        const render = (typeof children === 'function')
            ? children
            : rowRenderer;

        const count = this.tree
            ? this.tree.nodes.length
            : 0;

        // VirtualList
        const virtualListProps = {};
        if ((scrollOffset !== undefined) && (count > 0)) {
            virtualListProps.scrollOffset = scrollOffset;
        }
        if ((scrollToIndex !== undefined) && (scrollToIndex >= 0) && (scrollToIndex < count)) {
            virtualListProps.scrollToIndex = scrollToIndex;
        }
        if (typeof onScroll === 'function') {
            virtualListProps.onScroll = onScroll;
        }

        return (
            <div
                {...props}
                style={{
                    outline: 'none',
                    ...style
                }}
                tabIndex={tabIndex}
            >
                <VirtualList
                    ref={node => {
                        this.virtualList = node;
                    }}
                    width={width}
                    height={height}
                    itemCount={count}
                    itemSize={(index) => {
                        const node = this.tree.nodes[index];
                        if (node && node.state.filtered === false) {
                            return 0;
                        }

                        if (typeof rowHeight === 'function') {
                            return rowHeight({
                                node: this.tree.nodes[index],
                                tree: this.tree
                            });
                        }

                        return rowHeight; // Number or Array
                    }}
                    renderItem={({ index, style }) => {
                        let row = null;

                        if (typeof render === 'function') {
                            const node = this.tree.nodes[index];
                            if (node && node.state.filtered !== false) {
                                row = render({
                                    node: this.tree.nodes[index],
                                    tree: this.tree
                                });
                            }
                        }

                        return (
                            <div key={index} style={style}>
                                {row}
                            </div>
                        );
                    }}
                    {...virtualListProps}
                />
            </div>
        );
    }
};
