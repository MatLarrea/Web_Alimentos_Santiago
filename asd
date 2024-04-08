<body style="background-color: rgb(48, 29, 29);">
  <!--Navbar-->
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark" style="margin: 0%;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo" src="imagenes//EL COMILON.png" alt="el comilon">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active, navbar-text" aria-current="page" href="#">Promociones</a>
          <a class="nav-link, navbar-text" href="#">Menús</a>
          <a class="nav-link, navbar-text" href="#">Proveedores</a>
          
        </div>
      </div>
  
  </nav>
<div class="contenedor"></div>
  <div id="productos">
    <h2 style="color: white; margin-left: 40px;">Productos</h2>
    <div class="producto-contenedor">
        <div class="producto">
            <img src="imagenes/pizza.jpg" alt="Producto 1" class="imagen-producto">
            <div class="contenido-producto">
              <h3 style="color: white;">Producto 1</h3>
                <p style="color: white;">Precio: $9.999</p>
                <div class="botones">
                    <button class="eliminar">Eliminar</button>
                    <div class="cantidad">
                        <button class="restar">-</button>
                        <input type="text" value="1" class="cantidad-input">
                        <button class="sumar">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="producto-contenedor">
        <div class="producto">
            <img src="imagenes/pizza.jpg" alt="Producto 2" class="imagen-producto">
            <div class="contenido-producto">
              <h3 style="color: white;">Producto 2</h3>
              <p style="color: white;">Precio: $9.999</p>
                <div class="botones">
                    <button class="eliminar">Eliminar</button>
                    <div class="cantidad">
                        <button class="restar">-</button>
                        <input type="text" value="1" class="cantidad-input">
                        <button class="sumar">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="producto-contenedor">
        <div class="producto">
            <img src="imagenes/pizza.jpg" alt="Producto 3" class="imagen-producto">
            <div class="contenido-producto">
                <h3 style="color: white;">Producto 3</h3>
                <p style="color: white;">Precio: $9.999</p>
                <div class="botones">
                    <button class="eliminar">Eliminar</button>
                    <div class="cantidad">
                        <button class="restar">-</button>
                        <input type="text" value="1" class="cantidad-input">
                        <button class="sumar">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="carrito" style="margin-left: 400px;">
    <h2 style="color: white;">Total</h2>
    <h2 style="color: white;">$9.999</h2>
    <a href="#" class="btn btn-danger">Confirmar compra</a>
</div>

<div>
  <h3 style="color: white; margin-left: 40px;">Otros clientes también compraron:</h3>
<div class="card2">
  <img src="imagenes/pizza.jpg" class="card-img-top" alt="pizza">
  <div class="card-body">
      <h5 class="card-title">Producto 1</h5>
      <p class="card-text">Descripción:</p>
      <p class="card-text">Precio:$9.999</p>
      <a href="#" class="btn btn-danger">Añadir al carrito</a>
  </div>
</div>
</div>