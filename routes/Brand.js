import { Router } from "express"
import {getAll}from "../controllers/Brand.js"
const router=Router()

router
    .get("/",getAll)

export default router