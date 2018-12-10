// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`let` restricts the scope of the variable to the current block', () => {
    describe('`let` vs. `var`', () => {
      it('`var` works as usual, it`s scope is the function', () => {
        if (true) {
          var varX = true;
        }
        assert.equal(varX, true);
  //var scopes the whole function
      });
      it('`let` restricts scope to inside the block', () => {
        if (true) {
          let letX = true;
        }
        assert.throws(() => console.log(letX));
  //let scopes only specific area
      });
    });
  
    describe('`let` usage', () => {
      it('`let` use in `for` loops', () => {
        let obj = {x: 1};
        for (let key in obj) {}
        assert.throws(() => console.log(key));
  //let is usable within loops
      });
      it('create artifical scope, using curly braces', () => {
        {
          var {X} = true;
        }
        assert.throws(() => console.log(letX
  //the curly braces creates a scope on x
        });
    });
  });