import { requiredParameters, isExpectedType, TYPES, checkTypeParameters } from "../utils/requiredParameterHelper";
class Customer {

    #customerId;
    #firstName;
    #lastName;
    #middleInitial;
    #phoneNum;
    #dateJoin;

    constructor(customerId = -1, firstName, lastName, middleInitial, phoneNum, dateJoin = new Date()) {
        requiredParameters([{ "customerId": customerId }, { "firstName": firstName }, { "lastName": lastName }, { "phoneNum": phoneNum }]);
        checkTypeParameters([customerId, firstName, lastName, phoneNum],
            [TYPES.INTEGER, TYPES.TEXT, TYPES.TEXT, TYPES.INTEGER]
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
        return `${this.#firstName + " " + `${getMiddleInitial() !== undefined ? getMiddleInitial() + " " : ""}` + this.#lastName}`;
    };

    setFullName(firstName, lastName, middleInitial) {
        requiredParameters([firstName, lastName]);
        checkTypeParameters([firstName, lastName],
            [TYPES.TEXT, TYPES.TEXT]
        );
        this.#firstName = firstName;
        if (middleInitial !== undefined) {
            isExpectedType(middleInitial, TYPES.TEXT);
            this.#middleInitial = middleInitial;
        }
        this.#lastName = lastName;
    };

    setFirsName(firstName) {
        requiredParameters([firstName]);
        isExpectedType(firstName, TYPES.TEXT);
        this.#firstName = firstName;
    };

    setLastName(lastName) {
        requiredParameters([lastName]);
        isExpectedType(lastName, TYPES.TEXT);
        this.#lastName = lastName;
    };

    setPhoneNum(phoneNum) {
        requiredParameters([phoneNum]);
        isExpectedType(phoneNum, TYPES.INTEGER);
        this.#phoneNum = phoneNum;
    };

    setDateJoin(dateJoin) {
        requiredParameters(dateJoin);
        isExpectedType(dateJoin, TYPES.DATE);
        this.#dateJoin = dateJoin;
    };

}