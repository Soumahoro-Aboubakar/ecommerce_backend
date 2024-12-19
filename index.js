import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/Auth.js";
import productRoutes from "./routes/Product.js";
import orderRoutes from "./routes/Order.js";
import cartRoutes from "./routes/Cart.js";
import brandRoutes from "./routes/Brand.js";
import categoryRoutes from "./routes/Category.js";
import userRoutes from "./routes/User.js";
import addressRoutes from "./routes/Address.js";
import reviewRoutes from "./routes/Review.js";
import wishlistRoutes from "./routes/Wishlist.js";
import { connectToDB } from "./database/db.js";


dotenv.config()

// server init
const server=express()

// database connection
connectToDB()
console.log("avant la requette");

// middlewares  process.env.ORIGIN
//server.use(cors({origin:"*",credentials:true,exposedHeaders:['X-Total-Count'],methods:['GET','POST','PATCH','DELETE']}))
//server.use(cors());
server.use(cors({
    origin: 'http://localhost:3000',  
    credentials: true,               
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));
server.use(express.json());
server.use(cookieParser())
server.use(morgan("tiny"))

// routeMiddleware

server.use("/auth",authRoutes);
server.use("/users",userRoutes)
server.use("/products",productRoutes)
server.use("/orders",orderRoutes)
server.use("/cart",cartRoutes)
server.use("/brands",brandRoutes)
server.use("/categories",categoryRoutes)
server.use("/address",addressRoutes)
server.use("/reviews",reviewRoutes)
server.use("/wishlist",wishlistRoutes)



server.get("/",(req,res)=>{
    res.status(200).json({message:'running'})
})

server.listen(process.env.PORT,()=>{
    console.log('server [STARTED] ~ http://localhost:'+process.env.PORT);
})