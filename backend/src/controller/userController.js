import bcrypt from "bcryptjs";
import {generateToken} from "../lib/utils.js"
import user from "../model/userModel.js";

export async function signupUsers(req,res) {

const {userName,email,password} = req.body;

try {

if(!userName || !email || !password ) {
return res.status(404).json({message: "all fields are required"})
}

if(password.length < 6) {
return res.status(404).json({message: "Password must be six characters long"})
}

const users = await user.findOne({email})

if(users) return res.status(404).json({message: "Email already used"})

const salt = await bcrypt.genSalt(10)

const hashPassword = await bcrypt.hash(password, salt)

const newUser = new user({
userName,
email, 
password: hashPassword
})

if(newUser) {
generateToken(newUser._id,res)

await newUser.save()

res.status(201).json({
_id: newUser._id,
userName: newUser.userName,
email: newUser.email
})

}
    
} catch (error) {
console.log("Error in login user controller", error.message)

res.status(500).json({ message: "internal server error" });
}
    
}


export async function loginUsers(req,res) {

const {email,password} = req.body;

try {
const users = await user.findOne({email})

if(!users) return res.status(404).json({message: "invalid credialtonal"})

const passwordCorrect = await bcrypt.compare(password, users.password)

if(!passwordCorrect) return res.status(404).json({message: "invalid credialtonal"})

generateToken(users._id,res)

res.status(200).json({
_id: users._id,
userName: users.userName,
email: users.email
})

} catch (error) {
console.log("error in the login controller users ", error.message)
res.status(500).json({ message: "internal server error" });
}

}

export async function logoutUsers(req,res) {
try {
res.cookie("jwt","",{maxAge: 0})
res.status(200).json({message: "Logout successfully "}) 
} catch (error) {
  console.log("Error in logout controller", error.message);
res.status(500).json({ message: "internal server error" });   
}
}