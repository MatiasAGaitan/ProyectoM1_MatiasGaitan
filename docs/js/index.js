//Seleccion de elementos
const botonGenerar = document.querySelector(".boton-generar");
const contenedorColores = document.querySelector(".contenedor-colores")
const seleccionCantidad = document.querySelector(".seleccion-cantidad")
const contenedorMain = document.querySelector(".contenedor-main")
const formato = document.querySelectorAll(`input[name="formato"]`)
let valorFormato = document.querySelector(`input[name="formato"]:checked`).value

//creo variables globales
let feedbackTimeout
let mensajeUsuario


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

const HSLaHEXA = function(HSL) {

    // elimino datos no necesarios y los hacemos elementos de un array
    const hslLimpio = HSL
        .replace("hsl(", "")
        .replace(")", "")
        .replaceAll("%", "")
        .split(",")

    const h = Number(hslLimpio[0])    
    const s = Number(hslLimpio[1])    
    const l = Number(hslLimpio[2])    

    // convierto s y l en decimales 
    const saturation = s / 100;
    const lightness = l / 100;

    // De HSL a RGB
    const c = (1 - Math.abs(2 * lightness - 1)) * saturation
    const x = c * (1 - Math.abs((h / 60) % 2 - 1))
    const m = lightness - c / 2

    let r = 0
    let g = 0
    let b = 0

    if (h >= 0 && h < 60) {
        r = c
        g = x
    } else if (h >= 60 && h < 120) {
        r = x
        g = c
    } else if (h >= 120 && h < 180) {
        g = c
        b = x
    } else if (h >= 180 && h < 240) {
        g = x
        b = c
    } else if (h >= 240 && h < 300) {
        r = x
        b = c
    } else {
        r = c
        b = x
    }

    // convierto a rango 0-255
    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    // Función auxiliar para HEX
    function aHexa(valor) {
        return valor.toString(16).padStart(2, "0")
    }


    // Retornar HEX final
    return `#${aHexa(r)}${aHexa(g)}${aHexa(b)}`
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
    
    feedbackTimeout = setTimeout(() => {
        mensajeUsuario.style.display = "none"
        },2000)
}

// EVENTO CLICK EN GENERAR
botonGenerar.addEventListener("click",() => {
    
    let valor = seleccionCantidad.value

    if (valor === "texto"){
        microfeedback("⚠️ Debes elegir un tamaño de paleta","500px")
        return;
    }
    
    valor = Number(valor)
    
    let tamañoAnterior = contenedorColores.classList[1]
    let tamañoNuevo = "colores-" + valor
    contenedorColores.classList.remove(tamañoAnterior)
    contenedorColores.classList.add(tamañoNuevo)   // le da la clase adecuada para elegir cantidad de columnas 

    
    // si los hijos existen verificar candado
    if (contenedorColores.children.length === valor){
        
        microfeedback(`🚀✔️ Paleta de colores ${valorFormato} generada con exito`,"380px")
        
        for (let i = 0 ; i < valor; i++){
            
            //Los hijos existen "retomamos" sus datos 
            const caja = contenedorColores.children[i];
            const candado = caja.querySelector(".candado");
            const descripcionColor = caja.querySelector(".descripcion-color")

            //Verificacion de candado
            if (candado.classList.contains("desbloqueado")){
                const nuevoColor = valorFormato === "HEXA" ? colorHexa() : colorHsl()
                caja.style.backgroundColor = nuevoColor;
                
                if (valorFormato === "HSL") {
                    const colorEnHexa = HSLaHEXA(nuevoColor)
                    descripcionColor.innerHTML = `${nuevoColor}<br>${colorEnHexa}`
                } else {
                    descripcionColor.textContent = nuevoColor
                }
                descripcionColor.onclick = () => {
                    navigator.clipboard.writeText(nuevoColor)
                    microfeedback(`📋 Código ${nuevoColor} copiado`,"270px")
                }
            }
        }   
    }else{
        //Los hijos no existen creamos todo
            //Formateo contenedor
            microfeedback(`🚀✔️ Paleta de colores ${valorFormato} generada con exito`,"380px")

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
            candado.src ="img/abierto.png"
            candado.classList.add("desbloqueado")
            cajaColor.appendChild(candado)

            //CLICK CANDADO
            candado.addEventListener("click",()=>{
                    // si candado desbloqueado lo bloqueamos
                if (candado.classList.contains('desbloqueado')) {
                    candado.classList.remove("desbloqueado")
                    candado.src = "img/cerrado.png"
                    cajaColor.style.border = "4px solid gold"
                    microfeedback("🔒 Color bloqueado", "200px")
                } else { // si esta bloqueado lo desbloqueamos
                    candado.classList.add("desbloqueado")
                    candado.src = "img/abierto.png"
                    cajaColor.style.border = "none"
                    microfeedback("🔓 Color desbloqueado", "200px")
                }}
            )                              
            const infoBloquear = crearElemento("p","cartel-info")
            infoBloquear.classList.add("bloquear-desbloquear")
            cajaColor.appendChild(infoBloquear)

            candado.addEventListener("mouseenter",() => {
                candado.classList.contains('desbloqueado') ? infoBloquear.textContent ="🖱️Haz click para bloquear" :  infoBloquear.textContent ="🖱️Haz click para desbloquear"
                infoBloquear.style.display = "flex"
            })

            candado.addEventListener("mouseout", () => {
                infoBloquear.style.display = "none"
            })

            //-------------------------------------------------------CODIGO DE COLOR GENERADO-------------------------------------------
            // Muestra el codigo del color por la pantalla 
            const descripcionColor = crearElemento("p","descripcion-color")              
            descripcionColor.textContent = color

            if (valorFormato === "HSL") {
                const colorEnHexa = HSLaHEXA(color)
                descripcionColor.innerHTML = `${color}<br>${colorEnHexa}`
            }

            cajaColor.appendChild(descripcionColor)

            //Copia el codigo al portapapeles al hacer click 
            descripcionColor.addEventListener("click", () => {
                let codigoACopiar = color
                navigator.clipboard.writeText(codigoACopiar)
                microfeedback(`📋 Código ${color} copiado`,"270px")
                })

            //Mostramos info al usuario para que copie el color 
            const InfoCopiar = crearElemento("p","cartel-info")
            InfoCopiar.classList.add("copiar")
            InfoCopiar.textContent = "🖱️ Haz click para copiar"
            cajaColor.appendChild(InfoCopiar)

            descripcionColor.addEventListener("mouseenter", () => {
                InfoCopiar.style.display= "flex"
            })

            descripcionColor.addEventListener("mouseout", () => {
                InfoCopiar.style.display= "none"})
        }
    }
})
            
//-------------------------------------------------------MICROFEEDBACK GENERADO CON EXITO-------------------------------------------
mensajeUsuario = crearElemento("p","mensaje-usuario")
contenedorMain.appendChild(mensajeUsuario)

//-------------------------------------------------------MICROFEEDBACK TAMAÑO PALETA-------------------------------------------
seleccionCantidad.addEventListener("change",() => {
    microfeedback(`🎨 Paleta de ${seleccionCantidad.value} colores seleccionada `, "300px")
})

//-------------------------------------------------------SELECCION DE FORMATO-------------------------------------------
formato.forEach(radio =>{
    radio.addEventListener("change", () => {
        if(radio.checked){
            valorFormato = radio.value
            microfeedback(`🎯 Formato cambiado a ${valorFormato}`,"250px")
        }
    })
})




