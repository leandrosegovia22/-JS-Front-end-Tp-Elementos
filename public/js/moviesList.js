window.addEventListener('load',()=>{
  let body = document.getElementById('lista');
  let titulo = document.querySelector('.moviesListTitulo');

let modoOscuro= prompt('¿Desea el modo oscuro?')

if(modoOscuro){
  body.style.backgroundColor = '#7f7f7f'
  body.classList.add('fondoMoviesList')

  titulo.innerText='LISTADO DE PELICULAS'
  titulo.style.color='white'
  titulo.style.backgroundColor='teal'
  titulo.style.padding='20px'  
}
})