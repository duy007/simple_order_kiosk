import { expect, test, vi } from 'vitest';
import { Customer } from "../models/customer";
import { strict as assert } from 'node:assert';


test("customerID getter method should return expected ID", () => {
    const testCustomer = new Customer(1, "John", "Smith", "", 1112223333, undefined);
    expect(testCustomer.getId()).toBe(1);
});

test("All customer names getter method should return expected name and correct format", () => {
    const testCustomer = new Customer(1, "John", "Smith", undefined, 1112223333, undefined);
    expect(testCustomer.getFirstName()).toBe("John");
    expect(testCustomer.getLastName()).toBe("Smith");
    expect(testCustomer.getMiddleInitial()).toBe("")
    expect(testCustomer.getFullName()).toBe("John Smith");
    const testCustomer2 = new Customer(2, "Jose", "Joseph", "Quan", 1112223333, undefined);
    expect(testCustomer2.getFirstName()).toBe("Jose");
    expect(testCustomer2.getLastName()).toBe("Joseph");
    expect(testCustomer2.getMiddleInitial()).toBe("Quan");
    expect(testCustomer2.getFullName()).toBe("Jose Quan Joseph");
});

test("Customer Date Join should be correct", () => {
    const date = new Date()
    const testCustomer = new Customer(1, "John", "Smith", undefined, 1112223333, date);
    expect(testCustomer.getDateJoin()).toBe(date);
    const date2 = new Date("2026-02-16 06:16:54");
    const testCustomer2 = new Customer(2, "Jose", "Joseph", "Quan", 1112223333, date2);
    expect(testCustomer2.getDateJoin()).toBe(date2);
});

test("Customer Phone Number should be correct", () => {
    const testCustomer = new Customer(1, "John", "Smith", undefined, 1112223333, undefined);
    expect(testCustomer.getPhoneNum()).toBe(1112223333);
});

test("customer class constructor should reject parameter with the wrong type", () => {
    const testCustomer = new Customer(1, "John", "Smith", undefined, 1112223333, undefined);
    expect(() => {
        new Customer("3", "John", "Smith", undefined, 1112223333, undefined);
    }).toThrowError(assert.AssertionError)
    expect(() => {
        new Customer(2, 2, "Smith", undefined, 1112223333, undefined);
    }).toThrowError(assert.AssertionError)
    expect(() => {
        new Customer(2, "John", 3, undefined, 1112223333, undefined);
    }).toThrowError(assert.AssertionError)
    expect(() => {
        new Customer(2, "John", "Smith", 3, 1112223333, undefined);
    }).toThrowError(assert.AssertionError)
    expect(() => {
        new Customer(2, "John", "Smith", undefined, 1112223333, "2026-02-16 06:16:54");
    }).toThrowError(assert.AssertionError)
});
