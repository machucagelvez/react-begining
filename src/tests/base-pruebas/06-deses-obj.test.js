import { usContext } from '../../base-pruebas/06-deses-obj'

describe('Test in 06-deses-obj', () => {
  test('should return an object', () => {
    const clave = 'Ozzy'
    const edad = 20
    const user = usContext({ clave, edad })

    const testUser = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    }

    expect(testUser).toEqual(user)
  })
})
