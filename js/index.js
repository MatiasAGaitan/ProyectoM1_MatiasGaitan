
const botonGenerar = document.getElementById("boton-generar");
const cajaColores = document.getElementById("contenedor-colores")
const cantidadColores = document.getElementById("cantidad-colores")


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

botonGenerar.addEventListener("click",function(){
    cajaColores.style.backgroundColor= colorRgb()
})

cantidadColores.addEventListener("change",function(event){
    const valor = event.target.value
    cajaColores.innerHTML= "" // Formatea la caja cada vez que seleccionamos un nuevo valor

    for (let i = 0 ; i<valor ;i++ ) {
        const div = document.createElement("div")     // Usamos bucle for para crear la cantidad de "hijos" necesarios y pintarlos
        cajaColores.appendChild(div)

    }
    const cantidad = cajaColores.children.length
    for (let i = 0 ; 1< (cantidad); i++){                              // FALTA OPTIMIZAR MEJORAR AUN QUE SE CAMBIE CON GENERAR Y VARIAR 
        cajaColores.children[i].style.backgroundColor = colorRgb()

    }

})
