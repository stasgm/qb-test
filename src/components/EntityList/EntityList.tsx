import React from "react";
import shortid from "shortid";
import { IEntity } from "../../model";
import { EntityBlock } from "./EntityBlock";

interface IProps {
  list: IEntity[];
  addEntity: (id: number) => void;
  filterEntities: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class EntityList extends React.Component<IProps, any> {
  public render() {
    return (
      <div>
        <div className="el-filter">
          <input
            type="text"
            className="el-filter-input"
            placeholder="Введите наименование"
            onChange={this.props.filterEntities}
          />
        </div>
        <div className="entity-list">
          {this.props.list.map((item: IEntity, idx) => (
            <EntityBlock
              name={item.name}
              onClick={this.props.addEntity}
              key={shortid.generate()}
              id={idx}
            />
          ))}
        </div>
      </div>
    );
  }
}
