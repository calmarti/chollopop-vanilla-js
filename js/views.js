
export function errorView(error) {
  return `
    <div>
    Error: ${error}
    <button>Cerrar</button>
    </div>
    `
}

export function successView(success) {
  return `
  <div>
  ${success}
  <button>Cerrar</button>
  </div>
  `
}

export function loaderView() {
  return `
<div class="spinner-border text-primary" role="status">
</div>
`
}

export function emptyView(message) {

  return `
<div>${message}
<button>Cerrar</button>
</div>
`
}

export function itemView(item) {
  return `
<div class="card col-6">
<a id="link-to-detail" href="/detail.html?id=${item.id}">
  <img src="http://lorempixel.com/400/200" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h3 class="card-title">
    <strong>${item.name}</strong>
    </h3>
    <br/>
    <h3 class="card-text text-end">${item.price}€</h3>
    <a href="/detail.html?id=${item.id}>
    <h3 class="card-text"><strong>${item.buy_or_sale}</strong></h3>
    <h4 class="card-text text-center">${item.tag}</h4>
    </a>
  </div>
</div>
</a>

`

}

//  <a href="/detail.html?id=${item.id}>


export function itemDetailView(item) {

  if (item.empty) {
    return `
    <strong>El anuncio que buscas no existe</strong>
  `
  }

  let editButton = ''
  let deleteButton = ''

  if (item.isItemCreator) {
    editButton = `<button class="edit-button btn btn-primary">Modificar</button>`
    deleteButton = `<button class="delete-button btn btn-danger">Borrar</button>`
  }

  return `
  <div class="card col-8" style="">
  <img src="http://lorempixel.com/400/200" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h2 class="card-title">
    <strong>${item.name}</strong></h3>
    <br/>
    <h3 class="card-text text-end">${item.price}€</h3>
    <h3 class="card-text">${item.buy_or_sale}</h3>
    <h4 class="card-text text-center">${item.tag}</h4>
    ${editButton}
    ${deleteButton}  
  </div>
  </div>
  `
}

export function navbarView() {
  return `
    <a class="navbar-brand" href="#">Logo de Chollopop</a>
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

                  <input id="search" name="search" class="form-control me-3" type="search" placeholder="Buscar artículo" aria-label="Search">
                                      
                  <select id="filter" name="filter" class="form-select form-select-lg mx-3" aria-label=".form-select-lg example">
                    <option value="reset" selected>Categorías</option>
                    <option value="hogar">Hogar</option>
                    <option value="oficina">Oficina</option>
                    <option value="ropa y calzado">Ropa y calzado</option>
                    <option value="moviles">Móviles</option>
                    <option value="informatica">Informática</option>
                    <option value="entretenimiento">Entretenimiento</option>
                    <option value="otros">Otros</option>
                  </select>
                  
               
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a id="first-button" href="/login.html" class="btn btn-primary btn-lg me-md-2 text-nowrap" 
                            role="button">Iniciar sesión</a>
                        <a id="second-button" href="/signup.html" class="btn btn-primary btn-lg text-nowrap" type="button" role="button">Regístrate</a>
                    </div>
                </form>`
}


/* 
export  function paginationView (){
  return `
 
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`

} */



//<button class="btn btn-outline-success btn-lg me-md-2" type="submit">Buscar</button>

//<div class="container-fluid">
//</div>