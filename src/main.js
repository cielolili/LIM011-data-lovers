import POTTER from './data/potter/potter.js';
import { filterRolesHouses, filterPatronus, filterVaritas } from './data.js';
// declarando mis variables
const vista2 = document.querySelector('#vista2');
const datosPersonaje = document.querySelector('#datosPersonaje');
const vista1 = document.getElementById('vista1');
const btnvaritas = document.querySelector('#btnvaritas');
const patronum = document.querySelector('#btnpatronum');
const vista3 = document.querySelector('#vista3');
const vista4 = document.querySelector('#vista4');
const btnpersonajes = document.querySelector('#btnpersonajes');
const selectRoles = document.querySelector('#roles');
const selectCasas = document.querySelector('#casas');
// Appenchild
// appenchild: añade un elemento
// innerHTML: añade un string

const containerImage = (data) => {
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
    datosPersonaje.innerHTML = `
    <section class="ordenar1">
    <img class ="imagen1" src= ${data.image}>
    <h2> DATOS DEL PERSONAJE</h2>
    <ul class ="todos">
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
for (let i = 0; i < POTTER.length; i += 1) {
  vista2.appendChild(containerImage(POTTER[i]));
  // añade un hijo más, no borra nada como el innerHTML
} // data = POTTER[i] <- argumento

// empezando mis eventos
btnpersonajes.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista2.classList.remove('hide');
  selectRoles.classList.remove('hide');
  selectCasas.classList.remove('hide');
});
selectCasas.addEventListener('change', (event) => {
  vista2.innerHTML = '';
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
  }
});
selectRoles.addEventListener('change', (event) => {
  vista2.innerHTML = '';
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
  }
});
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
patronum.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista4.classList.remove('hide');
  const filterpatronus1 = filterPatronus(POTTER, 'patronus');
  vista4.innerHTML = imagePatronus(filterpatronus1);
});
const imageVaritas = (data) => {
  let newVaritas = '';
  for (let i = 0; i < data.length; i += 1) {
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
  vista1.classList.add('hide');
  vista3.classList.remove('hide');
  const filterVaritas1 = filterVaritas(POTTER, 'wand');
  vista3.innerHTML = imageVaritas(filterVaritas1);
});
