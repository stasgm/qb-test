import Draggable from 'react-draggable';
import * as React from 'react';

export const EntityBox: React.SFC<{}> = () => (     
  <Draggable 
    axis="both"
    defaultPosition = {{x: 0, y: 0}}
    grid={[25, 25]}
    handle=".handle"
    bounds={{top: 0, left: 0, right: 800, bottom: 280}}
  >
    <div className="box no-cursor">
      <div className="handle cursor">COMPANY</div>
      <div className="content">
        <ul className="attributes">
          <li><input type="checkbox" id="checkbox-id"/><label htmlFor="checkbox-id"> ID</label></li>
          <li><input type="checkbox" id="checkbox-name"/><label htmlFor="checkbox-name"> Name</label></li>
          <li><input type="checkbox" id="checkbox-parent"/><label htmlFor="checkbox-parent"> Parent</label></li>
        </ul>
      </div>
    </div>
  </Draggable>
);