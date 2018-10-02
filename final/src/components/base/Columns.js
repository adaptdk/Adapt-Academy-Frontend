import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNil, isArray } from 'lodash';

import { mediaQueryMapper } from '../../utils/mediaQuery';

class Columns extends Component {
  static propTypes = {
    className: PropTypes.string,
    query: PropTypes.string,
    options: PropTypes.array,
    columns: PropTypes.number,
    children: PropTypes.node.isRequired,
    masonry: PropTypes.bool,
    fill: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    options: [],
    columns: 1,
    query: '',
    masonry: false,
    fill: false,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.updateColumns(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const optionsChanged = this.props.options !== nextProps.options;
    const columnsChanged = this.props.columns !== nextProps.columns;
    const queryChanged = this.props.query !== nextProps.query;
    if (optionsChanged || columnsChanged || queryChanged) {
      this.updateColumns(nextProps);
    }
  }

  componentWillUnmount() {
    this.removeColumnListeners();
  }

  setColumns() {
    this.setState(() => ({
      columns: this._columns.getValue(),
    }));
  }

  setQuery() {
    this.setState(() => ({
      query: this._query.getValue(),
    }));
  }

  getColumnsContainers({ masonry, children, columns }) {
    const validChildren = !isNil(children) && isArray(children) ?
      children.filter((c) => !isNil(c)) :
      [children];
    return masonry ? this.mapColumns({ children: validChildren, columns }) : validChildren;
  }

  // Masonry and fill can't be at once. So if masonry specified fill classname can't be applied here
  getColumnClassName = ({ fill, masonry }) => (!masonry && fill ? 'columns__column columns__column--fill' : 'columns__column');

  removeColumnListeners() {
    if (this._columns) {
      this._columns.removeListeners();
    }

    if (this._query) {
      this._query.removeListeners();
    }
  }

  updateColumns(props) {
    if (props.options.length) {
      this.removeColumnListeners();
      this._columns = mediaQueryMapper({
        queries: props.options,
        valueKey: 'columns',
        defaultValue: props.options.length ? 1 : props.columns,
        onChange: this.setColumns.bind(this),
      });
      this._query = mediaQueryMapper({
        queries: props.options,
        valueKey: 'query',
        defaultValue: props.options.length ? 1 : props.columns,
        onChange: this.setQuery.bind(this),
      });
      this.setColumns();
      this.setQuery();
    }
  }

  mapColumns = ({ children = [], columns = 1 } = {}) => {
    const nodes = [];

    for (let i = 0; i < columns; i += 1) {
      nodes[i] = children.filter((child, j) => j % columns === i);
    }

    return nodes;
  };

  mapStyle = ({ columns = 1, query = '', idx = 0 } = {}) => {
    const { options, masonry } = this.props;

    if (columns === 1) {
      return { width: '100%' };
    }

    const option = options.filter((o) => o.columns === columns && o.query === query)[0];

    let styles = {};

    if (isNil(option)) {
      styles = { ...options[0].styles };
    } else {
      styles = { ...option.styles };
    }

    const index = masonry ? idx : idx % columns;

    return styles[index];
  };

  render() {
    const {
      className,
      children,
      masonry,
      fill,
    } = this.props;
    const { columns = this.props.columns } = this.state;
    const { query } = this.state;
    const columnClassName = this.getColumnClassName({ fill, masonry });
    const columnsContainers = this.getColumnsContainers({ masonry, children, columns });

    return (
      <div className={ `${className} columns` }>
        <div className="columns__row">
          {
            columnsContainers.map((column, idx) => (
              <div
                key={`${idx}-column`} // eslint-disable-line
                className={ columnClassName }
                style={ this.mapStyle({ columns, query, idx }) }
              >
                { column }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Columns;

