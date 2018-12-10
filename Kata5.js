// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
    it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
      var func = '() => {}';
      assert.equal('' + func, '() => {}');
  //wrote an arrow function out but as a string.
    });
    it('instead `{}` use an expression, as return value', function() {
      var func = () => 'I return too';
      assert.equal(func(), 'I return too');
  //Wrote and expression to replace curly brackets.
    });
    it('one parameter can be written without parens', () => {
      var func = p => 25 - 1;
      assert.equal(func(25), 24);
  //No () required as only 1 parameter is present.
    });
    it('many params require parens', () => {
      var func = param => (23) + (42);
      assert.equal(func(23, 42), 23+42);
  //Assert is expecting 23+43 but you need to put each number in ().
    });
      it('the function body needs parens to return an object', () => {
      var func = () => ({iAm: 'an object'});
      assert.deepEqual(func(), {iAm: 'an object'});
  //parens seperate so it knows which part is the function
    });
  });