 //const http = require('http');
 /*
const hostname = "127.0.0.1";
const port = 3000;
*/
 const fs = require('fs');

// Lendo input :3

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual seu nome? ', (name)=>{
    console.log('Seja bem vindo '+name+' :3');

})

rl.on('close',()=>{
    console.log('xaau :3')
    process.exit(0);
} )


//Leitura simples de arquivos
/*
fs.readFile('home.txt', (err,data)=>{

    //Neste caso temos um Buffer de saída e usamos o 'toString()' para converter para string
    console.log(data.toString())

})
*/

//Excluindo arquivos
/*
fs.unlink('home.txt', (err)=>{
    console.log('arquivo excluido');
})
*/

//renomeando arquivo
/*
fs.rename('home.txt','home1.txt', (err)=>{
    console.log('arquivo renomeado')
});
*/

 //Cria um novo arquivo
 /*
 fs.writeFile('home','bem vindo a home', (err)=>{
    if(err) throw err;
    console.log('deu certo')
 });
*/


//Cria um novo arquivo ou insere um conteúdo depois do que já existe
/*
 fs.appendFile('home.txt', "outro conteudo",(err)=>{
    if(err) throw err; 
    console.log('deucerto2')

 })

//Servindo arquivos no servidor :)

 const server = http.createServer((req, res)=>{

    if(req.url == '/home'){

    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}else{
    return res.end();
}

 })

server.listen(port, hostname, () =>{
    console.log("servidor rodando")
})
*/
