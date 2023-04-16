let lista_dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

let lista_meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function get_hora() {
  let fechaActual = new Date();
  let hora = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();

  let dia = fechaActual.getDay();
  let dia_num = fechaActual.getDate();

  let nombre_dia = lista_dias[dia];

  let mes = fechaActual.getMonth();
  let nombre_mes = lista_meses[mes - 1];

  let anio = fechaActual.getFullYear();

  let h2_hora = document.getElementById("hora");
  h2_hora.innerText = hora + ":" + minutos + ":" + segundos;

  let h1_fecha = document.getElementById("fecha");
  h1_fecha.innerText =
    nombre_dia + " " + dia_num + " de " + nombre_mes + " del " + anio;
}
setInterval(get_hora, 1000);
