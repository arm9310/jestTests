function fizzBuzz(number) { /* funcion */
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
    } else if (number % 3 === 0) {
      return 'Fizz';
    } else if (number % 5 === 0) {
      return 'Buzz';
    } else {
      return number;
    }
  }
/* prueba enjet */
  describe('fizzBuzz', () => {
    it('should return FizzBuzz when passed a multiple of 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
      expect(fizzBuzz(30)).toBe('FizzBuzz');
    });
  
    it('should return Fizz when passed a multiple of 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
      expect(fizzBuzz(9)).toBe('Fizz');
    });
  
    it('should return Buzz when passed a multiple of 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
      expect(fizzBuzz(20)).toBe('Buzz');
    });
  
    it('should return the number when passed a non-multiple of 3 or 5', () => {
      expect(fizzBuzz(1)).toBe(1);
      expect(fizzBuzz(7)).toBe(7);
      expect(fizzBuzz(11)).toBe(11);
    });
  });
  