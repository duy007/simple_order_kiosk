import express from 'express';

export const checkoutRouter = express.Router();

checkoutRouter.get("/", async (req, res) => {
    res.send("show checkout form");
})

checkoutRouter.post("/", async (req, res) => {
    res.send("checkout")
})