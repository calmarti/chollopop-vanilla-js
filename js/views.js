
export function itemView(item){
return `
<div class="card column is-3">

<header class="card-header">
  <p class="card-header-title">
    Card header
  </p>
  <button class="card-header-icon" aria-label="more options">
    <span class="icon">
      <i class="fas fa-angle-down" aria-hidden="true"></i>
    </span>
  </button>
</header>

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="http://lorempixel.com/400/200" alt="Placeholder image">
    </figure>
  </div>
</div>

<div class="card">
  <div class="card-content">
    <div class="content">
        <strong>${item.name}</strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${item.price}€
        
    </div>
  </div>
</div>

<div class="card">
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>

</div>`

}

export function errorView(error){
    return `
    <div>
    Hubo un error: ${error}
    <button>Cerrar</button>
    </div>
    `
}

export function successView(error){
  return `
  <div>
  ${sucesss}
  <button>Cerrar</button>
  </div>
  `
}

export function loaderView(){
return `
<span class="bulma-loader-mixin"></span>
`
}

