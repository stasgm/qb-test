import * as React from 'react';
import { IEntity } from '../../model';
import { Entity } from './Entity';


interface State {
  entityList: IEntity[];
}

export class EntityBox extends React.Component<{}, State> {

  state = { entityList: [] };

  private deleteHandle(id: number): void {
    
  }

  public render() {
    return (
      <div>
        {
          this.state.entityList.map((item: IEntity, idx: number) =>
            <Entity
              name={item.name}
              id={idx}
              onClick={this.deleteHandle}
              attributes={item.attributes}
            />
          )
        }
      </div>
    );
  }
};