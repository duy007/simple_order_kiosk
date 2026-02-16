import { Cart } from "../models/cart";
import { strict as assert } from 'node:assert';
import { expect, test, vi } from 'vitest';

test(`cartId getter method should return expected values`, () => {
    const testCart = new Cart(1, 3, new Date("2026-02-16 06:16:54"));
    expect(testCart.getId()).toBe(1);
});

test("customerId getter method should return expected values", () => {
    const testCart = new Cart(1, 3, new Date("2026-02-16 06:16:54"));
    expect(testCart.getCustomer()).toBe(3);
});

test("dateCreated getter method should return expected values", () => {
    const testCart = new Cart(1, 3, new Date("2026-02-16 06:16:54"));
    expect(testCart.getDate()).toStrictEqual(new Date("2026-02-16 06:16:54"));
});

test("should return correct ISO8601 date format", () => {
    const testCart = new Cart(1, 3, new Date("2026-02-16 06:00:54"));
    expect(testCart.toISO8601DateString()).toBe("2026-02-16 06:00:54");
});

test("constructor should only reject undefined customerID parameter", () => {
    expect(() => { new Cart(undefined, 3, new Date("2026-02-16 06:16:54")) }).not.toThrowError(assert.AssertionError);
    expect(() => { new Cart(1, undefined, new Date("2026-02-16 06:16:54")) }).toThrowError(assert.AssertionError);
    expect(() => { new Cart(1, 3, undefined) }).not.toThrowError(assert.AssertionError);
});

test("constructor should reject passing handler with the wrong expected type", () => {
    expect(() => { new Cart(1.2, 3, new Date("2026-02-16 06:16:54")) }).toThrowError(assert.AssertionError);
    expect(() => { new Cart(1, 3.657890, new Date("2026-02-16 06:16:54")) }).toThrowError(assert.AssertionError);
    expect(() => { new Cart(1, 3.657890, new String("2026-02-16 06:16:54")) }).toThrowError(assert.AssertionError);
    expect(() => { new Cart(1, "3", new String("2026-02-16 06:16:54")) }).toThrowError(assert.AssertionError);
});

test("constructor should default to -1 if cartId is not present", () => {
    const testCart = new Cart(undefined,3, new Date("2026-02-16 06:16:54"));
    expect(testCart.getId()).toBe(-1);
})
