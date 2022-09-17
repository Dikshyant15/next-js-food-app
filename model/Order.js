const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    customer:{
        type: String,
        required:true,
        maxlength:60,
    },
    address:{
        type: String,
        required:true,
        maxlength:200,
    },
    total:{
        type: Number,
        required:true,
    },
    status:{
        type: Number,
        default:0,
    },
    method:{
        type: Number,
        required:true,
    },
   
    },{timestamps:true})
//if there is the database use the schema ortherwise create a database with the related model
    export default mongoose.models.Order || mongoose.model("Order",OrderSchema)

