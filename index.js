//            <label for="email-input">Email:</label>
//<input type="email" id="email" placeholder="Introduce tu correo electrónico" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}">
let usuarios = [
    {
      dni: "",
      contrasena: ""
    }
    
  ];
  
//Login Usuarios
const loginUsuarios = document.querySelector(".enviarLogin");
loginUsuarios.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  const dni = document.getElementById("DNI");
  const contrasena = document.getElementById("contrasena");

  if (!dni.value || !contrasena.value) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const contenedor = document.getElementById("muestraInfo");
  const parrafoElemento = document.createElement("p");
  parrafoElemento.textContent = "Iniciando sesión...";

  setTimeout(() => {
    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.dni === dni.value && usuario.contrasena === contrasena.value
      );
    
      if (!usuarioEncontrado) {
        parrafoElemento.textContent = "Inicio de sesión fallido. Verifique sus credenciales.";
        setTimeout(() => {
            contenedor.removeChild(parrafoElemento)
          }, 1500);
      } else {
        parrafoElemento.textContent = "Inicio de sesión exitoso!";
        window.location.href = "loginStudent.html";

     
    }
    contenedor.appendChild(parrafoElemento);

  }, 500);
});

//registro de usuarios
const btnRegistro = document.querySelector(".enviarRegistro");
btnRegistro.addEventListener("click",(e)=>{
    e.preventDefault();
    const dni = document.getElementById("dniRegister").value;
    const contrasena = document.getElementById("contrasenaRegister").value;
    const dobleContrasena = document.getElementById("dobleContrasenaRegister").value;

    if (contrasena==dobleContrasena) {
        agregarUsuario(dni,contrasena)
    }else{
        alert("Las contraseñas no coinciden")
    }

    function agregarUsuario(dni,contrasena) {
        const nuevoUsuario = {
            dni,
            contrasena,
        };
        usuarios.push(nuevoUsuario)
    }

    const contenedor = document.getElementById("muestraInfo");
    const parrafoElemento = document.createElement("p");
    parrafoElemento.textContent = "Registro Exitoso";

    contenedor.appendChild(parrafoElemento)
})






