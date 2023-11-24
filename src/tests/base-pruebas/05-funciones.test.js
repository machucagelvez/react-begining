import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('Tests in 05-funciones', () => {
  test('should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    }

    const user = getUser()

    // los objetos se comparan con respecto a su ubicación en memoria
    // Por eso no se puede utilizar el toBe()
    expect(testUser).toEqual(user)
  })

  test('should return an object', () => {
    const name = 'Ozzy'
    const activeUser = getUsuarioActivo(name)
    const testUser = {
      uid: 'ABC567',
      username: name,
    }

    expect(testUser).toEqual(activeUser)
  })
})
