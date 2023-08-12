const express=require("express")
const cors=require("cors")
const path=require("path")
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
// const staticpath=path.join(__dirname,"./public");
// app.use(express.static(staticpath))
const db=require('./db.config')
db.sequelize.sync().then(()=>{
    console.log("ok report")
  }).catch(()=>{
    console.log("error")
  })


const controller=require(path.join(__dirname+'/customer.controller'));

app.get('/', (req, res) => {
    res.send("customer added")
});
app.post('/customer',(req,res)=>{
    controller.createCustomer(req,res)
});
app.get('/customersdata',(req,res)=>{
    controller.findAllCustomer(req,res)
});
app.put('/customers/update',(req,res)=>{
    controller.updateCustomer(req,res)
});
app.delete('/customers/delete/:id',(req,res)=>{
    controller.deleteCustomer(req,res)
});


app.listen(3000);


