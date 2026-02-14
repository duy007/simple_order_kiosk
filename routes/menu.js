import express from 'express';

export const menuRouter = express.Router();

menuRouter.get("/", async (req, res) => {
    res.send("serve a menu.")
})

