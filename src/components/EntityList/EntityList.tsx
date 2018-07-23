import * as React from 'react';
import { IEntity } from '../../model';
import { entityAPI } from '../../api/entity';
import { EntityBlock } from './EntityBlock';

/* interface IEntityProps {
  list: IEntity[],
  addEntity: (id: number) => void,
} */

interface IState {
  entityList: IEntity[];
}

export class EntityList extends React.Component<{}, IState> {
  state = { entityList: [] };

  public componentDidMount() {
    entityAPI.fetchMembers()
      .then((entityList) => {
        this.setState({ entityList });
      });
  }

  private addEntityHandle(id: number): void {
    /*     this.setState({ 
          entityList: [...this.state.entityList]
        }); */
  }

  public render() {
    return (
      <div>
        {
          this.state.entityList.map((item: IEntity, idx) =>
            <EntityBlock
              name={item.name}
              onClick={this.addEntityHandle}
              id={idx}
            />
          )
        }
      </div>
    );
  }
};