import pkg from 'jsonwebtoken';
import dotenv  from "dotenv";
dotenv.config();
const { sign } = pkg;
export function generateToken(payload, passwordReset = false) {
    return sign(payload, process.env.SECRET_KEY, {
        expiresIn: passwordReset ? process.env.PASSWORD_RESET_TOKEN_EXPIRATION : process.env.LOGIN_TOKEN_EXPIRATION
    });
}