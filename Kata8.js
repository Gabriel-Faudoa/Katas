// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`const` is like `let` plus read-only', () => {
    describe('scalar values are read-only', () => {
      it('e.g. a number', () => {
        const constNum = 0;
        const Num = 1;
        assert.equal(constNum, 0);
  //Syntax const Num wasn't declared properly
      });
      it('or a string', () => {
        const constString = 'I am a const';
        const String = 'Cant change you?';
        assert.equal(constString, 'I am a const');
  //syntax const String wasn't declared properly
      });
    });
    const notChangeable = 23;
    it('const scope leaks too', () => {
      assert.equal(notChangeable, 23);
  //Const leaks through scope and can be called from insdie one
    });
    describe('complex types are NOT fully read-only', () => {
      it('array`s items can be changed', () => {
        const arr = [];
        arr[0] = 42;
        assert.equal(arr[0], 42);
  //can't change whats in an array
      });
      it('object`s can be modified', () => {
        const obj = {x: 1};
        obj.x = 3;
        assert.equal(obj.x, 3);
  //objects are modifiable
      });
    });
  });