describe("Функции", function() {

  it("Возвращает ли функция true?", function() {
    assert.equal(sum(8,5), true);
  });
  
  it("Проверить на соответствие", function() {
    assert.equal(num,5);
  });

});
describe("Функция each", function() {

  it("Тип данных, объект", function() {
    assert.typeOf(each(arr2, myFunc), 'array');
  });
  
  it("Проверить на соответствие", function() {
    assert.deepEqual(each(arr2, myFunc), [8,7,6,5,4] );
  });
  it("Длина", function() {
    assert.lengthOf(each(arr2, myFunc), 5);
  });

});
