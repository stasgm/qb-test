import React from 'react';
import './index.css';

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Filter: React.SFC<IProps> = props => (
  <div className="entity-filter">
    <button className="action-button clear-filter">X</button>
    <div className="inner">
      <input
        type="text"
        className="entity-filter-input"
        placeholder="Введите наименование"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  </div>
);
