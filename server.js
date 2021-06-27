const express = require('express');
const app = express();
const axios = require('axios');
var bodyParser = require("body-parser");
var meli = require('mercadolibre');
const puppeteer = require("puppeteer");

app.use(bodyParser.json());

app.use(express.static('public'));


// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/chat.html');
});

app.get('/agregar', (req, res) => {
  res.sendFile(__dirname + '/public/agregarUsuario.html');
});

app.get('/code', (req, res) => {

  var meliObject = new meli.Meli('6063193772353864', 'jyQdEuCjJrrqxD03HcVEZxm3N3rMD0Zr');

  var respuesta = meliObject.getAuthURL('https://www.google.com.ar/');

  console.log(respuesta);

 
  (async () => {
  // Lanzamos un nuevo navegador.
    const browser = await puppeteer.launch({
      headless: false, // Especificamos que el navegador no es headless
      slowMo: 1000 // Añadimos un delay de 1 segundo entre cada comando.
    });
  // Abrimos una nueva página.
    const page = await browser.newPage();
 
  // Vamos a la URL.
    await page.goto(respuesta);
 
  // Cerramos la página y el navegador.
  //await page.close();
  //await browser.close();
  })();
    

});

app.post('/clicked', (req, res) => {

  var token = req.body.token ;
  var id = req.body.question_id;
  var respuesta = req.body.text;

  const config = {
    headers: { Authorization: `Bearer ${token}`}
  };

  const bodyParameters = {

    question_id: id,
    text : respuesta

  };

  axios.post( 
    'https://api.mercadolibre.com/answers/',
    bodyParameters,
    config
  )
  .then((response) => {
    console.log(response);
    res.sendStatus(201);
    
  }, (error) => {
    console.log(error);
  });


});

app.post('/datos', (req, res) => {

  var id = req.body.id ;
  var secret = req.body.secret;
  var redirect = req.body.redirect;
  var code = req.body.code;

  const bodyParameters = {

    grant_type: 'authorization_code',
    client_id : id,
    client_secret: secret,
    code: code,
    redirect_uri: redirect

  };

  axios.post( 
    'https://api.mercadolibre.com/oauth/token',
    bodyParameters
  )
  .then((response) => {
    token = response.data;
    res.send('hola');
    
  }, (error) => {
    console.log(error);
  });


});



app.listen(8080, () => {
    console.log('listening on 8080');
  });