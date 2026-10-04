// Funciones de los formularios del sitio (una por página)

// ---------- autos.html ----------
function mi_metodoAutos() {

    var fecha = document.getElementById('fecha').value;
    alert(fecha);

    var modelo = document.getElementById('modelo').value;
    alert(modelo);

    var anio = document.getElementById('anio').value;
    alert(anio);

    var numero = document.getElementById('numero').value;
    alert(numero);

    var neumatico = document.querySelector('input[name="neu"]:checked');
    alert(neumatico ? neumatico.value : 'Sin seleccionar');

    var escuderia = document.getElementById('escuderia').value;
    alert(escuderia);

    var peso = document.getElementById('peso').value;
    alert(peso);

    var imagen = document.getElementById('imagen').value;
    alert(imagen);

    var colorf = document.getElementById('colorf').value;
    alert(colorf);

    var comms = document.getElementById('comms').value;
    alert(comms);

}

// ---------- escuderia.html ----------
function mi_metodoEscuderia() {

    var fecha = document.getElementById('fecha').value;
    alert(fecha);

    var nombre = document.getElementById('nombre').value;
    alert(nombre);

    var director = document.getElementById('director').value;
    alert(director);

    var sede = document.getElementById('sede').value;
    alert(sede);

    var pais = document.getElementById('pais').value;
    alert(pais);

    var campeonatos = document.getElementById('campeonatos').value;
    alert(campeonatos);

    var motor = document.querySelector('input[name="mot"]:checked');
    alert(motor ? motor.value : 'Sin seleccionar');

    var imagen = document.getElementById('imagen').value;
    alert(imagen);

    var correo = document.getElementById('correo').value;
    alert(correo);

    var web = document.getElementById('web').value;
    alert(web);

    var colorf = document.getElementById('colorf').value;
    alert(colorf);

    var comms = document.getElementById('comms').value;
    alert(comms);

}

// ---------- corredor.html ----------
function mi_metodoCorredor() {

    var fecha = document.getElementById('fecha').value;
    alert(fecha);

    var nombre = document.getElementById('nombre').value;
    alert(nombre);

    var apellidoP = document.getElementById('apellidoP').value;
    alert(apellidoP);

    var apellidoM = document.getElementById('apellidoM').value;
    alert(apellidoM);

    var tipoSangre = document.querySelector('input[name="TipoS"]:checked');
    alert(tipoSangre ? tipoSangre.value : 'Sin seleccionar');

    var genero = document.querySelector('input[name="gnr"]:checked');
    alert(genero ? genero.value : 'Sin seleccionar');

    var nacimiento = document.getElementById('nacimiento').value;
    alert(nacimiento);

    var nacionalidad = document.getElementById('nacionalidad').value;
    alert(nacionalidad);

    var numero = document.getElementById('numero').value;
    alert(numero);

    var estatura = document.getElementById('estatura').value;
    alert(estatura);

    var imagen = document.getElementById('imagen').value;
    alert(imagen);

    var correo = document.getElementById('correo').value;
    alert(correo);

    var colorf = document.getElementById('colorf').value;
    alert(colorf);

    var comms = document.getElementById('comms').value;
    alert(comms);

}

// ---------- relaciones.html ----------
function mi_metodoRelaciones() {

    var fecha = document.getElementById('fecha').value;
    alert(fecha);

    var corredor = document.getElementById('corredor').value;
    alert(corredor);

    var escuderia = document.getElementById('escuderia').value;
    alert(escuderia);

    var auto = document.getElementById('auto').value;
    alert(auto);

    var tipoRelacion = document.querySelector('input[name="rel"]:checked');
    alert(tipoRelacion ? tipoRelacion.value : 'Sin seleccionar');

    var inicio = document.getElementById('inicio').value;
    alert(inicio);

    var fin = document.getElementById('fin').value;
    alert(fin);

    var duracion = document.getElementById('duracion').value;
    alert(duracion);

    var activo = document.getElementById('activo').checked;
    alert(activo);

    var comms = document.getElementById('comms').value;
    alert(comms);

}
