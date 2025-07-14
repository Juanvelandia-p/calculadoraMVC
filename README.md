# CalculadoraMVC

Proyecto de calculadora web desarrollado con Spring Boot (backend) y React (frontend) bajo el patrón Modelo-Vista-Controlador (MVC).

## Descripción
Esta aplicación permite realizar operaciones matemáticas básicas (suma, resta, multiplicación y división) desde una interfaz web. El backend expone una API REST y el frontend consume dicha API para mostrar los resultados al usuario.

## Estructura del proyecto

- **Backend:** Java, Spring Boot
  - Lógica de operaciones matemáticas
  - Controlador REST para recibir peticiones
- **Frontend:** React (JSX en archivos estáticos)
  - Interfaz de usuario interactiva
  - Peticiones al backend usando `fetch`

## Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd calculadoraMVC
   ```

2. **Compila y ejecuta el backend:**
   ```bash
   ./mvnw spring-boot:run
   ```
   O en Windows:
   ```powershell
   .\mvnw.cmd spring-boot:run
   ```

3. **Accede al frontend:**
   Abre tu navegador y visita [http://localhost:8080/](http://localhost:8080/)

## Uso

1. Ingresa dos números en los campos correspondientes.
2. Selecciona la operación (+, -, *, /).
3. Haz clic en "Calcular".
4. El resultado aparecerá en pantalla.

## Arquitectura

- **OperationService:** Lógica de operaciones matemáticas usando lambdas y un mapa de operaciones.
- **OperationController:** Controlador REST que recibe los parámetros y llama al servicio.
- **Frontend React:** Componente principal (`App.jsx`) que gestiona el estado y realiza peticiones al backend.

## Tecnologías utilizadas

- Java 17+
- Spring Boot
- React (JSX, Babel, ReactDOM desde CDN)
- HTML5, CSS3

## Multiusuario
La aplicación es multiusuario por diseño: cada usuario interactúa con su propia instancia del frontend y el backend no guarda estado entre peticiones.

## Notas adicionales

- El frontend está ubicado en `src/main/resources/static/`.
- El backend expone el endpoint `/operations` para realizar las operaciones.
- Si deseas agregar nuevas operaciones, modifica el servicio en `OperationService.java`.

## Autor

Desarrollado por Juan Sebastian velandia.
Para la materia de Arquitectura de Software en la Escuela Colombiana de Ingenieria
