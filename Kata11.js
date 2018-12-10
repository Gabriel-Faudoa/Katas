// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      let [a, b, c] = 'abc';
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  //variable just needed to be in an array
    });
    it('missing characters are undefined', () => {
      const [a, c] = 'a';
      assert.equal(c, void 0);
  //got rid of the b and since c is not there is equals to 0
    });
    it('unicode character work too', () => {
      const [space, coffee] = ' ☕';
      assert.equal(coffee, '\u{2615}');
  //remove a to fit the format of the unicode
    });
  });