import express from 'express';

export const orderRouter = express.Router();

orderRouter.get("/", async (req, res) => {
    res.send("Show form to customize order");
})

orderRouter.post("/", async (req, res) => {
    res.send("post new order");
});

orderRouter.patch("/", async (req, res) => {
    res.send("update order");
});

orderRouter.delete("/", async (req, res) => {
    res.send("delete order");
});