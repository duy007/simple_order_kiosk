import { checkPriceFormat, checkTypeParameters, requiredParameters, TYPES } from "../utils/requiredParameterHelper";

class Product {
    #productID;
    #productName;
    #price;

    constructor(productID, productName, price) {
        requiredParameters([productID, productName, price]);
        checkTypeParameters([productID, productName, price],
            [TYPES.INTEGER, TYPES.TEXT, TYPES.NUMERIC]
        );
        this.#productID = productID;
        this.#productName = productName;
        this.#price = price;
    };

    constructor(productName, price) {
        requiredParameters([productName, price]);
        checkTypeParameters([productName, price], [TYPES.TEXT, TYPES.NUMERIC]);
        checkPriceFormat(price);
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
        requiredParameters([productName]);
        isExpectedType(productName, TYPES.TEXT);
        this.#productName = productName;
    };

    setProductPrice(price) {
        checkPriceFormat(price);
        this.#price = price;
    }
}