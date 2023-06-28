const mongoose = require("mongoose");

const facturaSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("Factura", facturaSchema);