console.log('Client-side code running');

const tiempoTranscurrido = Date.now();

const hoy = new Date(tiempoTranscurrido);

const hoyfinal = hoy.toLocaleDateString();

const fecha = document.getElementsByTagName('small');

fecha.innerHTML = hoyfinal ;

const btnpablo = document.getElementById('btnpablo');

btnpablo.addEventListener('click', function(e) {

  console.log('button was clicked');

  axios.post('https://api.mercadolibre.com/oauth/token', null, { params:  {
      
    grant_type: 'refresh_token',
    client_id: '931881640624867',
    client_secret: '5wj5uG5KmrXLfaOhyyGKFsGNUZQC7IeE',
    refresh_token: 'TG-60d7842f2a345900075c838f-299376209'

}})
  .then(response => {

     var token = response.data.access_token ;
     console.log(token);

     const AuthStr = 'Bearer '.concat(token);

    axios.get('https://api.mercadolibre.com/my/received_questions/search', { headers: { Authorization: AuthStr } })
    .then(response => {

        console.log(response.data);

        const preguntas = document.getElementById('preguntas');
        var questions = response.data.questions;

        var html = '';

        questions.forEach(element => {

          if(element.status ==='ANSWERED'){


            axios.get(`https://api.mercadolibre.com/items?ids=${element.item_id}` , { headers: { Authorization: AuthStr } })
            .then(response => {

              console.log(response.data[0].body);
              
              var titulo = response.data[0].body.title;

              console.log(preguntas);

              preguntas.insertAdjacentHTML('afterend', `<div class="card">
              <div class="card-body">
              <p><ins>${titulo}</ins></p>
              ${element.text}
                <input id="respuesta" type="text" id="" name="" value="">
                <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
                <input id="token" type="hidden" id="" name="" value="${token}">
                <button onclick="contestar()" class=" btn btn-primary">Responder</button>
              </div>
            </div>`);

            });


          }

        });


    })
    .catch((error) => {
     console.log('error ' + error);
    });


  }
    )
  .catch(err => console.warn(err));



});

///////////////////////////////////////////////////////////////

const btnjulian = document.getElementById('btnjulian');

btnjulian.addEventListener('click', function(e) {

  console.log('button was clicked');

  axios.post('https://api.mercadolibre.com/oauth/token', null, { params:  {
      
    grant_type: 'refresh_token',
    client_id: '3416956591795585',
    client_secret: 'j6wuzSfUb2OnUNyP2fwrdRj54A5BfmFf',
    refresh_token: 'TG-60d789d3f0a42e00077541e9-500173019'

}})
  .then(response => {

     var token = response.data.access_token ;
     console.log(token);

     const AuthStr = 'Bearer '.concat(token); 
    axios.get('https://api.mercadolibre.com/my/received_questions/search', { headers: { Authorization: AuthStr } })
    .then(response => {

        const preguntas = document.getElementById('preguntas');
        var questions = response.data.questions;

        var html = '';

        questions.forEach(element => {

          if(element.status ==='ANSWERED'){

            

            axios.get(`https://api.mercadolibre.com/items?ids=${element.item_id}` , { headers: { Authorization: AuthStr } })
            .then(response => {

              console.log(response.data[0].body);
              
              var titulo = response.data[0].body.title;

              console.log(preguntas);

              preguntas.insertAdjacentHTML('afterend', `<div class="card">
              <div class="card-body">
              <p><ins>${titulo}</ins></p>
              ${element.text}
                <input id="respuesta" type="text" id="" name="" value="">
                <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
                <input id="token" type="hidden" id="" name="" value="${token}">
                <button onclick="contestar()" class=" btn btn-primary">Responder</button>
              </div>
            </div>`);


            });

            html += `<div class="card">
            <div class="card-body">
            <p><ins>${localStorage.getItem('title')}</ins></p>
            ${element.text}
              <input id="respuesta" type="text" id="" name="" value="">
              <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
              <input id="token" type="hidden" id="" name="" value="${token}">
              <button onclick="contestar()" class=" btn btn-primary">Responder</button>
            </div>
          </div>`;

          }

        });

      

        //preguntas.innerHTML = html;
    })
    .catch((error) => {
     console.log('error ' + error);
    });


  }
    )
  .catch(err => console.warn(err));



});

/////////////////////////////////////////////////////////////////////////////


const btnangel = document.getElementById('btnangel');

btnangel.addEventListener('click', function(e) {

  console.log('button was clicked');

  axios.post('https://api.mercadolibre.com/oauth/token', null, { params:  {
      
    grant_type: 'refresh_token',
    client_id: '4753599907704949',
    client_secret: 'u4QnSat0Mgg3G3HXgLVva5RdHXW9stwZ',
    refresh_token: 'TG-60d78c7c1da247000784820b-173625744'

}})
  .then(response => {

     var token = response.data.access_token ;
     console.log(token);

     const AuthStr = 'Bearer '.concat(token); 
    axios.get('https://api.mercadolibre.com/my/received_questions/search', { headers: { Authorization: AuthStr } })
    .then(response => {

        const preguntas = document.getElementById('preguntas');
        var questions = response.data.questions;

        var html = '';

        questions.forEach(element => {

          if(element.status ==='ANSWERED'){

            axios.get(`https://api.mercadolibre.com/items?ids=${element.item_id}` , { headers: { Authorization: AuthStr } })
            .then(response => {

              console.log(response.data[0].body);
              
              var titulo = response.data[0].body.title;

              console.log(preguntas);

              preguntas.insertAdjacentHTML('afterend', `<div class="card">
              <div class="card-body">
              <p><ins>${titulo}</ins></p>
              ${element.text}
                <input id="respuesta" type="text" id="" name="" value="">
                <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
                <input id="token" type="hidden" id="" name="" value="${token}">
                <button onclick="contestar()" class=" btn btn-primary">Responder</button>
              </div>
            </div>`);


            });

            html += `<div class="card">
            <div class="card-body">
            <p><ins>${localStorage.getItem('title')}</ins></p>
            ${element.text}
              <input id="respuesta" type="text" id="" name="" value="">
              <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
              <input id="token" type="hidden" id="" name="" value="${token}">
              <button onclick="contestar()" class=" btn btn-primary">Responder</button>
            </div>
          </div>`;

          }

        });

        //preguntas.innerHTML = html;
    })
    .catch((error) => {
     console.log('error ' + error);
    });


  }
    )
  .catch(err => console.warn(err));



});

///////////////////////////////////////////////////////////////////////////////////////////


const btnrocio = document.getElementById('btnrocio');

btnrocio.addEventListener('click', function(e) {

  console.log('button was clicked');

  axios.post('https://api.mercadolibre.com/oauth/token', null, { params:  {
      
    grant_type: 'refresh_token',
    client_id: '7951694602943578',
    client_secret: 'kjAD6HJ6D0ufbVysw2WMYbrgSYYJlBNI',
    refresh_token: 'TG-60d7923122d8c70007949619-216979827'

}})
  .then(response => {

     var token = response.data.access_token ;
     console.log(token);

     const AuthStr = 'Bearer '.concat(token); 
    axios.get('https://api.mercadolibre.com/my/received_questions/search', { headers: { Authorization: AuthStr } })
    .then(response => {

        const preguntas = document.getElementById('preguntas');
        var questions = response.data.questions;

        var html = '';

        questions.forEach(element => {

          if(element.status ==='ANSWERED'){

            axios.get(`https://api.mercadolibre.com/items?ids=${element.item_id}` , { headers: { Authorization: AuthStr } })
            .then(response => {

              console.log(response.data[0].body);
              
              var titulo = response.data[0].body.title;

              console.log(preguntas);

              preguntas.insertAdjacentHTML('afterend', `<div class="card">
              <div class="card-body">
              <p><ins>${titulo}</ins></p>
              ${element.text}
                <input id="respuesta" type="text" id="" name="" value="">
                <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
                <input id="token" type="hidden" id="" name="" value="${token}">
                <button onclick="contestar()" class=" btn btn-primary">Responder</button>
              </div>
            </div>`);


            });

            html += `<div class="card">
            <div class="card-body">
            <p><ins>${localStorage.getItem('title')}</ins></p>
            ${element.text}
              <input id="respuesta" type="text" id="" name="" value="">
              <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
              <input id="token" type="hidden" id="" name="" value="${token}">
              <button onclick="contestar()" class=" btn btn-primary">Responder</button>
            </div>
          </div>`;

          }

        });

        //preguntas.innerHTML = html;
    })
    .catch((error) => {
     console.log('error ' + error);
    });


  }
    )
  .catch(err => console.warn(err));



});

/////////////////////////////////////////////////////////////////////////////////

const btnfranco = document.getElementById('btnfranco');

btnfranco.addEventListener('click', function(e) {

  console.log('button was clicked');

  axios.post('https://api.mercadolibre.com/oauth/token', null, { params:  {
      
    grant_type: 'refresh_token',
    client_id: '6930527646058308',
    client_secret: 'pvajHCn4c05KLQxb53nxvQnX9fmnQSkr',
    refresh_token: 'TG-60d7976d2bf41e0008ad11d0-163169018'

}})
  .then(response => {

     var token = response.data.access_token ;
     console.log(token);

     const AuthStr = 'Bearer '.concat(token); 
    axios.get('https://api.mercadolibre.com/my/received_questions/search', { headers: { Authorization: AuthStr } })
    .then(response => {

        const preguntas = document.getElementById('preguntas');
        var questions = response.data.questions;

        var html = '';

        questions.forEach(element => {

          if(element.status ==='ANSWERED'){

            axios.get(`https://api.mercadolibre.com/items?ids=${element.item_id}` , { headers: { Authorization: AuthStr } })
            .then(response => {

              console.log(response.data[0].body);
              
              var titulo = response.data[0].body.title;

              console.log(preguntas);

              preguntas.insertAdjacentHTML('afterend', `<div class="card">
              <div class="card-body">
              <p><ins>${titulo}</ins></p>
              ${element.text}
                <input id="respuesta" type="text" id="" name="" value="">
                <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
                <input id="token" type="hidden" id="" name="" value="${token}">
                <button onclick="contestar()" class=" btn btn-primary">Responder</button>
              </div>
            </div>`);


            });

            html += `<div class="card">
            <div class="card-body">
            <p><ins>${localStorage.getItem('title')}</ins></p>
            ${element.text}
              <input id="respuesta" type="text" id="" name="" value="">
              <input id="idPregunta" type="hidden" id="" name="" value="${element.id}">
              <input id="token" type="hidden" id="" name="" value="${token}">
              <button onclick="contestar()" class=" btn btn-primary">Responder</button>
            </div>
          </div>`;

          }

        });

        //preguntas.innerHTML = html;
    })
    .catch((error) => {
     console.log('error ' + error);
    });


  }
    )
  .catch(err => console.warn(err));



});



///////////////////////////////////////////////////////////////funcion contestar 

function contestar() {

  const respuesta = document.getElementById('respuesta').value;
  const id = document.getElementById('idPregunta').value;
  const token = document.getElementById('token').value;

  let datos = {
    token: token,
    question_id: id,
    text: 'hola'
  };
  
  fetch('/clicked', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(datos)
  })
    .then(function(response) {
      if(response.ok) {
        console.log('se contesto la pregunta');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
    
}

