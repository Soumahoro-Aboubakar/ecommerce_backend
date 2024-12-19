import mongoose, { model } from "mongoose"
const {Schema}=mongoose


const categorySchema=new Schema({
    name:{
        type:String,
        required:true
    }
})

const CategoryModel=mongoose.model("Category",categorySchema)
export default CategoryModel;