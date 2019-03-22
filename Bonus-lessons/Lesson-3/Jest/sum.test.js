const allFile = require('./sum');

test('Функция sum должна возвращать тип данных true', () => {
  expect(allFile.sum(8, 3)).toBeTruthy();
});

test('Переменная num должна быть равна 5', () => {
  expect(allFile.num).toBe(5);
});

test('Тип данных, который возвращает функция each', () => {
  expect(allFile.each(allFile.arr2, allFile.myFunc)).toHaveLength(5);
});

test('Проверка на значение', () => {
  expect(allFile.each(allFile.arr2, allFile.myFunc)).toEqual(expect.arrayContaining([]));
});

test('Проверка на массив', () => {
  expect(allFile.each(allFile.arr2, allFile.myFunc)).toEqual(expect.arrayContaining([8, 7, 6, 5, 4]));
});