import { checkTypeParameters, requiredParameters, TYPES } from "../utils/requiredParameterHelper";

export class Topping {

    #toppingId;
    #toppingName;
    #price;
    #extraPrice;

    constructor(toppingId = -1, toppingName, price, extraPrice) {
        requiredParameters([
            { "toppingId": toppingId },
            { "toppingName": toppingName },
            { "price": price },
            { "extraPrice": extraPrice }
        ]);
        checkTypeParameters([toppingId, toppingName, price, extraPrice],
            [TYPES.INTEGER, TYPES.TEXT, TYPES.INTEGER, TYPES.INTEGER]
        );
        this.#toppingId = toppingId;
        this.#toppingName = toppingName;
        this.#price = price;
        this.#extraPrice = extraPrice;
    }

    getToppingId() {
        return this.#toppingId;
    }

    getToppingName() {
        return this.#toppingName;
    }

    getToppingPrice() {
        return this.#price;
    }

    getExtraToppingPrice() {
        return this.#extraPrice;
    }

    setToppingName(name) {
        requiredParameters([{ "name": name }]);
        isExpectedType(name, TYPES.TEXT);
        this.#toppingName = name;
    }

    setToppingPrice(price) {
        requiredParameters([{ "price": price }]);
        isExpectedType(price, TYPES.TEXT);
        this.#price = price;
    }


    setExtraToppingPrice(price) {
        requiredParameters([{ "price": price }]);
        isExpectedType(price, TYPES.TEXT);
        this.#extraPrice = price;
    }
}