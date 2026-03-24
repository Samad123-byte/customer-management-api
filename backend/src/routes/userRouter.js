import express from "express"
import { loginUsers, logoutUsers, signupUsers } from "../controller/userController.js"

const router = express.Router()

router.post("/signup", signupUsers)

router.post("/login", loginUsers)

router.post("/logout", logoutUsers)



export default router