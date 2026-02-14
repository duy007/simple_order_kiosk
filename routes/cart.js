import express from 'express';

export const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
    res.send("Show the cart");
})

cartRouter.patch("/", async (req, res) => {
    res.send("update cart")
})
cartRouter.delete("/", async (req, res) => {
    res.send("delete cart")
})