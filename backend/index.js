import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectDB from "./src/config/db.js"
import customerRouter from "./src/routes/customerRouter.js"
import userRouter from "./src/routes/userRouter.js"


dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/customers", customerRouter)
app.use("/api/users", userRouter)

const port = process.env.PORT

connectDB().then(() => {

app.listen(port, () => {
console.log(`server is running on Port:${port}`)
})

})




