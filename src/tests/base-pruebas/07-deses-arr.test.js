import { retornaArreglo } from '../../base-pruebas/07-deses-arr'

describe('Test in 07-deses-arr', () => {
  test('should return a string and a number', () => {
    const [letters, numbers] = retornaArreglo()
    expect(letters).toBe('ABC')
    expect(numbers).toBe(123)

    // Probar el tipo de dato:
    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')

    // Otra forma de probar el tipo de dato:
    expect(letters).toEqual(expect.any(String))
  })
})
