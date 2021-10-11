import LoaderController from "./controllers/LoaderController.js"
import MessageController from "./controllers/MessageController.js"
import ListOfItemsController from "./controllers/ListOfItemsController.js"
import SearchController from "./controllers/SearchController.js"
import NavbarController from "./controllers/NavbarController.js"
import DataService from "./services/DataService.js"

//TODO:
//Terminar de consumir el NavbarController

//OPCIONALES: 

//Terminar la funcionalidad de full-text search
//Gestionar la paginación de anuncios en el listado, ya que por defectojson-server sólodevuelve 10 elementos
//Permitir el filtrado de anuncios usando tags. Por lo que en el formulario de anuncio deberánpoder incluirse tags de los mismos.


window.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('.navbar')
    const navbarController = new NavbarController(navbar)
    
    if (DataService.isAuth()){
        navbarController.renderAuthNavbar()
    }

    const loader = document.querySelector('.loader-container')
    new LoaderController(loader)
    
    const message = document.querySelector('.message-container')
    new MessageController(message)    
      
    const search = document.querySelector('#search')
    new SearchController(search)  

    const list = document.querySelector('.list-of-items')
    new ListOfItemsController(list /*search*/)
 

})