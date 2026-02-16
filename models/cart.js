import { dateISO8601String } from "../utils/dateHelper";
import { checkTypeParameters, requiredParameters, TYPES } from "../utils/requiredParameterHelper";
export class Cart {
    #cartId;
    #customerId;
    #dateCreated;

    constructor(cartId = -1, customerId, dateCreated = new Date()) {
        requiredParameters({ "cartId": cartId, "customerId": customerId, "dateCreated": dateCreated });
        checkTypeParameters([cartId, customerId, dateCreated],
            [TYPES.INTEGER, TYPES.INTEGER, TYPES.DATE]
        );
        this.#cartId = cartId;
        this.#customerId = customerId;
        this.#dateCreated = dateCreated;
    };

    getId() {
        return this.#cartId;
    }

    toISO8601DateString() {
        return this.#dateCreated !== undefined ? dateISO8601String(this.#dateCreated) : this.#dateCreated;
    };

    getDate() {
        return this.#dateCreated;
    };

    getCustomer() {
        return this.#customerId;
    };
}