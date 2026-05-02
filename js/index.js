//SELECCIONANDO ELEMENTOS
const botonGenerar = document.querySelector(".boton-generar");
const contenedorColores = document.querySelector(".contenedor-colores")
const seleccionCantidad = document.querySelector(".seleccion-cantidad")
const contenedorMain = document.querySelector(".contenedor-main")


// GENERADOR DE NUMEROS ALEATORIOS
const numeroAleatorio = function(limite){
    numero = Math.floor(Math.random()*limite)
    return numero
}
// FUNCION GENERADORA DE COLORES HLS
const colorHsl = function(){
    const color = `hsl(${numeroAleatorio(360)},${numeroAleatorio(100)}%,${numeroAleatorio(100)}%)`
    return color
}
const colorRgb = function(){
    const color = `rgb(${numeroAleatorio(255)},${numeroAleatorio(255)},${numeroAleatorio(255)})`
    return color
}
// Funcion para crear elementos
const crearElemento = function(elemento,clase){
    const nombre = document.createElement(String(elemento))                   
    nombre.classList.add(String(clase))
    return nombre
}


// EVENTO CLICK EN GENERAR
botonGenerar.addEventListener("click",function(){
    const valor = Number(seleccionCantidad.value)
    
    contenedorColores.style.gridTemplateColumns = `repeat(${valor},1fr)`   // Ubica cantidad de columnas necesarias segun lo seleccionado
    
    //MENSAJE USUARIO
    mensajeUsuario.style.display = "flex"

    setTimeout(function(){
        mensajeUsuario.style.display = "none"       // ejecuta la funcion despues de x tiempo (es milisegundos)
    },1500)

    // si los hijos existen verificar candado
    if (contenedorColores.children.length === valor){
        

        for (let i = 0 ; i < valor; i++){
            
            //Los hijos existen "retomaos" sus datos 
            const caja = contenedorColores.children[i];
            const candado = caja.querySelector(".candado");
            const descripcionColor = caja.querySelector("p")

            //Verificacion de candado
            if (candado.classList.contains("desbloqueado")){
                const nuevoColor = colorHsl()
                caja.style.backgroundColor = nuevoColor;
                descripcionColor.textContent = nuevoColor
            }
            
        }}else{
            //Formateo contenedor
            contenedorColores.innerHTML= ""

        for (let i = 0 ; i < valor; i++){    
            const color = colorHsl()
            
            // COLOR
            const cajaColor = crearElemento("div","color")
            cajaColor.style.backgroundColor = color
            contenedorColores.appendChild(cajaColor)

            //CANDADO
            const candado = crearElemento("img","candado")
            candado.src ="../img/abierto.png"
            candado.classList.add("desbloqueado")
            cajaColor.appendChild(candado)

            //CLICK CANDADO
            candado.addEventListener("click",function(){
                    // si candado desbloqueado lo bloqueamos
                if (candado.classList.contains('desbloqueado')) {
                    candado.classList.remove("desbloqueado")
                    candado.src = "../img/cerrado.png"
                } else { // si esta bloqueado lo desbloqueamos
                    candado.classList.add("desbloqueado")
                    candado.src = "../img/abierto.png"
                }})                           
            

            // TEXTO
            const descripcionColor = crearElemento("p","descripcion-color")              
            descripcionColor.textContent = color
            cajaColor.appendChild(descripcionColor)
            



        }}})

//MENSAJE USUARIO
mensajeUsuario = crearElemento("p","mensaje-usuario")
mensajeUsuario.textContent = "PALETA DE COLORES GENERADA CON EXITO🚀✔️"
mensajeUsuario.style.display = "none"   // none "hace desaparecer nuestro elemento"
contenedorMain.appendChild(mensajeUsuario)




