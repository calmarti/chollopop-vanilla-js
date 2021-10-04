export function itemView(item){
return `
<div class="card column">

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
        ${item.name}
      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
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


