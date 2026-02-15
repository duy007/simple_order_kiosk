import { dateISO8601String } from "../utils/dateHelper";
import { checkTypeParameters, isExpectedType, requiredParameters, TYPES } from "../utils/requiredParameterHelper";
class Cart {
    #cartId;
    #customerId;
    #dateCreated;

    constructor(cartId, customerId, dateCreated) {
        requiredParameters([cartId, customerId, dateCreated]);
        checkTypeParameters([cartId, customerId, dateCreated],
            [TYPES.INTEGER, TYPES.INTEGER, TYPES.DATE]
        );
        this.#cartId = cartId;
        this.#customerId = customerId;
        this.#dateCreated = new Date(dateCreated);
    };

    constructor(customerId) {
        requiredParameters([customerId]);
        isExpectedType(customerId, TYPES.INTEGER);
        this.#customerId = customerId;
        this.#dateCreated = new Date();
    };

    getId() {
        return this.#cartId;
    }

    getDate() {
        return this.#dateCreated !== undefined ? dateISO8601String(this.#dateCreated) : this.#dateCreated;
    };

    getCustomer() {
        return this.#customerId;
    }
}