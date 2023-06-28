const express = require("express");

const router = express.Router();
const facturaSchema = require("../model/Factura");

//crear factura
router.post("/factura", (req, res)=>{
    const fac = facturaSchema(req.body);
    fac
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});
//obtener todos los usuarios
router.get("/factura", (req, res)=>{
    facturaSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});
//Por ID buscar
router.get("/factura/:id", (req, res)=>{
    const {id} = req.params;
    facturaSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//Por Update
router.put("/factura/:id", (req, res)=>{
    const {id} = req.params;
    const {name,direccion,email,telefono,precio} = req.body;
    facturaSchema
    .updateOne({_id:id},{$set: {name,direccion,email,telefono,precio}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

// delete
router.delete("/factura/:id", (req, res) => {
    const {id} = req.params;
    facturaSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  });

module.exports = router;