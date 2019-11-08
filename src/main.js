import POTTER from './data/potter/potter.js';
import { filter } from './data.js';
// declarando mis variables
const vista2 = document.querySelector('#vista2');
const datosPersonaje = document.querySelector('#datosPersonaje');
const vista1 = document.getElementById('vista1');
const varitas = document.querySelector('#btnvaritas');
const patronum = document.querySelector('#btnpatronum');
const vista3 = document.querySelector('#vista3');
const vista4 = document.querySelector('#vista4');
const btnestudiantes = document.querySelector('#estudiantes');
const btnprofesores = document.querySelector('#profesores');
const btnpersonajes = document.querySelector('#btnpersonajes');
const btnsly = document.querySelector('#sly');
const btnhuffle = document.querySelector('#huffle');
const btnraven = document.querySelector('#raven');
const btngry = document.querySelector('#gry');
const roles = document.querySelector('#roles');
const casas = document.querySelector('#casas');

// Appenchild
const containerImage = (data) => {
  const sectionElement = document.createElement('section'); // creando sección de datos
  sectionElement.innerHTML = `
  <section class ="ordenar">
  <img class = "imagen" src= ${data.image}>
  <p id="nombre"> ${data.name} </p>
  </section>
  `;
  sectionElement.addEventListener('click', (event) => {
    event.preventDefault();
    vista2.classList.add('hide');
    roles.classList.add('hide');
    btngry.classList.add('hide');
    btnsly.classList.add('hide');
    btnhuffle.classList.add('hide');
    btnraven.classList.add('hide');
    datosPersonaje.classList.remove('hide');
    datosPersonaje.innerHTML = `
    <section class="ordenar1">
    <img class ="imagen1" src= ${data.image}>
    <ul class ="todos">
    <li id="name">Nombre: ${data.name}</li>
    <li>Species: ${data.species}</li>
    <li>Gender: ${data.gender}</li>
    <li>House: ${data.house}</li>   
    <li>Date Of Birth: ${data.dateOfBirth}</li>  
    <li>Year Of Birth: ${data.yearOfBirth}</li>    
    <li>Ancestry: ${data.ancestry}</li>    
    <li>Eye colour: ${data.eyeColour}</li>   
    <li>Hair Colour: ${data.hairColour}</li>   
    <li>Actor: ${data.actor}</li>    
    </ul>
    </section>
    `;
  });

  vista2.appendChild(sectionElement);
  // añade un hijo más, no borra nada como el innerHTML
};


for (let i = 0; i < POTTER.length; i += 1) {
  containerImage(POTTER[i]);
}

// data = POTTER[i] <- argumento

// empezando mis eventos
btnpersonajes.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista2.classList.remove('hide');
  roles.classList.remove('hide');
  casas.classList.remove('hide');
  btngry.classList.remove('hide');
  btnsly.classList.remove('hide');
  btnhuffle.classList.remove('hide');
  btnraven.classList.remove('hide');
});

// Funcion ocultar para boton varitas
varitas.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista3.classList.remove('hide');
});

// Funcion ocultar para boton patronum
patronum.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista4.classList.remove('hide');
});
btngry.addEventListener('click', (event) => {
  event.preventDefault();
  vista2.innerHTML = ''; // porque ya está creada la función.
  const filterHouseGry = filter(POTTER, 'house', 'Gryffindor');
  for (let i = 0; i < filterHouseGry.length; i += 1) {
    containerImage(filterHouseGry[i]);
  }
});
btnsly.addEventListener('click', (event) => {
  event.preventDefault();
  vista2.innerHTML = '';
  const filterHouseSly = filter(POTTER, 'house', 'Slytherin');
  for (let i = 0; i < filterHouseSly.length; i += 1) {
    containerImage(filterHouseSly[i]);
  }
});
btnhuffle.addEventListener('click', (event) => {
  event.preventDefault();
  vista2.innerHTML = '';
  const filterHouseHuffle = filter(POTTER, 'house', 'Hufflepuff');
  for (let i = 0; i < filterHouseHuffle.length; i += 1) {
    containerImage(filterHouseHuffle[i]);
  }
});
btnraven.addEventListener('click', (event) => {
  event.preventDefault();
  vista2.innerHTML = '';
  const filterHouseRaven = filter(POTTER, 'house', 'Ravenclaw');
  for (let i = 0; i < filterHouseRaven.length; i += 1) {
    containerImage(filterHouseRaven[i]);
  }
});

btnestudiantes.addEventListener('click', (event) => {
  event.preventDefault();
  vista2.innerHTML = '';
  const filterEstudiantes = filter(POTTER, 'hogwartsStudent', false);
  for (let i = 0; i < filterEstudiantes.length; i += 1) {
    containerImage(filterEstudiantes[i]);
  }
});
btnprofesores.addEventListener('click', (event) => {
  event.preventDefault();
  vista2.innerHTML = '';
  const filterProfesores = filter(POTTER, 'hogwartsStaff', false);
  for (let i = 0; i < filterProfesores.length; i += 1) {
    containerImage(filterProfesores[i]);
  }
});

/*
console.log(POTTER)
*/
