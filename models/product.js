import { checkTypeParameters, requiredParameters, TYPES } from "../utils/requiredParameterHelper";

export class Product {
    #productID;
    #productName;
    #price;

    constructor(productID = -1, productName, price) {
        requiredParameters([{ "productID": productID }, { "productName": productName }, { "price": price }]);
        checkTypeParameters([productID, productName, price],
            [TYPES.INTEGER, TYPES.TEXT, TYPES.INTEGER]
        );
        this.#productID = productID;
        this.#productName = productName;
        this.#price = price;
    };

    getProductId() {
        return this.#productID;
    };

    getProductName() {
        return this.#productName;
    };

    getProductPrice() {
        return this.#price
    }

    setProductName(productName) {
        requiredParameters([{ "productName": productName }]);
        isExpectedType(productName, TYPES.TEXT);
        this.#productName = productName;
    };

    setProductPrice(price) {
        requiredParameters([{ "price": price }]);
        isExpectedType(price, TYPES.INTEGER);
        this.#price = price;
    }
}