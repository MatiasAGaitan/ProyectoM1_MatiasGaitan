//Seleccion de elementos
const botonGenerar = document.querySelector(".boton-generar");
const contenedorColores = document.querySelector(".contenedor-colores")
const seleccionCantidad = document.querySelector(".seleccion-cantidad")
const contenedorMain = document.querySelector(".contenedor-main")
const tamañoPaleta = document.querySelector(".option")
const formato = document.querySelectorAll(`input[name="formato"]`)

//creo variables globales
let feedbackTimeout
let valorFormato


// Genera numeros aleatorios
const numeroAleatorio = function(limite){
    numero = Math.floor(Math.random()*limite)
    return numero
}
// Crea colores HSL
const colorHsl = function(){
    const color = `hsl(${numeroAleatorio(360)},${numeroAleatorio(100)}%,${numeroAleatorio(100)}%)`
    return color
}
// Crea colores Hexadecimales
const colorHexa = function(){
    const caractHexa = "0123456789abcdef"
    let color = "#"
    for (let i = 0; i<6; i++) {
        let indexAleatorio = numeroAleatorio(16)
        color+= caractHexa[indexAleatorio];
    }
    return color
}
// Crea elementos y le da clase
const crearElemento = function(elemento,clase){
    const nombre = document.createElement(String(elemento))                   
    nombre.classList.add(String(clase))
    return nombre
}
// Muestra microfeedback al usuario
const microfeedback = function(texto,tamaño){
    mensajeUsuario.textContent = texto
    mensajeUsuario.style.display = "flex"
    mensajeUsuario.style.width = tamaño

    clearTimeout(feedbackTimeout);
    
    feedbackTimeout = setTimeout(function(){
        mensajeUsuario.style.display = "none"
        },2000)
}

// EVENTO CLICK EN GENERAR
botonGenerar.addEventListener("click",function(){
    
    const valor = Number(seleccionCantidad.value)

    let tamañoAnterior = contenedorColores.classList[1]
    let tamañoNuevo = "colores-" + valor
    contenedorColores.classList.remove(tamañoAnterior)
    contenedorColores.classList.add(tamañoNuevo)   // le da la clase adecuada para elegir cantidad de columnas 

    microfeedback("🚀✔️ Paleta de colores generada con exito","350px")

    // si los hijos existen verificar candado
    if (contenedorColores.children.length === valor){
        
        for (let i = 0 ; i < valor; i++){
            
            //Los hijos existen "retomamos" sus datos 
            const caja = contenedorColores.children[i];
            const candado = caja.querySelector(".candado");
            const descripcionColor = caja.querySelector(".descripcion-color")

            //Verificacion de candado
            if (candado.classList.contains("desbloqueado")){
                const nuevoColor = valorFormato === "HEXA" ? colorHexa() : colorHsl()
                caja.style.backgroundColor = nuevoColor;
                descripcionColor.textContent = nuevoColor
            }}

    }else{
        //Los hijos no existen creamos todo
            //Formateo contenedor
            contenedorColores.innerHTML= ""

        for (let i = 0 ; i < valor; i++){    
            const color = valorFormato === "HEXA" ? colorHexa() : colorHsl()
            
            // COLOR
            const cajaColor = crearElemento("div","color")
            cajaColor.style.backgroundColor = color
            contenedorColores.appendChild(cajaColor)

            //-------------------------------------------------------CANDADO PARA BLOQUEAR Y DESBLOQUEAR COLOR-------------------------------------------
            //CANDADO
            const candado = crearElemento("img","candado")
            candado.src ="abierto.png"
            candado.classList.add("desbloqueado")
            cajaColor.appendChild(candado)

            //CLICK CANDADO
            candado.addEventListener("click",function(){
                    // si candado desbloqueado lo bloqueamos
                if (candado.classList.contains('desbloqueado')) {
                    candado.classList.remove("desbloqueado")
                    candado.src = "cerrado.png"
                    cajaColor.style.border = "4px solid gold"
                    microfeedback("🔒 Color bloqueado", "200PX")
                } else { // si esta bloqueado lo desbloqueamos
                    candado.classList.add("desbloqueado")
                    candado.src = "abierto.png"
                    cajaColor.style.border = "none"
                    microfeedback("🔓 Color desbloqueado", "200PX")
                }}
            )                              
            const infoBloquear = crearElemento("p","cartel-info")
            infoBloquear.classList.add("bloquear-desbloquear")
            cajaColor.appendChild(infoBloquear)

            candado.addEventListener("mouseenter",function(){
                candado.classList.contains('desbloqueado') ? infoBloquear.textContent ="🖱️Haz click para bloquear" :  infoBloquear.textContent ="🖱️Haz click para desbloquear"
                infoBloquear.style.display = "flex"
            })

            candado.addEventListener("mouseout",function(){
                infoBloquear.style.display = "none"
            })

            //-------------------------------------------------------CODIGO DE COLOR GENERADO-------------------------------------------
            // Muestra el codigo del color por la pantalla 
            const descripcionColor = crearElemento("p","descripcion-color")              
            descripcionColor.textContent = color
            cajaColor.appendChild(descripcionColor)

            //Copia el codigo al portapapeles al hacer click 
            descripcionColor.addEventListener("click",function(){
                navigator.clipboard.writeText(color)
                microfeedback("📋 Código copiado al portapapeles","300px")
                })

            //Mostramos info al usuario para que copie el color 
            const InfoCopiar = crearElemento("p","cartel-info")
            InfoCopiar.classList.add("copiar")
            InfoCopiar.textContent = "🖱️ Haz click para copiar"
            cajaColor.appendChild(InfoCopiar)

            descripcionColor.addEventListener("mouseenter", function(){
                InfoCopiar.style.display= "flex"
            })

            descripcionColor.addEventListener("mouseout", function(){
                InfoCopiar.style.display= "none"})
        }
    }
})
            
//-------------------------------------------------------MICROFEEDBACK GENERADO CON EXITO-------------------------------------------
mensajeUsuario = crearElemento("p","mensaje-usuario")
microfeedback("🚀✔️Paleta de colores generada con exito","350px")
mensajeUsuario.style.display = "none"                                    // none "hace desaparecer nuestro elemento"
contenedorMain.appendChild(mensajeUsuario)

//-------------------------------------------------------MICROFEEDBACK TAMAÑO PALETA-------------------------------------------
seleccionCantidad.addEventListener("change",function(){
    microfeedback(`🎨 Paleta de ${seleccionCantidad.value} colores seleccionada `, "300px")
})

//-------------------------------------------------------SELECCION DE FORMATO-------------------------------------------
for (let i = 0; i < formato.length; i++) {
    valorFormato = formato[i].value
    formato[i].addEventListener("change",function(){
        if(formato[i].checked){
            valorFormato = formato[i].value
        }
        microfeedback(`🎯 Formato cambiado a ${valorFormato}`,"250px")
    }
)
}





