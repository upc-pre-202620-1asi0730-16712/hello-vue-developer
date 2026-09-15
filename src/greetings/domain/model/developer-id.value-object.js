import {generateUUID, isValidUUID} from "@/shared/domain/uuid.js";

export class DeveloperId {

    _value;

    constructor(value) {
        if (!isValidUUID(value)) {
            throw new Error(`Value ${value} is not a valid UUID`);
        }
        this._value = value;
    }

    get value() {
        return this._value;
    }

    static build() {
        return new DeveloperId(generateUUID());
    }

    equals(other) {
        return other instanceof DeveloperId &&
            this._value === other.value;
    }

    toString() {
        return this._value;
    }
}