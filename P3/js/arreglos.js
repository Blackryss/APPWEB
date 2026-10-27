function cargar(){

   temperaturas = new Array(7)
   for (let i = 0; i<7; i++){

      let valor=prompt("Captura temperatura: ");
      temperaturas[i]=parseFloat(valor);
      console.log(temperaturas[i]);

   }

}

function mostrar() {
    let salida = document.getElementById("imprimirT");
    salida.innerHTML = '';

    let suma = 0;

    for (let j = 0; j < temperaturas.length; j++) {
        suma += temperaturas[j];
    }

    let promedio = suma / temperaturas.length;
    let menor = Math.min(...temperaturas);
    let mayor = Math.max(...temperaturas);

    salida.innerHTML += "<br>Promedio: " + promedio + "<br>";
    salida.innerHTML += "Temperatura menor: " + menor + "<br>";
    salida.innerHTML += "Temperatura mayor: " + mayor + "<br>";

}

function sueldos() {

    let tarifas = [
        //nb  jr   sr
        [120, 240, 210],   
        [240, 280, 300],   
        [400, 600, 3000]
    ];

    let puesto = parseInt(document.getElementById("puesto").value);
    let nivel = parseInt(document.getElementById("nivel").value);
    let hrs = parseFloat(document.getElementById("hrs").value);

    let total = tarifas[puesto][nivel] * hrs;

    document.getElementById("resultado").innerHTML = "Total: $" + total;
}

function matriz() {

    let salida = document.getElementById("imprimirM");
    salida.innerHTML = '';

    for (let i = 0; i < 5; i++) {

        for (let j = 0; j < 5; j++) {

            if (i % 2 == 0 || j == 0 || j == 4) {
                salida.innerHTML += "$ ";
            } else {
                salida.innerHTML += "  ";
            }

        }

        salida.innerHTML += "\n";
    }

}


let nombres = new Array(10);

function capturarNombres() {

    for (let i = 0; i < 10; i++) {

        nombres[i] = prompt("Captura el nombre del alumno " + (i + 1) + ": ");

    }

    mostrarNombres();

}

function mostrarNombres() {

    let salida = document.getElementById("imprimirN");
    salida.innerHTML = '';

    for (let i = 0; i < nombres.length; i++) {

        salida.innerHTML += (i + 1) + ".- " + nombres[i] + "<br>";

    }

}

function eliminarRango() {

    let inicio = parseInt(prompt("¿Desde qué posición empiezo a eliminar? (1-10)"));
    let fin = parseInt(prompt("¿Hasta qué posición elimino? (1-10)"));

    for (let i = inicio - 1; i < fin; i++) {

        nombres[i] = "";

    }

    mostrarNombres();

}

function vaciarNombre() {

    let nombre = prompt("Captura el nombre que quieres vaciar: ");

    for (let i = 0; i < nombres.length; i++) {

        if (nombres[i] == nombre) {
            nombres[i] = "";
        }

    }

    mostrarNombres();

}