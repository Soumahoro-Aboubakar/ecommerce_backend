import mongoose, { model } from "mongoose"
const {Schema}=mongoose

const cartSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        default:1,
    }
},{versionKey:false})

const CartModel=mongoose.model("Cart",cartSchema)
export default CartModel;