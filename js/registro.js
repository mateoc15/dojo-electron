//Módulo para comunicar la vista con el controlador
const ipcRenderer = require('electron').ipcRenderer;

function registrar(event) {
    console.log('Va a registrar');
    event.preventDefault() // evita que se haga el submit del form

    // Captura datos del html
    let email = document.getElementById("email").value;
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let passConf = document.getElementById("passConf").value;

    // Envia al controlador los datos y un canal
    ipcRenderer.send('registro-submission', email, user, pass, passConf);
}

// En caso de error se muestra el mensaje
ipcRenderer.on('error-message', function(event, message) {

    const responseParagraph = document.getElementById('response');

    responseParagraph.innerHTML = message
});

ipcRenderer.on('registro-exitoso', (event, vista) => {
    window.location.replace(vista);
})