import POTTER from './data/potter/potter.js';

import { mostrar } from './data.js';

const personajes= document.querySelector(' #personajes');
let vistaPersonajes = '';
for (let i = 0; i < POTTER.length; i++) {
  vistaPersonajes += `
  <div class = "lisPersonajes">
  <img class =" imagen" src= ${POTTER[i].image}>
  <div> ${POTTER[i].name} </div>
  
  
  </div>
  `;
  personajes.innerHTML = vistaPersonajes;
}
console.log(mostrar);
console.log(POTTER);

const btnpersonajes = document.querySelector( '#btnpersonajes');
const btnvaritas = document.querySelector( '#btnvaritas');
const btnpatronun = document.querySelector( '#btnpatronun');
const vista1 = document.querySelector( '#vista1');
const vista3 = document.querySelector( '#vista3');

btnpersonajes.addEventListener("click", (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  personajes.classList.remove('hide');
});

