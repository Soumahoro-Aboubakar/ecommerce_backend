import expres from "express";
import productController  from "../controllers/Product.js"
const router=expres.Router()

router
    .post("/",productController.create)
    .get("/",productController.getAll)
    .get("/:id",productController.getById)
    .patch("/:id",productController.updateById)
    .patch("/undelete/:id",productController.undeleteById)
    .delete("/:id",productController.deleteById)

    export default router