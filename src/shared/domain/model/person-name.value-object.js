export class PersonName {

    _firstName;
    _lastName;

    constructor(firstName, lastName) {
        const trimmedFirstName = firstName?.trim() || "";
        const trimmedLastName = lastName?.trim() || "";

        this._firstName = trimmedFirstName;
        this._lastName = trimmedLastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return `${this._firstName} ${this.lastName}`;
    }

    equals(other) {
        return other instanceof PersonName &&
            this._firstName === other.firstName &&
            this._lastName === other.lastName;
    }

    isFullyNamed() {
        return this._firstName.length > 0 && this._lastName.length > 0;
    }

    isValid() {
        return this.isFullyNamed();
    }

}