import * as React from 'react';
import { IAttribute } from '../../model';

interface IAttributeList {
  data: IAttribute[]
}

export const AttributeList: React.SFC<IAttributeList> = (props) => (
  <div className="entity-box-content">
    <ul className="attributes">
      {
        props.data.map(i =>
          <li>
            <input type="checkbox" id="checkbox}" /><label htmlFor="checkbox"> {i.name}</label>
          </li>
        )
      }
    </ul>
  </div>
)