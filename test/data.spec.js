// importamos la función `example`
import { filterVaritas, filterPatronus, filterRolesHouses } from '../src/data';

describe('Filtrar patronus', () => {
  it('debería ser una función', () => {
    expect(typeof filterPatronus).toBe('function');
  });
  it('debería retornar un array con los datos de varitas', () => {
    const inputPatronus = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg', patronus: 'stag' }, { name: 'Draco Malfoy', image: 'http://hp-api.herokuapp.com/images/draco.jpg', patronus: '' }];
    const outPutPatronus = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg', patronus: 'stag' }];
    expect(filterPatronus(inputPatronus, 'patronus', 'stag')).toEqual(outPutPatronus);
  });
});
describe('Filtrar varitas', () => {
  it('debería ser una función', () => {
    expect(typeof filterVaritas).toBe('function');
  });

  it('debería retornarme un array wand ', () => {
    const inputobjeto = [{ name: 'Harry Potter', wand: { wood: 'holly', core: 'phoenix feather' } }, { name: 'Severus Snape' }];
    const outputobjeto = [{ name: 'Harry Potter', wand: { wood: 'holly', core: 'phoenix feather' } }];
    expect(filterVaritas(inputobjeto, 'wand')).toEqual(outputobjeto);
  });
  it('debería retornar un nuevo array con los datos de varitas', () => {
    const inputVaritas = [{ wand: { wood: 'holly', core: 'phoenix feather' } }, { wand: { wood: '', core: '' } }];
    const outPutVaritas = [{ wand: { wood: 'holly', core: 'phoenix feather' } }];
    expect(filterVaritas(inputVaritas, 'wand', 'wood', 'core')).toEqual(outPutVaritas);
  });
});
describe('Filtrar por casas', () => {
  it('debería ser una función', () => {
    expect(typeof filterRolesHouses).toBe('function');
  });
  it('debería retornar un array con los datos de casa Gryffindor', () => {
    const casaGryffindor = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg', house: 'Gryffindor' }, { name: 'Draco Malfoy', image: 'http://hp-api.herokuapp.com/images/draco.jpg', house: 'Slytherin' }];
    const outPutGryffindor = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg' }];
    expect(filterRolesHouses(casaGryffindor, 'name', 'Harry Potter')).toEqual(outPutGryffindor);
  });
});
describe('Filtrar por roles', () => {
  it('debería ser una función', () => {
    expect(typeof filterRolesHouses).toBe('function');
  });
  it('debería retornar un array con los datos de estudiantes', () => {
    const inputHogwartsStudent = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg' }, { name: 'Minerva McGonagall', image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg' }];
    const outPutHogwartsStudent = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg' }];
    expect(filterRolesHouses(inputHogwartsStudent, 'name', 'Harry Potter')).toEqual(outPutHogwartsStudent);
  });
});
