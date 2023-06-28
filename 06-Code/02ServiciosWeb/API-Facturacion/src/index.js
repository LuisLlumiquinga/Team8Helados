const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();
const facturaRoutes = require("./routes/Factura.js");


//middleware
app.use(express.json())
app.use('/api',facturaRoutes);
//routes
app.get('/', (req, res)=>{
    res.send('welcome to me');
})


//
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to MongoDB"))
.catch((error) => console.error(error));

app.listen(port, ()=> console.log('server listening to', port));