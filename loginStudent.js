const materias = [
    {
      nombre: "Paradigmas y Lenguajes de programacion 1",
      profesor: "Null",
      horario: "Lunes 12:30 a 15:40 y Jueves 14:40 a 17:50",
      aula: "A definir",
    },
    {
      nombre: "Analisis Matematico 2",
      profesor: "Null",
      horario: "Martes 12:30 a 14:30 y Jueves 12:30 a 15:40",
      aula: "A definir",
    },
    {
      nombre: "Fisica 1",
      profesor: "Null",
      horario: "Martes 15:50 a 17:50 y Miércoles 14:40 a 17:50",
      aula: "A definir",
    },
    {
        nombre: "Ingenieria de software 1",
        profesor: "Null",
        horario: "Lunes 15:50 a 19:00 y Sabados 07:30 a 10:40",
        aula: "A definir",
      },
  ];

const contenedorTabla = document.querySelector(".muestraInfo");
const botonMostrarCronograma = document.getElementById("mostrar-tabla");

botonMostrarCronograma.addEventListener("click",()=>{
    var tablaHTML = "<table>";
    tablaHTML += `<tr><th>Materia</th><th>Profesor</th><th>Horario</th><th>Aula</th></tr>`;

    for(const materia of materias){
        tablaHTML += `<tr>
        <td>${materia.nombre}</td>
        <td>${materia.profesor}</td>
        <td>${materia.horario}</td>
        <td>${materia.aula}</td>
        `
    }
    tablaHTML += `</table`;
    contenedorTabla.innerHTML = tablaHTML;
    //creacion de boton para ocultar o mejor dicho eliminar la tabla
    var btnDelete = document.createElement("button");
    btnDelete.textContent="Ocultar Tabla";
    btnDelete.id = "btnDelete";
    contenedorTabla.appendChild(btnDelete);
    btnDelete.addEventListener("click",()=>{
        contenedorTabla.innerHTML = "" 
    })
})

