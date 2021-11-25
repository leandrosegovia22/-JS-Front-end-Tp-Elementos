window.addEventListener('load',()=>{
  let seccion = document.getElementById('formulario');
  let titulo = document.querySelector('.moviesAddTitulo');
  let articulo = document.querySelector('article');

  titulo.innerText='AGREGAR PELICULAS';
  titulo.classList.add('titulo');

  articulo.classList.add('fondoTransparente');

  seccion.classList.add('fondoCRUD');

})