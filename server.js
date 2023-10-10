
//Roteamento e criação de servidor http

// utilizando a função crateServer >>

//import {createServer} from 'node:http'

//const server = createServer((request,response) => {
    //console.log("hello, world")
   // response.write("hello,  World")
   //return response.end()
//})


//server.listen(3333)

//utilizando o framework fastify

import {fastify} from "fastify"


const server =fastify()
server.get("/",   () =>{

    return "hello, User"

})


server.get("/pedro",   () =>{

     return "hello, Pedro"

})
server.get("/luca",   () =>{

    return "hello, Luca"

})
server.get("/arthur",   () =>{

    return "hello, arthur"

})
server.get("/carol",   () =>{

    return "hello, carol"

})

server.listen({
    port: 3333,
})

