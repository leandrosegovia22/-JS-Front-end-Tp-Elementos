window.addEventListener('load', () => {
//*Capturo los elementos

let h2 = document.getElementById('subtitulo');
let a= document.getElementById('link');
let p= document.querySelectorAll('p');
let main = document.querySelector('.container');

//*Agrego el nombre
let nombre= prompt('Ingrese su nombre:')
//Agrego el nombre al titulo
if(nombre){
  h2.innerText += ' '+ nombre
}else{
  h2.innerText += ' Invitado'
}
//Cambio estilos a los elementos
  h2.style.textTransform='uppercase'

  a.style.color = "#E51B3E"
  
//Confirmo el fondo
  let fondo= confirm('¿Deseas colocar un fondo de pantalla?')
//Si confirma agrego la clase fondo al body
  if(fondo){
    document.querySelector('body').classList.add('fondo')
  }else{
    document.querySelector('body').classList.add(null)
  }

//Capturo las p y las separo

  for (let i = 0; i < p.length; i++) {
    if (i % 2 == 0) {
      p[i].classList.add('destacadoPar');
    } else {
      // es impar
      p[i].classList.add('destacadoImpar');
    }
  }

//Hago visible el contenedor padre
main.display='block'
})