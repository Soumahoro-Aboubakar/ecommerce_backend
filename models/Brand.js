import mongoose, { model } from "mongoose"
const {Schema}=mongoose


const brandSchema=new Schema({
    name:{
        type:String,
        required:true
    }
})

const BrandModel = mongoose.model("Brand",brandSchema)
export default BrandModel;