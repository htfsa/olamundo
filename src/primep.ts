import * as express from 'express';


// Variable
const app = express ();
const port = 3000;

// Code here
app.get ('/', (request, response) => {
    response.send ('<h1>OLA MUNDO!!</h1>');
});

app.get ('/BSM', (request, response) => {
    response.send ('<h1>AS BSMS DA Generation </h1>' +
    '<h3>Mentalidades</h3>' +
    '<ol><li>PERCISTENCIA;</li>' +
    '<li>RESPONSABILIDADE PESSOAL;</li>' +
    '<li>ORIENTAÇÃO AO FUTURO;</li>' +
    '<li>MENTALIDADE DE CRESCIMENTO.</li></ol>' + 
    '<h3>HABILIDADES</h3>' +
    '<ol><li>TRABALHO EM EQUIPE;</li>' +
    '<li>ATENÇÃO AOS DETALHES</li>' +
    '<li>PROATIVIDADE</li>' +
    '<li>COMUNICAÇÃO</li>'
    );
});

app.get ('/Objetivos', (request, response) => {
    response.send ('<h1>Objetivo DA SEMANA</h1>' +
    '<p>DESEJO ME APROFUNDAR NOS MATERIAIS QUE FORAM PASSADOS E REFORÇAR MEU CONHECIMENTO</p>'
    );
});

app.listen (port, () => {
    console.log (`O SERVIDOR ESTA RODANDO NA PORTA ${port}!`)
})
