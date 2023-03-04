// Función que calcula el factorial de un número utilizando la recursión
function factorial(n) {
    // Caso base
    if (n === 0) {
      return 1;
    }
    
    // Caso recursivo
    return n * factorial(n - 1);
  }
  
  // Pruebas utilizando Jest
  describe('factorial', () => {
    it('calculates the factorial of 0', () => {
      expect(factorial(0)).toBe(1);
    });
    
    it('calculates the factorial of 5', () => {
      expect(factorial(5)).toBe(120);
    });
    
    it('calculates the factorial of 10', () => {
      expect(factorial(10)).toBe(3628800);
    });
  });