function removeNonCanonical(dnaString) {
    if (!dnaString) return '';
  
    const canonicalBases = new Set(['C', 'T', 'A', 'G']);
  
    return dnaString
      .split('')
      .filter(base => canonicalBases.has(base))
      .join('');
  }
/* La prueba utiliza la función expect para verificar que el valor devuelto por la función es el valor esperad */
  describe('removeNonCanonical', () => {
    it('should remove non-canonical bases from the input string', () => {
      expect(removeNonCanonical('CTAGGGTA')).toBe('CTAGGGTA');
      expect(removeNonCanonical('CGTA')).toBe('CGTA');
      expect(removeNonCanonical('CAtgaTGAG')).toBe('CAG');
      expect(removeNonCanonical('')).toBe('');
    });
  });