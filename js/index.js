import ListOfItemsController from "./controllers/ListOfItemsController.js"

window.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.list')
    new ListOfItemsController(list)


})