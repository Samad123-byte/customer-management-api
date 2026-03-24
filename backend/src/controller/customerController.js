import customer from "../model/customerModel.js";

export async function getAllCustomers (req,res) {

try {

const customers = await customer.find().sort({createdAt: -1});

if(customers.length == 0) return res.status(404).json({message: "No customer found"})

res.status(200).json(customers)
    
} catch (error) {
console.log("error in get all customer controller", error.message)
res.status(500).json({message: "Internal server error"})
}
    
}


export async function getByIdCustomer(req,res) {

try {

const idCustomer = await customer.findById(req.params.id)

if(!idCustomer) return res.status(404).json({message: "invalid customer ID"})

res.status(200).json(idCustomer)

} catch (error) {
console.log("Error in the get by id customer controller", error.message)
res.status(500).json({message: "Internal server error"})
}

}


export async function addCustomer(req,res) {

const {customerName, email, phone} = req.body;

try {

const customers = new customer({customerName, email, phone})

const newCustomer = await customers.save()

res.status(200).json(newCustomer)

} catch (error) {
console.log("Error in add customer controller", error.message)
res.status(500).json({message: "Internal server error"})
}
    
}


export async function updateCustomers(req,res) {

const {customerName, email, phone} = req.body

try {
    
const updateCustomer = await customer.findByIdAndUpdate(req.params.id, {customerName, email, phone}, {new: true}) 

if(!updateCustomer) return res.status(404).json("No customer found")

res.status(200).json(updateCustomer)

} catch (error) {
conole.log("Error in the update customer controller", error.message)
res.status(500).json({message: "Internal server error"})
}

}


export async function deleteCustomer(req,res) {
try {
const deletedCustomers = await customer.findByIdAndDelete(req.params.id)

if(!deletedCustomers) return res.status(404).json("No customer found")

res.status(200).json({message: "Customer deleted"})

} catch (error) {
console.log("Error in the delete customer controller", error.message)
res.status(500).json({message: "Internal server error"})
}
}