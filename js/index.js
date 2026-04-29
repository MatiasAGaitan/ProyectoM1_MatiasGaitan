
const botonGenerar = document.getElementById("boton-generar");
const cajaColores = document.getElementById("contenedor-colores")
const cantidadColores = document.getElementById("cantidad-colores")
let valor = 6

//Numeros aleatorios
const numeroAleatorio = function(){
    let numero= Math.floor(Math.random()*250)
    return numero
}
//Generador de RGB
const colorRgb = function(){
    let color1 = numeroAleatorio()
    let color2 = numeroAleatorio()
    let color3 = numeroAleatorio()

    const color = `rgb(${color1},${color2},${color3})`
    return color
}


cantidadColores.addEventListener("change",function(event){
    valor = event.target.value
    cajaColores.style.gridTemplateColumns = `repeat(${valor},1fr)`   // Ubica cantidad de columnas necesarias segun lo seleccionado 
    cajaColores.innerHTML= ""   // Formatea la caja cada vez que seleccionamos un nuevo valor
    
    for (let i = 0 ; i<valor ;i++ ) {
        const div = document.createElement("div")     // Crea la cantidad de hijos necesarios y los agrega 
        cajaColores.appendChild(div)
        
    }
}) 



botonGenerar.addEventListener("click",function(){

    for (let i = 0 ; i < Number(valor); i++){                          // Da los colores a cada hijo 
        cajaColores.children[i].style.backgroundColor = colorRgb()
    
    }
})
