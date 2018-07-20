import * as React from 'react';
import * as ERModel from '../erdata';

type Props = {
    name?: string
}

interface IEntityProps {
  list: ERModel.IEntity[],
}

export const Entity: React.SFC<IEntityProps> = (props) => (
    <div>
      {
        props.list.map(i => 
          <div className="entity-item handle cursor">
            {i.name}
          </div>
        )}
    </div>    
  );
  
export const EntityList: React.SFC<Props> = () => (     
    <div>
      <Entity list={ERModel.entityList} />
    </div>
);