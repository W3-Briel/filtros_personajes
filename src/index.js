const express = require('express')

let APP = express();
let PORT = process.env.PORT ?? 3000; 

let { makeFiltro } = require("./filtros/filtros")
let personajes = require("../data/personajes.json")


APP.use(express.json())

APP.post("/filtros",(req,res)=>{
    let { body } = req

    let filtros = body.map(f => makeFiltro(f["attribute"],f["operator"],f["value"]))

    let personajesFiltrados = personajes.filter(p => filtros.every(f => f(p)))
    res.status(200).json(personajesFiltrados)
})


APP.listen(PORT,(e)=>{
    if (e) {
        console.warn(e)
        process.exit(1)
    }
    return console.log(`servidor corriendo -> ${PORT}`)
})