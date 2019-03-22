const allFile = require('./sum');

test('Функция sum должна возвращать тип данных true', () => {
  expect(allFile.sum(2, 2)).toBeFalsy();
});

test('Переменная num должна быть равна 5', () => {
  expect(allFile.num).toBe(5);
});

test('Тип данных, который возвращает функция each', () => {
  expect([8, 7, 6, 5, 4]).toHaveLength(5);
});

test('Проверка на значение', () => {
  expect([8, 7, 6, 5, 4]).toEqual([8, 7, 6, 5, 4]);
});

test('Проверка на массив', () => {
  expect.arrayContaining([8, 7, 6, 5, 4]);
});