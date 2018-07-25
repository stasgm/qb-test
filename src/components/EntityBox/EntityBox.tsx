import React from "react";
import shortid from "shortid";
import { IEntity } from "../../model";
import { Entity } from "./Entity";

interface IProps {
    list: IEntity[];
    deleteEntity: (id: number) => void;
}

export class EntityBox extends React.Component<IProps, any> {
    public render() {
        return (
            <div>
                {this.props.list.map((item: IEntity, idx: number) => (
                    <Entity
                        name={item.name}
                        id={idx}
                        key={shortid.generate()}
                        onClickDelete={() => this.props.deleteEntity(idx)}
                        attributes={item.attributes}
                    />
                ))}
            </div>
        );
    }
}
