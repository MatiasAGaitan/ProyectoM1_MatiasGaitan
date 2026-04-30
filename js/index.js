//SELECCIONANDO ELEMENTOS
const botonGenerar = document.querySelector(".boton-generar");
const contenedorColores = document.querySelector(".contenedor-colores")
const seleccionCantidad = document.querySelector(".seleccion-cantidad")

let valor

// GENERADOR DE NUMEROS ALEATORIOS
const numeroAleatorio = function(limite){
    numero = Math.floor(Math.random()*limite)
    return numero
}

// FUNCION GENERADORA DE COLORES HLS
const colorHsl = function(){
    const color = `hsl(${numeroAleatorio(250)},${numeroAleatorio(100)}%,${numeroAleatorio(100)}%)`
    return color
}
const colorRgb = function(){
    const color = `rgb(${numeroAleatorio(255)},${numeroAleatorio(255)},${numeroAleatorio(255)})`
    return color
}



// EVENTO CLICK EN GENERAR
botonGenerar.addEventListener("click",function(){
    valor = seleccionCantidad.value
    contenedorColores.innerHTML= ""
    contenedorColores.style.gridTemplateColumns = `repeat(${valor},1fr)`   // Ubica cantidad de columnas necesarias segun lo seleccionado
    
    
    for (let i = 0 ; i < valor; i++){    
        let color = colorHsl()
        const hijoColor = document.createElement("div")                    // Crea hijo 
        hijoColor.classList.add("color")                                  // Agrega clase al contenedor 
        hijoColor.style.backgroundColor = color

        const descripcionColor = document.createElement("p")               // Crea descripcion 
        descripcionColor.classList.add("descripcion-color")               // Agrega clase al contenedor
        descripcionColor.textContent = color


        contenedorColores.appendChild(hijoColor)                          // Agrega el hijo al padre
        hijoColor.appendChild(descripcionColor)
        
        }
    })






/* // EVENTO CUANDO EL MOUSE ENTRA AL COLOR
contenedorColores.addEventListener("mouseover",function(event){
    if(event.target.className === "color"){
        const caractColor = document.createElement("div")
        caractColor.classList.add("caractColor")
        caractColor.textContent = "COLOR"
    
    }
})
 */

/* 
// EVENTO CUANDO EL MOUSE SALE DEL COLOR
contenedorColores.addEventListener("mouseout",function(event){
    if(event.target.className === "color"){
        event.target.textContent = ""
    }
})
*/

