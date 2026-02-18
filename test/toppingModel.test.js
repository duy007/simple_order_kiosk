import { Topping } from "../models/topping";
import { expect, test, vi } from 'vitest';


test("toppingId getter should return expected ID", () => {
    const testTopping = new Topping(undefined, "Boba", 0, 50);
    expect(testTopping.getToppingId()).toBe(-1);
    const testTopping2 = new Topping(1, "Boba", 0, 50);
    expect(testTopping2.getToppingId()).toBe(1);
});

test("toppingName getter should return expected name", () => {
    const testTopping = new Topping(undefined, "Boba", 0, 50);
    expect(testTopping.getToppingName()).toBe("Boba");
    expect(testTopping.getToppingName()).not.toBe("Egg Pudding");
    const testTopping2 = new Topping(1, "Lychee Jelly", 0, 50);
    expect(testTopping2.getToppingName()).toBe("Lychee Jelly");
    expect(testTopping2.getToppingName()).not.toBe("Egg Pudding");
});


test("topping price getter should return expected price", () => {
    const testTopping = new Topping(undefined, "Boba", 0, 50);
    expect(testTopping.getToppingPrice()).toBe(0);
    expect(testTopping.getToppingPrice()).not.toBe(1);
    const testTopping2 = new Topping(1, "Lychee Jelly", 100, 50);
    expect(testTopping2.getToppingPrice()).toBe(100);
});

test("extra topping price getter should return expected price", () => {
    const testTopping = new Topping(undefined, "Boba", 0, 50);
    expect(testTopping.getExtraToppingPrice()).toBe(50);
    expect(testTopping.getExtraToppingPrice()).not.toBe(0);
    const testTopping2 = new Topping(1, "Lychee Jelly", 100, 200);
    expect(testTopping2.getExtraToppingPrice()).toBe(200);
    expect(testTopping2.getExtraToppingPrice()).not.toBe(100);

});