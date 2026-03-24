import jwt from "jsonwebtoken"
import user from "../model/userModel.js"

export const protectedRoute = async (req,res,next) => {

try {

const token = req.cookies.jwt;

if(!token) return res.status(404).json({message: "you are not authorized"})

const decoded = jwt.verify(token, process.env.JWT)

if(!decoded) return res.status(404).json({message: "Invalid token"})

const users = await user.findById(decoded.userId).select("-password")

req.users = users

next()

} catch (error) {
console.log("error in the protectRoute middle", error.message)       
}
    
}