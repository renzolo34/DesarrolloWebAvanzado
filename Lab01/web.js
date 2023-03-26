var http = require('http');
fs = require('fs');

http.createServer(function(solicitud,respuesta){

    const { url } = solicitud;
    if (url === '/') {
        template='index.html'
        
      }
    else if(url === '/nosotros') {
        template='nosotros.html'
      }
    else if(url === '/servicios') {
        template='servicios.html'
      }
    else if(url === '/clientes') {
        template='clientes.html'
      }
    else if(url === '/contacto') {
        template='contacto.html'
      }

    fs.readFile('templates/'+template,function(error,html) {
    respuesta.write(html);
    respuesta.end();    
    });
    }).listen(8081);

