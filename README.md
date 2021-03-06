# Frontend de tienda de artículos de segunda mano 'Chollopop'

Este proyecto simula el frontend de una web de artículos de segunda mano utilizando únicamente HTML, CSS y vanilla Javascript 

---

**Estilos CSS utilizados**

Bootstrap 5.1.3

Otros estilos en el fichero **style.css**

---

**Requisitos**

Se asume la instalación previa de:

-Node

-Sparrest.js (simulador de backend basado en json-server)

```
https://github.com/kasappeal/sparrest
```
---

**Iniciar la aplicación**

Copiar el fichero **db.json** en la raiz del directorio donde se encuentra instalado sparrest.js

Desde una consola de comandos arrancar el simulador de backend en el puerto 8000:

```
npm start
```

Abrir un navegador en: 
```
http://127.0.0.1:3000
```
---

### Notas de interés ###

**Modificar o borrar anuncios**

Para modificar o borrar algún anuncio **ya existente** de la lista en db.json debe accederse con el usuario por defecto: 
```
username: ivan, password: 123
```
Alternativamente puede crearse un usuario, iniciar sesión, crear un nuevo anuncio y finalmente modificarlo o borrarlo. 

**Estado de carga:** 

En las páginas de login y registro el estado de carga corresponde al momento en que se envían los datos al backend. 

En ambas páginas se intentó extender esta definición a la carga de la página en sí, pero no fue posible. 

**Creación de un anuncio**

Tras la creación de un anuncio se desactiva el botón (submit) para evitar repetir la misma petición. 
Por tanto, para crear un segundo anuncio es necesario refrescar la página. 


**Paginación**

Cada página tiene 9 anuncios.

Los elementos 'avanzar' y 'regresar' están maquetados pero su funcionalidad no fue incluida.  

**Filtro por tags**

El filtro por tags o categorías fue implementado con un elemento *select* en la barra de navegación

**Campos vacíos al crear o editar un anuncio**

La variable string con el mensaje de error al dejar varios campos vacíos no reconoce el caracter de salto de línea ```\n```. 
