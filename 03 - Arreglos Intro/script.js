var alumnos = [
    {
        nombre: "Carlos Manuel",
        apellidoPat: "Rodriguez",
        apellidoMat: "Loyola",
        matricula: "2038203"
    },
    {
        nombre: "Cesar Oziel",
        apellidoPat: "Guajardo",
        apellidoMat: "Rodriguez",
        matricula: "2053865"
    },
    {
        nombre: "Regina Dariela",
        apellidoPat: "Sosa",
        apellidoMat: "Huerta",
        matricula: "2018392"
    },
    {
        nombre: "Diego Leonardo",
        apellidoPat: "Sanchez",
        apellidoMat: "Rodriguez",
        matricula: "3192831"
    },
    {
        nombre: "Andrea Carolina",
        apellidoPat: "Gutierrez",
        apellidoMat: "Marino",
        matricula: "2382132"
    },
    {
        nombre: "Mayela Mayte",
        apellidoPat: "Lopez",
        apellidoMat: "Cerino",
        matricula: "2039210"
    }
];


document.getElementById('filtroAlumno').addEventListener('input', function() {
    var filtrar = this.value.toLowerCase();
    var lista = document.getElementById('listaAlumnos');
    var alumnos_filtrados = alumnos.filter(function(alumno) {
        return (
            alumno.nombre.toLowerCase().includes(filtrar) ||
            alumno.apellidoPat.toLowerCase().includes(filtrar) ||
            alumno.apellidoMat.toLowerCase().includes(filtrar) ||
            alumno.matricula.includes(filtrar)
        );
    });
    lista.innerHTML = ''; 
    if (alumnos_filtrados.length > 0) {
        alumnos_filtrados.forEach(function(alumno) {
            var li = document.createElement('li');
            li.textContent = `${alumno.nombre} ${alumno.apellidoPat} ${alumno.apellidoMat} - Matricula: ${alumno.matricula}`;
            lista.appendChild(li);
        });
    } else {
        lista.innerHTML = '';
    }
});

/*elimina el ultimo elemento del arreglo
alumnos.pop();

//agrega
alumnos.push("Diego");

//elimina al inicio
alumnos.shift();

//agrega al inicio
alumnos.unshift("Axel Gabriel");

//cambia valor
alumnos[4] = "Carlos Manuel";

//encuentra la posicion del elemento 
alumnos.indexOf("Regina");

//verifica si el elemento esta en el arreglo
alumnos.includes("Eder Abisail");

//encuentra el primer elemento que coincida
alumnos.find(nombre => nombre == "Regina");

//encuentra la posicion del primer elemento que coincida
alumnos.findIndex(nombre => nombre == "Regina");*/
