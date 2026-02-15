import { strict as assert } from 'node:assert';
export const requiredParameters = (parameters) => {
    parameters.map((p) => {
        assert.notDeepStrictEqual(p, undefined, `${p} should not be undefined`);
    });
};

export const isExpectedClass = (obj, expected_Class) => {
    assert.deepStrictEqual(obj instanceof expected_Class, true, `Object ${obj} is not an instance of Class ${expected_Class}`);
};

export const TYPES = Object.freeze({
    INTEGER: "integer",
    NUMERIC: "numeric",
    TEXT: "text",
    DATE: "date",
    BOOLEAN: "boolean"
});

const isExpectedTypeHelper = (value, expected_type) => {
    assert.deepStrictEqual(typeof value, expected_type,
        `Mistmatched types. The type of ${value} is not type ${expected_type}`);
}

export const isExpectedType = (value, expected_type) => {
    switch (expected_type) {
        case TYPES.INTEGER:
            isExpectedTypeHelper(p, "number");
            assert.deepStrictEqual(Number.isInteger(p), true, `Mistmatched types. The type of ${value} is not type ${TYPES.INTEGER}`)
        case TYPES.NUMERIC:
            isExpectedTypeHelper(p, "number");
            assert.deepStrictEqual(Number.isInteger(p), false, `Mistmatched types. The type of ${value} is not type ${TYPES.NUMERIC}`)
        case TYPES.TEXT:
            isExpectedTypeHelper(value, "string")
        case TYPES.DATE:
            isExpectedClass(p, Date);
        case TYPES.BOOLEAN:
            isExpectedTypeHelper(value, "boolean");
    }

}

export const checkTypeParameters = (parameters, expected_types) => {
    assert.deepStrictEqual(parameters.length, expected_types.length, "length of expected types and parameters is not equal.");
    parameters.map((p, index) => {
        isExpectedType(p, expected_types[index]);
    });
}

export const checkPriceFormat = (price) => {
    assert.match(price.toString(), /^\d*\.\d{2}$/gm, "Price is not format with 2 after 2 decimals points.");
}
