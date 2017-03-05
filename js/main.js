function translate(){
  var pregunta;
  do {
    pregunta = prompt("¿Desea traducir el formulario? \n 1   Sí \n 2 \ No ")
  } while (pregunta != "1" && pregunta != "2")

  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var checkbox = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  if( pregunta == 1){
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder= "Contraseña";
    checkbox.innerHTML = "Recordar Datos";
    button.innerHTML = "Iniciar Sesión";
    alert("El formulario se ha traducido");
  }
}
translate();

function show(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
document.getElementById("mostrar").innerHTML = "<h3>Datos del formulario</h3>" +
"El correo electrónico ingresado es:<br>"+ email +"<br>"+"La clave ingresada es:<br>"+
password;
}
