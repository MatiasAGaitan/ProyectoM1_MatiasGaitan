//SELECCIONANDO ELEMENTOS
const botonGenerar = document.querySelector(".boton-generar");
const contenedorColores = document.querySelector(".contenedor-colores")
const seleccionCantidad = document.querySelector(".seleccion-cantidad")

let valor 
let x = []

// FUNCION GENERADORA DE COLORES HLS
const colorHsl = function(){
    let color1 = Math.floor(Math.random()*250)
    let color2 = Math.floor(Math.random()*100)
    let color3 = Math.floor(Math.random()*100)

    const color = `hsl(${color1},${color2}%,${color3}%)`
    return color
}
const colorRgb = function(){
    let color1 = Math.floor(Math.random()*255)
    let color2 = Math.floor(Math.random()*255)
    let color3 = Math.floor(Math.random()*255)

    const color = `rgb(${color1},${color2},${color3})`
    return color
}


/*EVENTO AL SELECCIONAR UNA OPOCION (CANTIDAD DE COLORES) */
seleccionCantidad.addEventListener("change",function(event){
    contenedorColores.innerHTML= ""
    valor = Number(event.target.value)
    contenedorColores.style.gridTemplateColumns = `repeat(${valor},1fr)`   // Ubica cantidad de columnas necesarias segun lo seleccionado

    for (let i = 0 ; i<valor ;i++ ) {
        const hijoColor = document.createElement("div")                   // Crea la cantidad de hijos necesarios y los agrega
        hijoColor.classList.add("color")
        contenedorColores.appendChild(hijoColor)   
    }
}) 

// EVENTO CLICK EN GENERAR
botonGenerar.addEventListener("click",function(){
    for (let i = 0 ; i < valor; i++){                     
        contenedorColores.children[i].style.backgroundColor = colorHsl()  
        }
    })

// EVENTO CUANDO EL MOUSE ENTRA AL COLOR
contenedorColores.addEventListener("mouseover",function(event){
    if(event.target.className === "color"){
        const caractColor = document.createElement("div")
        caractColor.classList.add("caractColor")
        caractColor.textContent = "COLOR"
    
    }
})

// EVENTO CUANDO EL MOUSE SALE DEL COLOR
contenedorColores.addEventListener("mouseout",function(event){
    /* console.log(contenedorColores.children[0].style.backgroundColor) */
    if(event.target.className === "color"){
        event.target.textContent = ""
    }
})


