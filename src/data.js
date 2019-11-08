export const filter = (POTTER, propiedad, value) => {
  const newArray = [];
  for (let i = 0; i < POTTER.length; i += 1) {
    if (POTTER[i][propiedad] === value) {
      newArray.push({
        name: POTTER[i].name,
        image: POTTER[i].image,
      });
    }
  }
  return newArray;
};
