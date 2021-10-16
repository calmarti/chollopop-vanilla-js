# Frontend de tienda de artículos de segunda mano 'Chollopop'

Este proyecto simula el frontend de una web de artículos de segunda mao utilizando únicamente html, css y vanilla javascript 

**Requisitos**

Se asume la instalación previa de node y sparrest.js:

```
https://github.com/kasappeal/sparrest
```

**Iniciar la aplicación**

Copiar el fichero **db.json** en la raiz del directorio donde se encuentra instalado sparrest.js

Arrancar el simulador de backend en el puerto 8000:

```
npm start
```

Abrir el navegador en: 
```
http://127.0.0.1:3000
```

**Estilos CSS**

Bootstrap 5.1.3

### Notas de interés ###

**Estado de carga:** 

En las páginas de login y registro el estado de carga corresponde al envío de datos al backend. 

En ambas páginas se intentó incluir en esta definición la carga de la página en sí, pero no fue posible. 

**Creación de un anuncio**

Tras la creación de un anuncio se desactiva el botón (submit) para evitar repetir la misma petición. Por tanto, para crear un segundo anuncio es necesario refrescar la página. 


**Paginación**

Cada página tiene 9 anuncios.

Los elementos 'avanzar' y 'regresar' están maquetados pero su funcionalidad no fue incluida.  

**Filtro por tags**

El filtro por tags o categorías fue implementado con un elemento *select* en la barra de navegación

**Script de js de bootstrap**

El script ```bootstrap.bundle.min.js``` está incluido pero "comentado" para evitar una posible interferencia con el código javascript de la aplicación. 

