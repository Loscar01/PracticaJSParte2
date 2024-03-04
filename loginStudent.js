const contenedorTabla = document.querySelector(".muestraInfo");
const botonMostrarCronograma = document.getElementById("mostrar-tabla");
const contenedorInscripcion = document.querySelector(".muestraMateriasInscripcion");
const btnInscripcionMaterias = document.getElementById("inscripcionMaterias");
const divMateriasSeleccionadas = document.querySelector(".botonInscripcionMaterias");

const materias = [
    {
        nombre: "Paradigmas y Lenguajes de programacion 1",
        profesor: "",
        horario: "Lunes 12:30 a 15:40 y Jueves 14:40 a 17:50",
        aula: "A definir",
    },
    {
        nombre: "Analisis Matematico 2",
        profesor: "",
        horario: "Martes 12:30 a 14:30 y Jueves 12:30 a 15:40",
        aula: "A definir",
    },
    {
        nombre: "Fisica 1",
        profesor: "",
        horario: "Martes 15:50 a 17:50 y Miércoles 14:40 a 17:50",
        aula: "A definir",
    },
    {
        nombre: "Ingenieria de software 1",
        profesor: "",
        horario: "Lunes 15:50 a 19:00 y Sabados 07:30 a 10:40",
        aula: "A definir",
    },
];

let tablaHTML = "<table>";

botonMostrarCronograma.addEventListener("click", () => {
    tablaHTML = "<table>"
    tablaHTML += `<tr><th>Materia</th><th>Profesor</th><th>Horario</th><th>Aula</th></tr>`;

    for (const materia of materias) {
        tablaHTML += `<tr>
            <td>${materia.nombre}</td>
            <td>${materia.profesor}</td>
            <td>${materia.horario}</td>
            <td>${materia.aula}</td>
        </tr>`;
    }
    tablaHTML += `</table>`;
    contenedorTabla.innerHTML = tablaHTML;
    
    // Creación de botón para ocultar la tabla
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Ocultar Tabla";
    btnDelete.id = "btnDelete";
    contenedorTabla.appendChild(btnDelete);

    btnDelete.addEventListener("click", () => {
        contenedorTabla.innerHTML = "";
        btnDelete.remove(); // Reiniciar la variable de tablaHTML
    });
});

btnInscripcionMaterias.addEventListener("click", () => {
    contenedorTabla.innerHTML = ""; // Borrar contenido de la tabla
    tablaHTML = "<table>"; // Reiniciar la variable de tablaHTML
    tablaHTML += `<tr><th>Materia</th><th>Profesor</th><th>Horario</th><th>Aula</th></tr>`;

    for (const materia of materias) {
        tablaHTML += `
            <tr>
                <td>
                    <button class="materia-boton">${materia.nombre}</button>
                </td>
                <td>${materia.profesor}</td>
                <td>${materia.horario}</td>
                <td>${materia.aula}</td>
            </tr>`;
    }
    
    tablaHTML += `</table>`;
    contenedorInscripcion.innerHTML = tablaHTML;

    const materia_boton = document.querySelectorAll(".materia-boton");

    for (const boton of materia_boton) {
        boton.addEventListener("click", () => {
            const materiaSeleccionada = boton.textContent;
            const elementosMaterias = document.createElement("li");
            elementosMaterias.textContent = materiaSeleccionada;

            // Crear y agregar el botón "Eliminar Selección"
            let btnEliminar = document.createElement("button");
            btnEliminar.classList.add("boton-eliminar");
            btnEliminar.textContent = "Eliminar Selección";
            elementosMaterias.appendChild(btnEliminar);

            divMateriasSeleccionadas.appendChild(elementosMaterias);

            btnEliminar.addEventListener("click", () => {
                divMateriasSeleccionadas.removeChild(elementosMaterias);
            });
        });
    }

    // Crear botón "Aceptar Inscripción"
    const btnAceptarInscripcion = document.createElement("button");
    btnAceptarInscripcion.textContent = "Aceptar Inscripcion";
    divMateriasSeleccionadas.appendChild(btnAceptarInscripcion);

    btnAceptarInscripcion.addEventListener("click",(e)=>{
        setTimeout(() => {
            alert("Inscripcion completada");
            e.target.disabled = true;

            const divMateriasInscriptas = document.querySelector(".materiasInscriptas");
            const labelElemento = document.createElement("label");
            labelElemento.textContent = "Materias Inscriptas: " + materiasSeleccionadas.toString();
    
            divMateriasInscriptas.appendChild(labelElemento);
            
        }, 1000);
        
    });

    let materiasSeleccionadas = [];
    
    for (const boton of materia_boton) {
        boton.addEventListener("click", () => {
            const materiaSeleccionada = boton.textContent;
    
            materiasSeleccionadas.push(materiaSeleccionada);
           
            console.log("Materias seleccionadas:", materiasSeleccionadas);
        });
    }
    
    // Agrega y muestra las materias inscriptas en el documento
    
})