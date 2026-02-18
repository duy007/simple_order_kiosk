import { strict as assert } from 'node:assert';
export const requiredParameters = (parameters) => {
    for (const pName in parameters) {
        console.log(pName);
        assert.notDeepStrictEqual(parameters[pName], undefined, `${pName} should not be undefined`);
    }
};

export const isExpectedClass = (obj, expected_Class) => {
    assert.deepStrictEqual(obj instanceof expected_Class, true, `Object ${obj} is not an instance of Class ${expected_Class}`);
};

export const TYPES = Object.freeze({
    INTEGER: "integer",
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
            isExpectedTypeHelper(value, "number");
            assert.deepStrictEqual(Number.isInteger(value), true, `Mistmatched types. The type of ${value} is not type ${TYPES.INTEGER} from expected type ${expected_type}`)
            break;
        case TYPES.TEXT:
            isExpectedTypeHelper(value, "string")
            break;
        case TYPES.DATE:
            isExpectedClass(value, Date);
            break;
        case TYPES.BOOLEAN:
            isExpectedTypeHelper(value, "boolean");
            break;
    }

}


//TODO: Rework this function to help with price formatting.
export const checkTypeParameters = (parameters, expected_types) => {
}
