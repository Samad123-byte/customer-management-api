import mongoose from "mongoose";

const customerSchema = mongoose.Schema({

customerName: {
type: String,
required: true
},

email: {
type: String,
required: true,
unique: true
},

phone: {
type: String,
required: true
}

}, {timestamps: true})

const customer = mongoose.model("Customer", customerSchema)

export default customer