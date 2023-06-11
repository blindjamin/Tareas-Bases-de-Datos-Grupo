## Instalación de dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```shell
npm install

```

# Migración de la base de datos con PRISMA

Para migrar el esquema ORM a un modelo de base de datos, asegúrate de tener una base de datos creada en PostgreSql 15. Luego, realiza los siguientes pasos:

1.- Cambia el nombre del archivo '.example.env' a '.env'
2.- Dentro del archivo .env, asegúrate de configurar correctamente los parámetros necesarios para la conexión a la base de datos.
3.-Ejecuta el siguiente comando en la consola para realizar la migración:

```shell
npx prisma migrate dev
```
# Ejecución del proyecto
Para ejecutar el proyecto, utiliza el siguiente comando en la consola:

```shell
npm run dev
```

# Requisitos adicionales
Para el correcto funcionamiento de la aplicación, se requiere lo siguiente:

1.-Base de datos: Debes tener una base de datos creada en PostgreSql 15 para que la aplicación funcione correctamente. Asegúrate de configurar adecuadamente los parámetros de conexión en el archivo .env.

2.-Postman: Se recomienda tener una cuenta en Postman para poder interactuar con la API y probar sus funcionalidades.
