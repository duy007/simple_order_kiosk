#!/bin/bash
sqlite3 ./database/orderKiosk.db "INSERT INTO CUSTOMER(first_name, last_name, phone_num) VALUES (\"Alex\", \"McFundy\", 1112223333), (\"Judge\", \"Judy\", 4445556666), (\"Bruce\", \"Wayne\", 7778889999);

INSERT INTO PRODUCT(product_name, price) VALUES (\"Oolong Milk Tea\", 5.00), (\"Taro Milk Tea\", 5.00), (\"Mango Jasmine Fruit Tea\", 4.50);

INSERT INTO topping(topping_name, price, extra_price) VALUES (\"Boba\", 0, .5), (\"Egg Pudding\", 0, .5), (\"Lychee Jelly\", 0, .5);

INSERT INTO CART(customer_id) VALUES (3);

INSERT INTO orderItem(cart_id, product_id, sugar_level, ice_level, quantity) VALUES (1, 1, .25,\"normal\", 1), (1, 2, 1, \"no ice\", 2), (1, 3, .25, \"less ice\",1);
INSERT INTO orderTopping(order_id, topping_id, extra) VALUES (1, 2, TRUE), (2, 1, FALSE), (3, 3, TRUE);

INSERT INTO Sale(cart_id, payment_method, total_price, tax_percentage, tax, tip_percentage, total_tip, total_amount, sale_completed) VALUES (1, \"credit card\", 21.5, .125, 2.69, .15, 3.23, 27.42, TRUE);"