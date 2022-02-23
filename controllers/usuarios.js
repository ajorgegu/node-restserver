const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(400).json({
        msg: 'put API - controlador',
        id
    })
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        body: body
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut,
    usuariosPatch
}