import LoaderController from "./controllers/LoaderController.js"
import MessageController from "./controllers/MessageController.js"
import ListOfItemsController from "./controllers/ListOfItemsController.js"
import SearchController from "./controllers/SearchController.js"
import NavbarController from "./controllers/NavbarController.js"
import DataService from "./services/DataService.js"
import FilterController from "./controllers/FilterController.js"


//TODO: Crear el json con 30 - 40 artículos con todos sus campos llenos, ponerle el atributo userId a todos los anuncios por defecto (dejar un usuario 'ivan' y asignarle todos los anuncios)

//TODO: Intentar que arroje en login: "Wrong user/password" en lugar de  "Unauthorized" y en signup: "Bad request" en vez de "Username taken"

//TODO: Decidir si meto o no validación de minlength en campo contraseña y decidir validación de price como número

//TODO: VOLVER A LEER EL ENUNCIADO por si me he dejado algo!

//TODO: para el README:
//en general, meter los cabos sueltos para dejar constancia que soy consciente de ellos
//aclarar que tanto en login como en signup el loader solo se muestra al refrescar, no al aterrizar desde el home (u otra pág) 
//aclarar que al crear un anuncio el botón se desabilita para repetir el mismo post, por tanto hay que refrescar la pág para crear otro anuncio.

//TODO: asegurarse de que los values de los tags son idénticos (inicial en mayúsculas) tanto en el dB.json, como en el HTML como en el resto del código.

//TODO: limpiar todo el código (¡no ser exhaustivo!)


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

    const loader = document.querySelector('.loader-container-home')
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