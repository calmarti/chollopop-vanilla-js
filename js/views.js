
export function loaderView() {
  return `
<div class="spinner-border text-primary" role="status">
</div>
`
}

export function errorView(error) {
  return `
    <div id="error" class="alert alert-danger" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    <span>Error: ${error}</span>
    <button type="button" class="btn btn-close" aria-label="Close"></button>
    </div>
    `
}


export function successView(success) {
  return `
  <div id="success" class="alert alert-success" role="alert">
   <span>${success}</span>
  <button type="button" class="btn btn-close" aria-label="Close"></button>
  </div>
  `
}

export function homeEmptyView(message){
  return `
  <div id="home-empty" class="alert alert-dark" role="alert">
  <span>${message}</span>
  <button type="button" class="btn btn-close" aria-label="Close"></button>
  </div>`
}

export function detailEmptyView(message) {
  return `
  <div id="detail-empty" class="alert alert-dark" role="alert">
  <span>${message}</span>
  <button type="button" class="btn btn-close" aria-label="Close"></button>
  </div>`
   
}


export function itemView(item) {
  return `
<div class="card col-6">
<a id="link-to-detail" href="/detail.html?id=${item.id}">
  <img src="${item.picture}" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h3 class="card-title">
    <strong>${item.name}</strong>
    </h3>
    <br/>
    <h3 class="card-text text-end">${item.price}€</h3>
    <a href="/detail.html?id=${item.id}>
    <h3 class="card-text"><strong>${item.buyorsale}</strong></h3>
    <h4 class="card-text text-center">${item.tag}</h4>
    </a>
  </div>
</div>
</a>`

}


export function itemDetailView(item) {

  let editButton = ''
  let deleteButton = ''

  if (item.isItemCreator) {
    editButton = `<button class="edit-button btn btn-primary">Modificar</button>`
    deleteButton = `<button class="delete-button btn btn-danger">Borrar</button>`
  }

  return `
  <div class="card col-4" style="">
  <img src="${item.picture}" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h2 class="card-title">
    <strong>${item.name}</strong></h3>
    <br/>
    <h3 class="card-text text-end">${item.price}€</h3>
    <h3 class="card-text">${item.buyorsale}</h3>
    <h4 class="card-text text-center">${item.tag}</h4>
    ${editButton}
    ${deleteButton}  
  </div>
  </div>
  `
}

export function navbarView() {
  return `
    <a class="navbar-brand" href="/">Logo de Chollopop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <div class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Novedades</a>
                    </li>

                </div>

                <form class="d-flex container">

                  <input id="search" name="search" class="form-control me-3" type="search" placeholder="Busca tu artículo" aria-label="Search">
                                      
                  <select id="filter" name="filter" class="form-select form-select-lg mx-3" aria-label=".form-select-lg example">
                    <option value="" selected>Categorías</option>
                    <option value="Hogar">Hogar</option>
                    <option value="Oficina">Oficina</option>
                    <option value="Ropa y calzado">Ropa y calzado</option>
                    <option value="Moviles">Móviles</option>
                    <option value="Informatica y electronica">Informática y electrónica</option>
                    <option value="Entretenimiento">Entretenimiento</option>
                    <option value="Otros">Otros</option>
                  </select>
                  
               
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a id="first-button" href="/login.html" class="btn btn-primary btn-lg me-md-2 text-nowrap" 
                            role="button">Iniciar sesión</a>
                        <a id="second-button" href="/signup.html" class="btn btn-primary btn-lg text-nowrap" type="button" role="button">Regístrate</a>
                    </div>
                </form>`
}

export function paginationBarView() {
return `
  <ul class="pagination">
  <li class="page-item">
      <a class="page-link" href="" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
      </a>
  </li>
  <li class="page-item"><a class="page-link" href="/?page=1">1</a></li>
  <li class="page-item"><a class="page-link" href="/?page=2">2</a></li>
  <li class="page-item"><a class="page-link" href="/?page=3">3</a></li>
  <li class="page-item"><a class="page-link" href="/?page=4">4</a></li>
  <li class="page-item"><a class="page-link" href="/?page=5">5</a></li>
  <a class="page-link" href="" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
  </a>
  </li>
</ul>
</nav>`

}
