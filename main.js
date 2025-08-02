const primernumero = parsefloat(document.getElementById("primerValor").value)
const segundonumero = parsefloat(document.getElementById("segundoValor").value)
const pantalla = document.querySelector(".pantalla")


function suma (a,b){
    return a+b
}
function resta (a,b){
    return a-b
}
function multiplicacion (a,b){
    return a*b
}
function division (a,b){
    return a/b
}
function botonsuma (){
    const sumaTotal = suma(primernumero, segundonumero);
    alert(sumaTotal)
}
function botonresta (){
    const restaTotal = resta(primernumero, segundonumero);
    alert(restaTotal)
}
function botonmultiplicacion (){
    const multiplicacionTotal = multiplicacion(primernumero, segundonumero);
    alert(multiplicacionTotal)
}
function botondivision (){
    const divisionTotal = division(primernumero, segundonumero);
    alert(divisionTotal)
}

botonsuma()
