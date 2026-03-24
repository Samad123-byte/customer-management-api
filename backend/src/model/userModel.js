import mongoose from "mongoose";

const userSchema = mongoose.Schema({

userName: {
type: String,
required: true
},

email: {
type: String,
require: true,
unique: true
},

password: {
type: String,
required: true,
minlength: 6
}

}, {timestamps: true})

const user = mongoose.model("User", userSchema)

export default user