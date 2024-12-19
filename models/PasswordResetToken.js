import mongoose, { model } from "mongoose"
const {Schema}=mongoose

const passwordResetTokenSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    token:{
        type:String,
        required:true
    },
    expiresAt:{
        type:Date,
        required:true
    },
})



const PasswordResetTokenModel=mongoose.model("PasswordResetToken",passwordResetTokenSchema)
export default PasswordResetTokenModel;