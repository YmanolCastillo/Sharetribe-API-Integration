**Prueba de Concepto - Integración de Sharetribe API en un E-Commerce Customizado
Desarrollado por: Ymanol Martínez Castillo**

Descripción
Esta es una prueba de concepto desarrollada para comprender y explorar el manejo de las APIs de Sharetribe dentro de un e-commerce customizado. El objetivo principal de este proyecto es integrar de manera efectiva las funcionalidades de Sharetribe en un sistema de administración de listados, usuarios y transacciones, todo dentro de una aplicación que se adapta tanto a dispositivos móviles como de escritorio.

Objetivo
El propósito de esta prueba de concepto es servir como guía para futuras implementaciones de la API de Sharetribe, permitiendo comprender cómo interactuar con las APIs de Sharetribe Flex para obtener y mostrar datos como listados, usuarios y transacciones. Esta guía será útil para proyectos que necesiten integrar Sharetribe con otras soluciones e-commerce personalizadas.

**Tecnologías Utilizadas**
* React (Frontend)
* Axios (Para realizar las peticiones HTTP a la API de Sharetribe)
* Tailwind CSS (Para el diseño responsivo y moderno)
* React Router DOM (Para la navegación entre vistas)
* Sharetribe Flex API (Para la integración y consulta de datos)

**Instalación**
Clonar el Repositorio
Para comenzar, clona este repositorio en tu máquina local:

git clone https://github.com/ymanoel/rentalo-admin-dashboard.git
cd rentalo-admin-dashboard

Instalar Dependencias
Usa Yarn para instalar las dependencias del proyecto:
yarn install
Configuración del Proyecto
Asegúrate de tener las siguientes variables de entorno configuradas en tu archivo .env:
REACT_APP_SHARETRIBE_CLIENT_ID=your_client_id
REACT_APP_SHARETRIBE_CLIENT_SECRET=your_client_secret

**Características**
* Dashboard
* Visualización de los listados disponibles.
* Visualización de los usuarios registrados en el sistema.
* Visualización de las transacciones realizadas.
* Responsividad

**Puntos Finales Importantes:**
La autenticación con la API de Sharetribe se maneja mediante OAuth2 utilizando el Client ID y el Client Secret proporcionados por Sharetribe.
Los datos de los listados, usuarios y transacciones se muestran en tablas, con soporte para filtros y manejo de errores adecuado.

**Futuras Implementaciones**
Aunque esta prueba de concepto se centra únicamente en la visualización de datos, el código puede servir como base para la implementación de funcionalidades adicionales, como la edición de listados, usuarios y transacciones.

**Se pueden agregar funcionalidades adicionales como:**

Filtrar y ordenar los datos mostrados.
Soporte de paginación para grandes cantidades de datos.
Administración completa de usuarios (creación, edición, eliminación).
