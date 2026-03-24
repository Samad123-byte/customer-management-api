import express from "express"
import { addCustomer, deleteCustomer, getAllCustomers, getByIdCustomer, updateCustomers } from "../controller/customerController.js"
import { protectedRoute } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/",protectedRoute, getAllCustomers)

router.get("/:id", protectedRoute, getByIdCustomer)

router.post("/add", protectedRoute, addCustomer)

router.post("/:id", protectedRoute, updateCustomers)

router.delete("/:id", protectedRoute, deleteCustomer)

export default router