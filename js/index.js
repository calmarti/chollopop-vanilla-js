import LoaderController from "./controllers/LoaderController.js"
import MessageController from "./controllers/MessageController.js"
import ListOfItemsController from "./controllers/ListOfItemsController.js"
import SearchController from "./controllers/SearchController.js"
import NavbarController from "./controllers/NavbarController.js"
import DataService from "./services/DataService.js"
import FilterController from "./controllers/FilterController.js"



//TODO:
//Terminar de consumir el NavbarController
//Si hay tiempo poner labels en los controles y demás temas de accesibilidad (section tags, main, etc.)
//Si hay tiempo cambiar la typografy de bootstrap con una SASS

//TODO: para fijar la navbar incluir la clase "fixed-top" y probar que no machaque nada
//OPCIONALES: 

//TODO: Gestionar la paginación de anuncios en el listado, ya que por defectojson-server sólo devuelve 10 elementos
//TODO: Permitir el filtrado de anuncios usando tags. Por lo que en el formulario de anuncio deberán poder incluirse tags de los mismos.
//TODO: Si hay tiempo mejorar el full-text search metiendole un keyword regex

//TODO: la navbar machaca el mensaje de éxito (y quizás los de error también) al menos en newitem.html, arreglar bajando con estilos css o modal

window.addEventListener('DOMContentLoaded', () => {
    
    const page = new URLSearchParams(window.location.search).get('page')
    
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
    new ListOfItemsController(list /*search*/)
    
    


})