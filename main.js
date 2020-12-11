const express = require('express');

const servidor = express();
const porta = 3000;

servidor.listen(porta, () => {

    console.log(`Servidor rodando no endereço: http://localhost:${porta}/`);

});