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

    const body = req.body //Desestructuración
    let mensaje = ''
    const colegio = new Colegio(body) // Crear el objeto
    console.log(body)
    try {
        await colegio.save()
        mensaje = 'Colegio registrado correctamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })

}

const putColegio = async (req, res = response) => {
    //Actualización de datos
    const body = req.body //Desestructuración
    console.log(body)

    try {
        // if(body.tipoModificacion == 'Unitaria'){
//            await Colegio.findOneAndUpdate({nombre:body.nombre}, {rol:body.rol, estado:body.estado})
            await Colegio.findOneAndUpdate({_id:body._id}, {direccion:body.direccion, latitud:body.latitud, longitud:body.longitud,descripcion:body.descripcion})
            mensaje = 'Colegio modificado exitosamente. Modificación: Sencilla'
        // }
        // else{
        //     await Colegio.updateMany({password:body.password}, {rol:body.rol, estado:body.estado})
        //     mensaje = 'Colegio modificado exitosamente. Modificación: Múltiple'
        // }


    }catch (error) {
        mensaje = error
    }
    
    res.json({
        mensaje: mensaje
    })

}

const deleteColegio = async (req, res = response) => {
    //Actualización de datos
    const body = req.body//Desestructuración
    let mensaje = ''

    try {
        await Colegio.deleteOne({_id: body._id })
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



