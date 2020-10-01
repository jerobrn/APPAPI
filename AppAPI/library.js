

var request = require('request');




function obtenerLetra(banda,tema){

    
    var url= "https://api.lyrics.ovh/v1/"+banda+"/"+tema;
    
    request(url, function (error, response, body) {

        var letra = JSON.parse(body);
      
      console.log('banda:', banda);
      console.log('Tema:', tema);
      console.log('Letra:', letra);
    });

}
module.exports = obtenerLetra;