import LoaderController from "./controllers/LoaderController.js"
import MessageController from "./controllers/MessageController.js"
import ListOfItemsController from "./controllers/ListOfItemsController.js"
import SearchController from "./controllers/SearchController.js"
import NavbarController from "./controllers/NavbarController.js"
import DataService from "./services/DataService.js"
import FilterController from "./controllers/FilterController.js"



window.addEventListener('DOMContentLoaded', () => {

    let page = new URLSearchParams(window.location.search).get('page')
    if (!page) {
        page = '1'
    }


    const navbar = document.querySelector('.navbar')
    const navbarController = new NavbarController(navbar)

    if (DataService.isAuth()) {
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


