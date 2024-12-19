
import {getAll} from "../controllers/Category.js"
import { Router } from 'express'

const router=Router()

router
    .get("/",getAll)

    
export default router