if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
    document.getElementById("DivCambiante").style.display="none"
}


function unidades(){
    alert("Masa->Kg\nFuerza->Newton\nGravedad->M/s²\nTiempo->s\nAceleracion->M/s²")
}

function CalcularFuerza(){
    let fuerzaderozamiento2= parseFloat(document.getElementById("cdr").value)*parseFloat(document.getElementById("masa").value)*parseFloat(document.getElementById("gravedad").value)
    let fuerza_interna= (parseFloat(document.getElementById("masa").value)*parseFloat(document.getElementById("aceleracion").value))+fuerzaderozamiento2
    alert(fuerza_interna+" Newtons")
}

function CalcularAceleracionConFM(){
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

function CalcularAceleracionConViVf(){
    var VfMenosVi=parseFloat(document.getElementById("VelFinal").value)-parseFloat(document.getElementById("VelInicial").value)
    var Aceleracion_definitiva=VfMenosVi/parseFloat(document.getElementById("tiempo").value)
    alert(Aceleracion_definitiva+"M/s²")
}

function Formulas(){
    alert("Fuerza->Masa x Aceleracion + Fuerza de rozamiento\nMasa->Fuerza : Aceleracion\nAceleracion->(Fuerza - Fuerza de rozamiento) : Masa\nAceleracion->(Velocidad final - Velocidad inicial) : Tiempo")

}
