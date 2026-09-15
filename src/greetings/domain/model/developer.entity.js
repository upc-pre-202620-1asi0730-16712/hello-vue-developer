import {PersonName} from "@/shared/domain/model/person-name.value-object.js";
import {DeveloperId} from "@/greetings/domain/model/developer-id.value-object.js";

export class Developer {
    _id;
    _name;

    constructor(firstName, lastName) {
        const provideName = new PersonName(firstName, lastName);
        this._id = provideName.isValid() ? DeveloperId.build() : null;
        this.name = provideName;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get fullName() {
        return this._name ? this._name.fullName : "Unknown";
    }

    isRegisterable() {
        return this._name ? this._name.isValid() : false;
    }

    isIdentified() {
        return this._id !== null;
    }

}