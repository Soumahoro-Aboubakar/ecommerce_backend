import express from "express"
import orderController from "../controllers/Order.js"
const router=express.Router()


router
    .post("/",orderController.create)
    .get("/",orderController.getAll)
    .get("/user/:id",orderController.getByUserId)
    .patch("/:id",orderController.updateById)


    export default router