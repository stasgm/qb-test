import * as React from "react";
import { IEntity } from "../../model";
import { Entity } from "./Entity";

interface State {
  entityList: IEntity[];
}

export class EntityBox extends React.Component<{}, State> {
  constructor() {
    super({})
    this.deleteEntityHandle = this.deleteEntityHandle.bind(this);    
  }

  state = {
    entityList: [
      {
        name: "Company",
        attributes: [
          { name: "id" },
          { name: "name" },
          { name: "parent" },
          { name: "alias" },
          { name: "id2" },
          { name: "name2" },
          { name: "parent2" },
          { name: "name2" },
          { name: "parent2" },
          { name: "alias2" }
        ]
      }
    ]
  };

  private deleteEntityHandle(id: number): void {
    this.setState({ entityList: [] });
    console.log(id);
  }

  public render() {
    return (
      <div>
        {this.state.entityList.map((item: IEntity, idx: number) => (
          <Entity
            name={item.name}
            id={idx}
            onDeleteEntity={this.deleteEntityHandle}
            attributes={item.attributes}
          />
        ))}
      </div>
    );
  }
}
