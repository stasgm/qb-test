import Draggable from 'react-draggable';
import * as React from 'react';

interface IAttribute {
  name: string,
}

interface IAttributeList {
  list: IAttribute[],
}

interface IEntity {
  name: string,
  attributes: IAttribute[],
}

interface IEntityProps {
  data: IEntity[],
}

const Attributes: React.SFC<IAttributeList> = (props) => (
  <div className="content">
    <ul className="attributes">
    { 
      props.list.map(i =>           
          <li><input type="checkbox" id="checkbox}"/><label htmlFor="checkbox"> {i.name}</label></li>
      )
    }
    </ul>    
  </div>
)

export const EntityBox: React.SFC<IEntityProps> = (props) => (     
  <div>
    {
      props.data.map(i =>
        <Draggable 
          axis="both"
          defaultPosition = {{x: 0, y: 0}}
          grid={[25, 25]}
          handle=".handle"
          bounds={{top: 0, left: 0, right: 800, bottom: 280}}
        >  
          <div className="box no-cursor">
            <div className="handle cursor">{i.name}</div>
            <Attributes list={i.attributes} />  
          </div>
        </Draggable>
      )
  }
  </div>  
);