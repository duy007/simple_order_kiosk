import { requiredParameters, isExpectedType, TYPES, checkTypeParameters } from "../utils/requiredParameterHelper";
export class Customer {

    #customerId;
    #firstName;
    #lastName;
    #middleInitial;
    #phoneNum;
    #dateJoin;

    constructor(customerId = -1, firstName, lastName, middleInitial = "", phoneNum, dateJoin = new Date()) {
        requiredParameters([{ "customerId": customerId }, { "firstName": firstName }, { "lastName": lastName }, { "phoneNum": phoneNum }]);
        checkTypeParameters([customerId, firstName, lastName, middleInitial, phoneNum, dateJoin],
            [TYPES.INTEGER, TYPES.TEXT, TYPES.TEXT, TYPES.TEXT, TYPES.INTEGER, TYPES.DATE]
        );
        this.#customerId = customerId;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#middleInitial = middleInitial;
        this.#phoneNum = phoneNum;
        this.#dateJoin = dateJoin;
    };

    getId() {
        return this.#customerId;
    };

    getPhoneNum() {
        return this.#phoneNum;
    };

    getDateJoin() {
        return this.#dateJoin;
    };

    getFirstName() {
        return this.#firstName;
    };

    getMiddleInitial() {
        return this.#middleInitial;
    };

    getLastName() {
        return this.#lastName;
    };

    getFullName() {
        return `${this.#firstName + " " + this.#middleInitial + `${this.#middleInitial.length > 1 ? " " : ""}` + this.#lastName}`;
    };

    setFullName(firstName, lastName, middleInitial = "") {
        requiredParameters([{ "firstName": firstName }, { "lastName": lastName }]);
        checkTypeParameters([firstName, lastName, middleInitial],
            [TYPES.TEXT, TYPES.TEXT, TYPES.TEXT]
        );
        this.#firstName = firstName;
        this.#middleInitial = middleInitial;
        this.#lastName = lastName;
    };

    setFirsName(firstName) {
        requiredParameters([{ "firstName": firstName }]);
        isExpectedType(firstName, TYPES.TEXT);
        this.#firstName = firstName;
    };

    setLastName(lastName) {
        requiredParameters([{ "lastName": lastName }]);
        isExpectedType(lastName, TYPES.TEXT);
        this.#lastName = lastName;
    };

    setPhoneNum(phoneNum) {
        requiredParameters([{ "phoneNum": phoneNum }]);
        isExpectedType(phoneNum, TYPES.INTEGER);
        this.#phoneNum = phoneNum;
    };

    setDateJoin(dateJoin) {
        requiredParameters([{ "dateJoin": dateJoin }]);
        isExpectedType(dateJoin, TYPES.DATE);
        this.#dateJoin = dateJoin;
    };

}