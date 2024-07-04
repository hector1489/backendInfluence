# Influence Backend

Este es un backend básico utilizando Express.js y PostgreSQL como base de datos.

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos en tu entorno de desarrollo:

 *Node.js
 *PostgreSQL
 *Un editor de texto o un IDE para codificar

## Configuración Inicial

Clona este repositorio en tu máquina local utilizando el siguiente comando:

  ```bash
  git clone https://url-de-tu-repositorio.git

  ```

En el directorio del proyecto, instala las dependencias necesarias utilizando npm:

  ```bash
  npm install

  ```

Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:

  ```bash
  DB_USER=tu_usuario_de_postgresql
  DB_HOST=tu_host_de_postgresql
  DB_DATABASE=nombre_de_tu_base_de_datos
  DB_PASSWORD=contraseña_de_tu_base_de_datos
  DB_PORT=puerto_de_tu_base_de_datos (por defecto, 5432)

  ```

## Ejecución

Para iniciar el servidor, utiliza el siguiente comando:

  ```bash
  npm start

  ```

El servidor se ejecutará en el puerto especificado en tu archivo .env o en el puerto 3000 por defecto.

## Endpoints Disponibles

Registro de Usuarios

-URL: /api/register
-Método HTTP: POST
-Body JSON Esperado:

  ```bash
    {
      "name": "Nombre del Usuario",
      "direction": "Dirección del Usuario",
      "email": "Correo Electrónico del Usuario",
      "instagram": "Nombre de Usuario en Instagram"
    }
  ```


Respuesta Exitosa: Código de Estado 201 (Created):

  ```bash
    {
      "id": ID del Usuario Creado,
      "name": "Nombre del Usuario",
      "direction": "Dirección del Usuario",
      "email": "Correo Electrónico del Usuario",
      "instagram": "Nombre de Usuario en Instagram"
    }
  ```

-Errores Posibles:

  Código de Estado 400 (Bad Request) si falta algún campo en el cuerpo de la solicitud.
  Código de Estado 500 (Internal Server Error) si ocurre un error interno en el servidor.


Pagos con Transbank

-URL: /api/payments/transbank
-Método HTTP: POST

-Body JSON Esperado:

  ```bash
    {
      // Datos del Pago con Transbank
    }
  ```

-Respuesta Exitosa: Código de Estado 200 (OK):

  ```bash
    {
      "message": "Transbank payment processed"
    }
  ```


Pagos con Mercado Pago

-URL: /api/payments/mercadopago
-Método HTTP: POST

-Body JSON Esperado:

  ```bash
    {
      // Datos del Pago con Mercado Pago
    }
  ```


-Respuesta Exitosa: Código de Estado 200 (OK):

  ```bash
    {
      "message": "Mercado Pago payment processed"
    }
  ```

