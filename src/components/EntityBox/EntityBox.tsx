import React from "react";
import shortid from "shortid";
import { IEntity } from "../../model";
import { Entity } from "./Entity";

interface IProps {
    list: IEntity[];
    deleteEntity: (name: string) => void;
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
                        onClickDelete={() => this.props.deleteEntity(item.name)}
                        attributes={item.attributes}
                    />
                ))}
            </div>
        );
    }
}
