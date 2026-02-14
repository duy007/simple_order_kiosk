import express from 'express';

export const homeRouter = express.Router();

homeRouter.get("/", async (req, res) => {
    res.send("show homepage")
})