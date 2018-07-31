import React from 'react';

interface IProps {
  onChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearFilter: () => void;
  value: string;
}

export const Filter: React.SFC<IProps> = props => (
  <div className="filter">
    <div className="inner">
      <div className="search-svg">
        <i className="fas fa-search"></i>
      </div>
      <div className="filter-textbox">
        <input
          type="text"
          className="filter-input"
          placeholder="Введите наименование"
          onChange={props.onChangeFilter}
          value={props.value}
        />
      </div>
      {props.value && <button className="filter-clear" onClick={props.onClearFilter}>
        <i className="fas fa-times"></i>
      </button>}
    </div>
  </div>
);
