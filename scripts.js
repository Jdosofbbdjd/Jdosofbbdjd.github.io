function unidades(){
    alert("Masa->Kg\nFuerza->Newton\nGravedad->M/s²\nTiempo->s\nAceleracion->M/s²")
}

function CalcularFuerza(){
    let fuerza_interna= (parseFloat(document.getElementById("masa").value)*parseFloat(document.getElementById("aceleracion").value))-parseFloat(document.getElementById("cdr").value)
    alert(fuerza_interna+" Newtons")
}

function CalcularAceleracion(){
var aceleracionInterna= parseFloat(document.getElementById("fuerza").value)/parseFloat(document.getElementById("masa").value)
var fuerzaNormal = parseFloat(document.getElementById("masa").value)*parseFloat(document.getElementById("gravedad").value)
var fuerzaDeRozamiento = parseFloat(document.getElementById("cdr").value)*fuerzaNormal
var FuerzaDeRozamientoMenosFuerza= parseFloat(document.getElementById("fuerza").value)-fuerzaDeRozamiento
var aceleracionDefinitiva= FuerzaDeRozamientoMenosFuerza/parseFloat(document.getElementById("masa").value)
alert(aceleracionDefinitiva+" M/s²")
}
function CalcularMasa(){
    let fuerza_interna= parseFloat(document.getElementById("fuerza").value)/parseFloat(document.getElementById("aceleracion").value)
    alert(fuerza_interna+" Kg")
}



function Formulas(){
    alert("Fuerza->Masa x Aceleracion\nMasa->Fuerza : Aceleracion\nAceleracion->Fuerza-Fuerza de rozamiento : Masa")
}
