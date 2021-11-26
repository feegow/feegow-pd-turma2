const http = require('http')

const server = http.createServer((request, response)=>{
    console.log(request.url)
    switch(request.url)
    {
        case '/':
            response.writeHead(200);
            response.write("Hello world")
            break;
        default:
            response.writeHead(404);
    }

    response.end()
})

const server2 = http.createServer((req, res) =>{
    res.writeHead(200);
    res.write("Server 2")
    res.end()
})

server.listen(3000, () =>{
    console.log("Servidor na porta 3000")
})

server2.listen(3002,() =>{
    console.log('Servidor na porta 3002')
})

