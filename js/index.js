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
        
        // Crea el div del color - le agrega clase - da color
        const cajaColor = document.createElement("div")                   
        cajaColor.classList.add("color")                                  
        cajaColor.style.backgroundColor = color

        // Crea el parrafo - le agrega la clase - agrega el contenido a mostrar en p
        const descripcionColor = document.createElement("p")               
        descripcionColor.classList.add("descripcion-color")               
        descripcionColor.textContent = color

        // Agrega dentro de cada padre a su hijo
        contenedorColores.appendChild(cajaColor)                          
        cajaColor.appendChild(descripcionColor)
        }

    // Crea el elemento p que va a ser mostrado despues de generar los colores
    const mensajeUsuario = document.createElement("p")
    mensajeUsuario.classList.add("mensaje-usuario")
    mensajeUsuario.textContent = "PALETA DE COLORES GENERADA CON EXITO🚀✔️"
    contenedorColores.appendChild(mensajeUsuario)
    
    // esta funcion hace que depues de cierto tiempo x cosa suceda 
    setTimeout(function(){
        mensajeUsuario.style.display = "none"
    },1500)


    })





