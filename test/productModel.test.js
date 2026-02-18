import { expect, test, vi } from 'vitest';
import { Product } from "../models/product";

test("productID getter method should return expected ID", () => {
    const testProduct = new Product(1, "Oolong Milk Tea", 250)
    expect(testProduct.getProductId()).toBe(1);
});

test("productName getter method should return expected name", () => {
    const testProduct = new Product(1, "Oolong Milk Tea", 250)
    expect(testProduct.getProductName()).toBe("Oolong Milk Tea");
});

test("price getter method should return expected price (in pennies)", () => {
    const testProduct = new Product(1, "Oolong Milk Tea", 190)
    expect(testProduct.getProductPrice()).toBe(190);
});

test("Constructor should only accept required format", () => {
    expect(() => { new Product(1, "Oolong Milk Tea", 190) }).not.toThrowError();
    expect(() => { new Product(1.2, "Oolong Milk Tea", 190) }).toThrowError();
    expect(() => { new Product(1, undefined, 190) }).toThrowError();
    expect(() => { new Product(1, "Oolong Milk Tea", 1.90) }).toThrowError();

});