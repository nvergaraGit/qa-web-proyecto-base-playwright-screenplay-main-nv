
## Proyecto base de automatización con playwright - Nelson Vergara
 

### Editar de aqui para abajo

## Description
Proyecto de prueba para https://opencart.abstracta.us/:

## Project status
<h4 align="center"> 🚧 Proyecto en construcción 🚧 </h4> 


## ✅ Tecnologías
### Este proyecto usa las siguientes técnologías:
- Node.js V 16+
- Windows 10+
- Visual Studio Code

Tambien se requiere la instalación del plugin de:
Playwright Test for VSCode
El cual facilita la interacción con los test y nos da una visual más amplia

Crear la carpeta inicial donde se llevara a cabo la demostración
## Instalación
Para instalar Playwright basta con ejecutar el comando de instalación:

```
npm init playwright@latest
```

- Despues elegir entre TypeScript o JavaScript (por defecto es TypeScript)
- Nombre de la carpeta Tests (por defecto es tests o e2e si ya tienes una carpeta tests en tu proyecto)
- Añada un flujo de trabajo de Acciones de GitHub para ejecutar fácilmente pruebas en CI (Por ahora no se usaran: false)
- Instalar navegadores Playwright (por defecto es true)

## 📁 Explicación Carpetas

- playwright-config.ts
Esta carpeta trae todas las configuraciones que se pueden realizar en Playwright, por ej: Directorio de los tests, configurar en los reportes los videos y imagenes que se requieren, configurar una url por defecto, configurar los navegadores, etc

- package.json

Nos explica las versiones que se estan utilizando en el proyecto
el autor, la descripción, etc lo normal de un package.json




##  🛠️ Run tests
```
npx playwright test 
```
Para correr todos los tests configigurados
```
npx playwright test example
```
Para correr todos los tests en una ubicación precisa
```
npx playwright test --debug
```
Para correr los test en modo debug

```
npx playwright show-report
```
Para lanzar un servidor y ver los diferentes reportes

##  💹 Reportes con junit

results.xml en la raiz del proyecto


