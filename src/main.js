import POTTER from './data/potter/potter.js';
import { filterRolesHouses, filterPatronus, filterVaritas } from './data.js';
// declarando mis variables
const vista2 = document.querySelector('#vista2');
const vista3 = document.querySelector('#vista3');
const vista4 = document.querySelector('#vista4');
const datosPersonaje = document.querySelector('#datosPersonaje');
const btnvaritas = document.querySelector('#btnvaritas');
const btnpatronum = document.querySelector('#btnpatronum');
const btnpersonajes = document.querySelector('#btnpersonajes');
const selectRoles = document.querySelector('#roles');
const selectCasas = document.querySelector('#casas');
const desplegable = document.querySelector('#desplegable');
const btnsInicio = document.querySelector('.btnsInicio');
// Appenchild
// appenchild: añade un elemento
// innerHTML: añade un string
// creando sección para mi cartilla
const seccionCartilla = document.createElement('section');
const containerImage = (data) => { // array de objeto
  const sectionElement = document.createElement('section'); // creando sección de datos
  sectionElement.innerHTML = `
  <section class ="ordenar">
  <img class = "imagen" src= ${data.image}>
  <p class ="nombre"> ${data.name} </p>
  </section>  
  `;
  sectionElement.addEventListener('click', (event) => {
    event.preventDefault();
    vista2.classList.add('hide');
    selectRoles.classList.add('hide');
    selectCasas.classList.add('hide');
    datosPersonaje.classList.remove('hide');
    seccionCartilla.innerHTML = `
    <section class="ordenar1">
       <img class ="imagen1" src= ${data.image}>
       <h2> DATOS DEL PERSONAJE</h2>
          <ul>
             <li class="name">Nombre: ${data.name}</li>
             <li class ="name">Species: ${data.species}</li>
             <li class ="name">Gender: ${data.gender}</li>
             <li class="name">House: ${data.house}</li>   
             <li class ="name">Date Of Birth: ${data.dateOfBirth}</li>  
             <li class ="name">Year Of Birth: ${data.yearOfBirth}</li>    
             <li class ="name">Ancestry: ${data.ancestry}</li>    
             <li class ="name">Eye colour: ${data.eyeColour}</li>   
             <li class ="name">Hair Colour: ${data.hairColour}</li>   
             <li class ="name">Actor: ${data.actor}</li>    
          </ul>
          
   </section>
    `;
  });
  return sectionElement;
};
// creando botón de regresar a los botones de inicio
const botonRegresaInicio = document.createElement('button');
const creaTexto = document.createTextNode('Regresa al inicio');
botonRegresaInicio.appendChild(creaTexto);
botonRegresaInicio.id = 'botonRegresaInicio';

botonRegresaInicio.addEventListener('click', () => {
  vista2.classList.add('hide');
  desplegable.classList.add('hide');
  btnpersonajes.classList.remove('hide');
  btnvaritas.classList.remove('hide');
  btnpatronum.classList.remove('hide');
});
for (let i = 0; i < POTTER.length; i += 1) {
  vista2.appendChild(containerImage(POTTER[i]));
  vista2.appendChild(botonRegresaInicio);
}
// creando botón de regreso a atrás para mi cartilla
const botonRegresaAtrás = document.createElement('button');
const creaTexto2 = document.createTextNode('Atrás');
botonRegresaAtrás.appendChild(creaTexto2);
botonRegresaAtrás.id = 'botonRegresaAtrás';

botonRegresaAtrás.addEventListener('click', () => {
  datosPersonaje.classList.add('hide');
  vista2.classList.remove('hide');
});
datosPersonaje.appendChild(seccionCartilla);
datosPersonaje.appendChild(botonRegresaAtrás);

// empezando mis eventos
btnpersonajes.addEventListener('click', (event) => {
  event.preventDefault();
  btnsInicio.classList.add('hide');
  vista2.classList.remove('hide');
  desplegable.classList.remove('hide');
});
selectCasas.addEventListener('change', (event) => {
  vista2.innerHTML = '';
  vista2.appendChild(botonRegresaInicio);
  if (event.target.value === 'Gryffindor') {
    const filterHouseGry = filterRolesHouses(POTTER, 'house', 'Gryffindor');
    for (let i = 0; i < filterHouseGry.length; i += 1) {
      vista2.appendChild(containerImage(filterHouseGry[i]));
    }
  } else if (event.target.value === 'Slytherin') {
    const filterHouseSly = filterRolesHouses(POTTER, 'house', 'Slytherin');
    for (let i = 0; i < filterHouseSly.length; i += 1) {
      vista2.appendChild(containerImage(filterHouseSly[i]));
    }
  } else if (event.target.value === 'Hufflepuff') {
    const filterHouseHuffle = filterRolesHouses(POTTER, 'house', 'Hufflepuff');
    for (let i = 0; i < filterHouseHuffle.length; i += 1) {
      vista2.appendChild(containerImage(filterHouseHuffle[i]));
    }
  } else if (event.target.value === 'Ravenclaw') {
    const filterHouseRaven = filterRolesHouses(POTTER, 'house', 'Ravenclaw');
    for (let i = 0; i < filterHouseRaven.length; i += 1) {
      vista2.appendChild(containerImage(filterHouseRaven[i]));
    }
  } else if (event.target.value === 'casas') {
    for (let i = 0; i < POTTER.length; i += 1) {
      vista2.appendChild(containerImage(POTTER[i]));
    }
  }
});
selectRoles.addEventListener('change', (event) => {
  vista2.innerHTML = '';
  vista2.appendChild(botonRegresaInicio);
  if (event.target.value === 'estudiantes') {
    const filterEstudiantes = filterRolesHouses(POTTER, 'hogwartsStudent', true);
    for (let i = 0; i < filterEstudiantes.length; i += 1) {
      vista2.appendChild(containerImage(filterEstudiantes[i]));
    }
  } else if (event.target.value === 'profesores') {
    const filterProfesores = filterRolesHouses(POTTER, 'hogwartsStaff', true);
    for (let i = 0; i < filterProfesores.length; i += 1) {
      vista2.appendChild(containerImage(filterProfesores[i]));
    }
  } else if (event.target.value === 'roles') {
    for (let i = 0; i < POTTER.length; i += 1) {
      vista2.appendChild(containerImage(POTTER[i]));
    }
  }
});
// creando mi botón de regresar para varitas
const botonRegresaInicio1 = document.createElement('button');
const textoDeMiboton1 = document.createTextNode('Regresa Al inicio');
botonRegresaInicio1.appendChild(textoDeMiboton1);
botonRegresaInicio1.id = 'botonRegresaInicio';
// dándole un evento a mi botón
botonRegresaInicio1.addEventListener('click', () => {
  vista3.classList.add('hide');
  btnpersonajes.classList.remove('hide');
  btnvaritas.classList.remove('hide');
  btnpatronum.classList.remove('hide');
});
// creando una sección donde estarán mis elementos
const seccionNueva1 = document.createElement('section');
seccionNueva1.id = 'datosDevaritas';
vista3.appendChild(botonRegresaInicio1);
vista3.appendChild(seccionNueva1);

const imageVaritas = (data) => {
  let newVaritas = '';
  for (let i = 0; i < data.length; i += 1) { // i => índice
    newVaritas += `
       <section class="ordenar">
         <img class="imagen" src=${data[i].image}>
         <p class="nombre"> Madera: ${data[i].wand.wood} </p>
         <p class="nombre"> Núcleo: ${data[i].wand.core} </p>
         <p class="nombre"> Pertenece: ${data[i].name} </p>
      
       </section>
     `;
  }
  return newVaritas;
};
btnvaritas.addEventListener('click', (event) => {
  event.preventDefault();
  btnsInicio.classList.add('hide');
  vista3.classList.remove('hide');
  const filterVaritas1 = filterVaritas(POTTER, 'wand');
  seccionNueva1.innerHTML = imageVaritas(filterVaritas1);
});
const botonRegresaInicio2 = document.createElement('button');
const textoDeMiboton2 = document.createTextNode('Regresa al inicio');
botonRegresaInicio2.appendChild(textoDeMiboton2);
botonRegresaInicio2.id = 'botonRegresaInicio2';

botonRegresaInicio2.addEventListener('click', () => {
  vista4.classList.add('hide');
  btnpersonajes.classList.remove('hide');
  btnvaritas.classList.remove('hide');
  btnpatronum.classList.remove('hide');
});
const seccionNueva2 = document.createElement('section');
seccionNueva2.id = 'seccionNueva2';
vista4.appendChild(botonRegresaInicio2);
vista4.appendChild(seccionNueva2);

const imagePatronus = (data) => {
  let newPatronum = '';
  for (let i = 0; i < data.length; i += 1) {
    newPatronum += `
     <section class = "ordenar">
     <img class ="imagen" src=${data[i].image}>
     <p class ="nombre"> ${data[i].name} </p>
     <p class ="nombre"> ${data[i].patronus} </p>
     </section>
     `;
  }
  return newPatronum;
};
btnpatronum.addEventListener('click', (event) => {
  event.preventDefault();
  btnsInicio.classList.add('hide');
  vista4.classList.remove('hide');
  const filterpatronus1 = filterPatronus(POTTER, 'patronus');
  seccionNueva2.innerHTML = imagePatronus(filterpatronus1);
});
