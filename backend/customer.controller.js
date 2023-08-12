const path=require("path")
const db = require(path.join(__dirname+'/db.config'))
const Customer = db.customers

function createCustomer(req, res, next) {
    if (!req.body) {
        return res.status(400).send({
            message: "Bad Data"
        })
    }
    // const { Expense, desc, Category } = req.body;
    const customerObject = {
        Price: req.body.Price,
       ProductName: req.body.ProductName,
        BelongsTo:req.body.BelongsTo,
    }
    Customer.create(customerObject).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(500).send(err);
    })
}
function findAllCustomer(req, res) {
    Customer.findAll().then((data) => {
        res.status(200).send(data)
    })
}
function findCustomer(req, res) {
    Customer.findByPk(req.params.email).then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send(error);
    })
}
function updateCustomer(req, res) {

}
function deleteCustomer(req, res) {
    Customer.destroy({ where: { ProductName: req.params.id } }).then(() => {
        res.send("updated data");
    }).catch(error => {
        res.status(500).send(error);
    })
}

module.exports = { createCustomer, findAllCustomer, findCustomer, updateCustomer, deleteCustomer }