# 🚀 Paleta generadora de colores Aleatorios - Colorfly Studio


## 📌 Tabla de Contenidos

- [Descripción](#-descripción)
- [Manual de Usuario](#-manual-de-usuario)
- [Manual Técnico](#-manual-técnico)
- [Instalación y Ejecución Local](#-instalación-y-ejecución-local)
- [Despliegue en GitHub Pages](#-despliegue-en-github-pages)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Autor](#-autor)

---

## 📖 Descripción

Esta pagina web realizada para la empresa Colorfly Studio, cumple la funcion de generar una paleta de colores aleatoria.

El usuario puede elegir la cantidad de colores que quiere en su paleta (6, 8, 9) y tambien el formato del color (HSL, HEX).

Tiene la opcion de bloquear colores para que no se regeneren los elegidos y de copiar el codigo del color en el portapapeles

---

## ✨ Funcionalidades

- Selecciòn de tamaño de paleta (6, 8, o 9)
- Selecciòn de formato de color (HSL o HEX)
- Generar paleta de colores formato y tamaño elegido
- Bloquear colores para no generar nuevos en su lugar
- Copiar el codigo del color al portapapeles

---

## 📘 Manual de Usuario

### Inicio al entrar a la web

<img width="1143" height="362" alt="incio pagina paleta de colores " src="https://github.com/user-attachments/assets/72cb0d73-bda4-47da-90ff-043d3464942b"/>

1 - Elegir tamaño de paleta de colores. 

2 - Elegir formato de colores.

3 - Generar la paleta con tamaño y formato elegido.

---

### Generada la primer paleta de colores

<img width="1906" height="857" alt="pagina paleta de colores generada" src="https://github.com/user-attachments/assets/f8640eeb-166c-403d-be02-0a205358d2a2" />

4 - Candado desbloqueado - Al clickear sobre el candado se bloquea.

5 - Candado bloqueado - Al clickear sobre el candado se desbloquea.

6 - Un color bloqueado se indica con el borde del mismo en dorado.

---

### Informacion de colores

<img width="1274" height="152" alt="image" src="https://github.com/user-attachments/assets/6a5f8436-0508-4a42-9708-f5750da61ed7" />

7 - En HSL muestra su respectivo codigo mas el codigo en HEXADECIMAL.

8 - En HEXADECIMAL solo muestra su codigo de color.

- Ambos codigos se copian al portapapeles al hacer click en el mismo.

---

### Microfeedbacks

#### -Generando la paleta, indica el formato del color
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/54dd8ea1-e001-4f8f-a051-f1ada6330f71" />
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/7da87069-3b3e-46e6-957a-d06d506cf6b5" /> <br>

#### -Error al generar una paleta por no seleccionar un tamaño
<img width="430" height="75" alt="image" src="https://github.com/user-attachments/assets/d527b1d5-9650-49a2-93ac-8b322357f737" />

#### -Seleccionando el tamaño de la paleta
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/e1bc6e6e-5468-4a39-b128-7e3e1dfc6391" />
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/b42a3c1a-3610-411c-9374-dc16b2e2ae5e" />
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/9766e560-106e-4fa0-ac4d-721878b9d7cc" />

#### -Seleccionando el formato del color
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/c8a52d0e-3eea-4454-8ca5-90bd3a0868ed" />
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/95b38292-68fd-42c2-9f3f-092f831b874c" />

#### -Bloqueando / Desbloqueando el color
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/020836e7-adce-4e3c-b28f-a4d76df91fd2" />
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/84747613-0070-4fcc-9419-f88272f24d26" />

#### -Copiando al portapeles el codigo del color
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/ba327c6d-a715-412c-a700-91be2f587403" />
<img width="320" height="75" alt="image" src="https://github.com/user-attachments/assets/2bb3b7b9-e090-4531-a4fc-0eb63212e4a4" />

### Informacion para el usuario

#### Puntero se posiciona sobre el candado
##### Desbloqueado
<img width="210" height="35" alt="image" src="https://github.com/user-attachments/assets/4cba6d4f-9033-478e-8f7e-99d793fb8a94" />

##### Bloqueado
<img width="210" height="35" alt="image" src="https://github.com/user-attachments/assets/a5a2834e-ea4f-44c6-8d8e-7595834920da" />

#### Puntero se posiciona sobre el codigo de color
<img width="210" height="35" alt="image" src="https://github.com/user-attachments/assets/f279bf22-52fd-4901-b59b-efc435d4ca60" />

#### Color bloqueado se destaca con un borde dorado
<img width="210" height="500" alt="image" src="https://github.com/user-attachments/assets/78d62abd-f711-48c0-bbe0-63396c6a4787" />

---

## 📘 Manual Técnico

### 🧠 Decisiones Técnicas

### HTML

Se utilizó HTML para estructurar el contenido principal de la aplicación, incluyendo botones, contenedores y secciones visuales.

### CSS

Se utilizó CSS para diseñar la interfaz de usuario y aplicar estilos visuales como:
- colores
- tamaños
- espaciados
- diseño responsive

También se utilizaron variables CSS para manejar colores de forma más organizada.

### JavaScript

JavaScript se utilizó para agregar interactividad a la aplicación.

Principales funciones:
- generación automática de colores
- conversión de formatos HEX, RGB y HSL
- copia de colores al portapapeles
- actualización dinámica de la interfaz

---

## 📁 Organización del Proyecto

El proyecto fue organizado separando cada tecnología en carpetas diferentes para mejorar la lectura y mantenimiento del código.

```txt
📦 docs
 ┣ 📂 css
 ┃ ┗ 📜 style.css
 ┣ 📂 img
 ┃ ┣ 📜 abierto.png
 ┃ ┣ 📜 cerrado.png
 ┃ ┗ 📜 logo.png
 ┣ 📂 js
 ┃ ┗ 📜 index.js
 ┣ 📜 index.html
 ┗ 📜 README.md

```

# 💻 Instalación y Ejecución Local
## 📥 1. Clonar el repositorio

Abrir la terminal Git Bash y ejecutar el siguiente comando:

```bash
git clone https://github.com/MatiasAGaitan/ProyectoM1_MatiasGaitan.git
```

---

## 📂 2. Entrar a la carpeta del proyecto

```bash
cd ProyectoM1_MatiasGaitan
```

---

## ▶️ 3. Ejecutar la aplicación

Como el proyecto fue desarrollado con HTML, CSS y JavaScript vanilla, no requiere instalación de dependencias.

Simplemente abrir el archivo:

```txt
index.html
```

en el navegador.

---

## 🌐 4. Visualización en navegador

La aplicación puede ejecutarse en cualquier navegador moderno:
- Google Chrome
- Microsoft Edge
- Firefox
- Opera

---

# 🚀 Despliegue en GitHub Pages

## 📤 1. Subir el proyecto a GitHub

El proyecto debe estar subido al siguiente repositorio:

```txt
ProyectoM1_MatiasGaitan
```

---

## ⚙ 2. Entrar a la configuración del repositorio

1. Ingresar al repositorio en GitHub.
2. Hacer click en:

```txt
Settings
```

---

## 🌐 3. Configurar GitHub Pages

1. Dentro de la configuración buscar la sección:

```txt
Pages
```

2. En la opción "Branch" seleccionar:

```txt
main
```

3. En la carpeta seleccionar:

```txt
/docs
```

4. Guardar los cambios presionando:

```txt
Save
```

---

## ⏳ 4. Esperar el despliegue

GitHub comenzará automáticamente el despliegue del proyecto.

El proceso puede tardar algunos minutos.

---

## 🔗 5. Acceder al sitio web

Una vez finalizado el despliegue, la aplicación quedará disponible en:

```txt
https://matiasagaitan.github.io/ProyectoM1_MatiasGaitan/
```

---

## ✅ Resultado

La página web desarrollada con HTML, CSS y JavaScript podrá visualizarse directamente desde cualquier navegador sin necesidad de instalar programas adicionales.

# 🛠 Tecnologías Utilizadas

## Frontend
- HTML
- CSS
- JavaScript

## Herramientas
- Git
- GitHub
- GitHub Pages
- Visual Studio Code

---

## 👨‍💻 Autor

- Matias Gaitan
- GitHub: https://github.com/MatiasAGaitan


