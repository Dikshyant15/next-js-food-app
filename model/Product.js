const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        maxlength:60,
    },
    description:{
        type: String,
        required:true,
        maxlength:200,
    },
    image:{
        type: String,
        required:true,
    },
    prices:{
        type: [Number],
        required:true,
    },
    extraOptions:{
        type: [
                {text:{type:String,required:true},
                price:{type:Number,required:true}
                }
              ],
    },
    },{timestamps:true})
//if there is the database use the schema ortherwise create a database with the related model
    export default mongoose.models.Product || mongoose.model("Product",ProductSchema)

