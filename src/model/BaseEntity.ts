import { Helpers } from "./Helpers";

export type BaseEntityType = "entity" | "link";
 

export class BaseEntity {
	public id: string;
	public locked: boolean;	

	constructor(id?: string) {
		this.id = id || Helpers.UID();
		this.locked = false;
	}

	getID() {
		return this.id;
	}
}