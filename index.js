var navbar = document.querySelector('.header');

 navbar.innerHTML = 

 `<nav class="navbar navbar-expand-sm bg-dark navbar-dark" style="margin: 0%;">
 <div class="container-fluid ">
     <a class="navbar-brand" href="index.html">
         <img class="logo" src="imagenes/EL COMILON.png" alt="el comilon">
     </a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
         aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
         <div class="navbar-nav">
             <a class="nav-link active, navbar-text" aria-current="page" href="#">Promociones</a>
             <a class="nav-link, navbar-text" href="ventanamenus.html">Menús</a>
             <a class="nav-link, navbar-text" href="#">Proveedores</a>
             <a class="nav-link, navbar-text" href="ingresarusuario.html">Ingresar</a>
         </div>
     </div>
     <!--Div Icono Home -->
     <div class="d-flex iconos">
       <a href="index.html" class="icono-home">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
           class="bi bi-house-door" viewBox="0 0 16 16">
           <path
               d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
       </svg>
   </a>
   <div class="icono-search">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
           class="bi bi-search" viewBox="0 0 16 16">
           <path
               d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
       </svg>   
   </div>
   <a href="carro.html" class="icono-shoppingcart">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
         <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
       </svg>
   </a>
   <!--fin Div Icono shopping cart -->
</div>
 </div>
</nav>`;


fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(response => response.json())
.then(data => {

    // ver como viene la data desde la api en la consola del navegador 
    console.log(data.categories);

    //obtener el id de html ( div container)
    var container = document.getElementById("container");

    for (let i = 0; i < data.categories.length; i++ ){
        var category = data.categories[i];

        const div = document.createElement("div");
        const conte = document.createElement("div");
        div.classList.add("card");
        div.classList.add("img-fluid");
        div.innerHTML = `
              <img class="card-img-top" src="${category.strCategoryThumb}" alt="Card">
              <div class="card-img-overlay">
                <h4 class="card-title">${category.strCategory}</h4>
                <p class="card-text">${category.strCategoryDescription}</p>
              </div>`;
        conte.appendChild(div);
        container.appendChild(conte);
    }
})
