import express from "express";
import cartController from "../controllers/Cart.js"

const router=express.Router()

router
    .post("/",cartController.create)
    .get("/user/:id",cartController.getByUserId)
    .patch("/:id",cartController.updateById)
    .delete("/:id",cartController.deleteById)
    .delete("/user/:id",cartController.deleteByUserId)

export default router