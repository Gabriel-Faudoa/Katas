// 1: template strings - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('A template string, is wrapped in ` (backticks) instead of \' or "', function() {
    describe('by default, behaves like a normal string', function() {
      it('just surrounded by backticks', function() {
        var str = `like a string`;
        assert.equal(str, 'like a string');
      });
    });
  //Just needed 'like a string' written in the back ticks
    var x = 42;
    var y = 23;
    
    describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
      it('e.g. a simple variable "${x}" just gets evaluated', function() {
        var evaluated = `x=${x}`;
        assert.equal(evaluated, 'x=' + x);
      });
  //Evaluating x variable within the string
      it('multiple variables get evaluated too', function() {
        var evaluated = `${ x }+${ y }`;
        assert.equal(evaluated, x + '+' + y);
      });
    });
  //Evaluating multiple variables
    describe('can evaluate any expression, wrapped inside "${...}"', function() {
      it('all inside "${...}" gets evaluated', function() {
        var evaluated = `${ x  +  y }`;
        assert.equal(evaluated, x+y);
      });
  //Evaluating an expression inside the string
      it('inside "${...}" can also be a function call', function() {
        function getDomain(){ 
          return document.domain; 
        }
        var evaluated = `${ getDomain() }`;
        assert.equal(evaluated, 'tddbin.com');
      });
    });
  });
  //Calling a function inside of it