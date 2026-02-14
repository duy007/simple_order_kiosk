import express from 'express';
import { cartRouter } from './routes/cart.js';
import { checkoutRouter } from './routes/checkout.js';
import { menuRouter } from './routes/menu.js';
import { orderRouter } from './routes/order.js';
import { homeRouter } from './routes/home.js';

export const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use("/cart", cartRouter);
app.use("/checkout", checkoutRouter);
app.use("/menu", menuRouter);
app.use("/order", orderRouter);
app.use("/", homeRouter);