import { Router } from 'express'
const router=Router()
import auth from "../controllers/Auth.js"
import { verifyToken } from '../middleware/VerifyToken.js'

router
    .post("/signup",auth.signup)
    .post('/login',auth.login)
    .post("/verify-otp",auth.verifyOtp)
    .post("/resend-otp",auth.resendOtp)
    .post("/forgot-password",auth.forgotPassword)
    .post("/reset-password",auth.resetPassword)
    .get("/check-auth",verifyToken,auth.checkAuth)
    .get('/logout',auth.logout)


export default router