document.getElementById("btn1").addEventListener("click", resultadoejercicio1)
//Ejercicio 1
function resultadoejercicio1() {

    var centígrados = Number(document.querySelector("#centígrados").value);
    var F = convertirGradosCentigradosAGradosFahrenheit(centígrados)
    document.querySelector("#resultado").innerHTML = F;
}
function convertirGradosCentigradosAGradosFahrenheit(centígrados) {


    var F = centígrados * 9 / 5
    F = F + 32
    var mensaje = ""

    if (F >= 212) { mensaje = "<p1> Punto de ebullicion del agua:" + F + "</p1>" }
    else
        if (F >= 98.6 && F < 212) { mensaje = "<p1> Temperatura del cuerpo humano:" + F + "</p1>" }
    if (F >= 77 && F < 98.6) { mensaje = "<p1> Temperatura del cuerpo humano:" + F + "<p1>" }
    else
        if (F >= 32 && F < 77) { mensaje = "<p1> Temperatura de congelacion del agua:" + F + "</p1>" }
        else
            if (F >= -459.59 && F < 32) { mensaje = "<p1> Cero absoluto:" + F + "</p1>" }
    return mensaje
}
document.getElementById("btn2").addEventListener("click", resultadoejercicio2)
//Ejercicio 2
function resultadoejercicio2() {

    var Numero = Number(document.querySelector("#val2").value);
    var porcentaje = calcularPorcentajes(Numero)
    document.querySelector("#resultado").innerHTML = porcentaje;
}

function calcularPorcentajes(Numero) {
    var resultado2 = 0
    var Numero
    if (Numero < 500) {
        resultado2 = Numero + (Numero * 0.5);
    } if (Numero > 500) {
        resultado2 = Numero - (Numero * 0.7);
    }
    return res2;
}

document.getElementById("btn3").addEventListener("click", generarTablaHTML)
//Ejercicio 3
function generarTablaHTML() {
     var fil, col
      var numfilas= Number(document.querySelector("#filas").value);
    var numcolumnas= Number (document.querySelector("#columnas").value);
       var calculo= numcolumnas * numfilas;
       var htmlt= "<table border>" ;
     for ( fil = 0; fil< numfilas; fil ++){
       htmlt+= "<tr>"
     for (col = 0; col < numcolumnas; col++){
        htmlt="<td>";
     htmlt= (res)
     res --;
       htmlt= "</td>"
         }
          htmlt= "</tr>"
        }
          htmlt= "</table>";
    document.querySelector("#resultado3").innerHTML=htmlt;
    }


    

   
 
