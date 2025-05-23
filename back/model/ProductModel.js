import mongoose from "mongoose";


const vegeSchema = mongoose.Schema({
    title: String,
    price: Number,
    image: String
})

const VegeModel = mongoose.model('Vegetables', vegeSchema)

export default VegeModel