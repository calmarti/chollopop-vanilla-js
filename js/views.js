
export function itemView(item){
return `

<div class="card col-3" style="">
<a href="/detail.html?id=${item.id}">
  <img src="http://lorempixel.com/400/200" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h5 class="card-title">
    <strong>${item.name}</strong></h5>
    <p class="card-text">${item.price}€</p>
    <a href="/detail.html?id=${item.id}" class="btn btn-primary"> ${item.buysale}</a>
  </div>
</div>
</a>
`

}


export function errorView(error){
    return `
    <div>
    Error: ${error}
    <button>Cerrar</button>
    </div>
    `
}

export function successView(success){
  return `
  <div>
  ${success}
  <button>Cerrar</button>
  </div>
  `
}

export function loaderView(){
return `
<span class="loader"></span>
`
}

export function emptyView(message){
  //TODO: renderizar el estado vacío con clases de bulma
return `
<div>${message}
<button>Cerrar</button>
</div>
`
}

export function itemDetailView(item){
  if (item==={}){
    return`
    <strong>El anuncio que buscas no existe</strong>
  `
  }
  let button = ''
  if (item.canBeDeleted){
      button = `<button>Borrar</button>`
      }
   
 
  return `
  <div class="card col-3" style="">
  <img src="http://lorempixel.com/400/200" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h5 class="card-title">
    <strong>${item.name}</strong></h5>
    <p class="card-text">${item.price}€</p>
    <a href="detail.html" class="btn btn-primary"> ${item.buysale}</a>
    ${button}  
  </div>
  </div>
`
}