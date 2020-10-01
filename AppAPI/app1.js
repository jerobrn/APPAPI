const obtenerLetra = require("./library");
var prompt = require('prompt');

prompt.start();

prompt.get(['banda', 'tema'], function (err, result) {
    
 
    var banda =  result.banda;

    var tema = result.tema;

    obtenerLetra(banda,tema);
  });
