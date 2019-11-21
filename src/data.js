export const filterRolesHouses = (data, propiedad, value) => {
  const newArray = [];
  for (let i = 0; i < data.length; i += 1) { // data => array de objetos
    if (data[i][propiedad] === value) {
      newArray.push({
        name: data[i].name,
        image: data[i].image,
      });
    }
  }
  return newArray;
};

export const filterPatronus = (data, propiedad1) => {
  const newArray1 = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i][propiedad1]) {
      newArray1.push({
        name: data[i].name,
        image: data[i].image,
        patronus: data[i].patronus,
      });
    }
  }
  return newArray1;
};
export const filterVaritas = (data, propiedad2) => {
  const arrayVaritas = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i][propiedad2]) {
      if (data[i].wand.wood !== '') {
        arrayVaritas.push({
          name: data[i].name,
          image: data[i].image,
          wand: {
            wood: data[i].wand.wood,
            core: data[i].wand.core,
          },
        });
      }
    }
  }
  return arrayVaritas;
};
