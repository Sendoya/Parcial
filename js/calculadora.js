var opeA;
var opeB;
var ope;

var R = document.getElementById('resultado');

var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');
var mas = document.getElementById('+');
var menos = document.getElementById('-');
var por = document.getElementById('*');
var divi = document.getElementById('/');
var igual = document.getElementById('=');
var bo = document.getElementById('CE');
var IC = document.getElementById('Imp');


function unoo() {
    resultado.value = resultado.value + "1";
}

function doss() {
    resultado.value = resultado.value + "2";
}

function tress() {
    resultado.value = resultado.value + "3";
}

function cuatroo() {
    resultado.value = resultado.value + "4";
}

function cincoo() {
    resultado.value = resultado.value + "5";
}

function seiss() {
    resultado.value = resultado.value + "6";
}

function sietee() {
    resultado.value = resultado.value + "7";
}

function ochoo() {
    resultado.value = resultado.value + "8";
}

function nuevee() {
    resultado.value = resultado.value + "9";
}

function ceroo() {
    resultado.value = resultado.value + "0";
}

function rei() {
    resultado.value = " ";
}

function code() {
    resultado.value = "1620079566";
}

function suma() {
    opeA = resultado.value;
    operacion = "+";
    rei();
}

function resta() {
    opeA = resultado.value;
    operacion = "-";
    rei();
}

function mul() {
    opeA = resultado.value;
    operacion = "*";
    rei();
}

function div() {
    opeA = resultado.value;
    operacion = "/";
    rei();
}



