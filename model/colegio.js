
const {Schema, model} = require('mongoose') 

const ColegioSchema = Schema({
    direccion: {
        type: String,
        required: [true, 'la direccion es obligatorio']
    },

    latitud: {
        type: Number,
        required: [true, 'la latitud es obligatorio'],
        minlength: [6.14, 'Mínimo debe digitar 6,14 caracteres'],
        maxlength: [6.2, 'Máximo debe digitar 6,2 caracteres']
      
    },

    longitud: {
        type: Number,
        required: [true, 'la longitud es obligatorio'],
        minlength: [-75.43, 'Mínimo debe digitar -75,43 caracteres'],
        maxlength: [-75.50, 'Máximo debe digitar -75,5 caracteres']

    },

    descripcion: {
        type: String,
 
        required: [true, 'la descripcion es obligatorio']
    },

    fecha: {
        type: Date,
        default: Date.now(),
        required: [true, 'la fecha es obligatorio']
    },

   
})

module.exports = model('Colegio', ColegioSchema)