import LoaderController from "./controllers/LoaderController.js"
import MessageController from "./controllers/MessageController.js"
import ListOfItemsController from "./controllers/ListOfItemsController.js"
import SearchController from "./controllers/SearchController.js"
import NavbarController from "./controllers/NavbarController.js"
import DataService from "./services/DataService.js"
import FilterController from "./controllers/FilterController.js"



//TODO: estética y cosas menores
//Logo de Chollopop
//evitar que el contenido del Home 'baile'!
//eliminar menú de filtros de todas las páginas distintas al Home
//Terminar de consumir el NavbarController
//Si hay tiempo poner labels en los controles y demás temas de accesibilidad (section tags, main, etc.)
//Si hay tiempo cambiar la typografy de bootstrap con SASS

//TODO: para el README:
//en general, meter los cabos sueltos para dejar constancia que soy consciente de ellos
//aclarar que al crear un anuncio el botón se desabilita para repetir el mismo post, por tanto hay que refrescar la pág para crear otro anuncio.
//TODO: Decidir si meto o no validación de minlength en campo contraseña
//TODO: Arreglar mensajes de error y éxito en TODAS las páginas (que no los machaque la navbar u otro elemento), darles estilo con los alert de Bootstrap
//TODO: CRUCIAL: Mejorar método escapeHTML y hacer pruebas en todos los formularios que están blindados contra el HTML injection
//TODO: Crear el json con 30 - 40 artículos con todos sus campos llenos, ponerle el atributo userId a todos los anuncios por defecto (dejar un usuario 'ivan' y asignarle todos los anuncios)
//TODO: ¿meter el _expand en las URL aunque no me haga falta?
//TODO: Hacer dinámico el filtrado por tags  
//TODO: Paginación: faltaría 'anterior', 'siguiente', 'primero' y 'último' y tal vez limitar a un número necesario para que no hayan 'huecos' en la pantalla

//TODO: la navbar machaca el mensaje de éxito (y quizás los de error también) al menos en newitem.html, arreglar bajando con estilos css o modal

window.addEventListener('DOMContentLoaded', () => {

    let page = new URLSearchParams(window.location.search).get('page')
    if (!page){
        page = '1'
    }
    
    
    const navbar = document.querySelector('.navbar')
    const navbarController = new NavbarController(navbar)
    
    if (DataService.isAuth()){
        navbarController.changeButtons()
    }

    const loader = document.querySelector('.loader-container')
    new LoaderController(loader)
    
    const message = document.querySelector('.message-container')
    new MessageController(message)    
      
    const search = document.querySelector('#search')
    new SearchController(search)  

    const filter = document.querySelector('#filter')
    new FilterController(filter)

    const list = document.querySelector('.list-of-items')
    new ListOfItemsController(list, page)
    
    
    


})