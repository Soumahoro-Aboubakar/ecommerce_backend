import express from "express"
import userController from "../controllers/User.js"
const router=express.Router()

router
    .get("/:id",userController.getById)
    .patch("/:id",userController.updateById)

    export default router