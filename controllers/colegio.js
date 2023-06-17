const { response } = require('express')

const Colegio = require('../model/colegio')


//Consulta
const getColegio = async (req, res = response) => {
    let mensaje = ''
    try {
        //Consulta en la colección
        const colegio = await Colegio.find()
        mensaje = colegio
    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje
    })

}

const postColegio = async (req, res = response) => {

    const body = req.query //Desestructuración
    let mensaje = ''
    const colegio = new Colegio(body) // Crear el objeto
    console.log(body)
    try {
        await colegio.save()
        mensaje = 'Colegio registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })

}

const putColegio = async (req, res = response) => {
    //Actualización de datos
    const body = req.query //Desestructuración
    console.log(body)

    let mensaje = ''

    try {
        await Colegio.findOneAndUpdate({ direccion: body.direccion, latitud: body.latitud, longitud: body.logintud, descripcion: body.descripcion })
        mensaje = 'Colegio modificado exitosamente'


    } catch (error) {
        mensaje = error
    }
    //console.log('---------------'+mensaje)
    res.json({
        mensaje: mensaje
    })

}

const deleteColegio = async (req, res = response) => {
    //Actualización de datos
    const body = req.query//Desestructuración
    let mensaje = ''

    try {
        await Colegio.deleteOne({ direccion: body.direccion })
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje
    })

}

module.exports = {
    getColegio,
    postColegio,
    putColegio,
    deleteColegio
}



