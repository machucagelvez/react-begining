import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'
import heroes from '../../data/heroes'

describe('Test in 08-imp-exp', () => {
  test('getHeroeById should return a hero by ID', () => {
    const id = 1
    const hero = getHeroeById(id)

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById should return undefined if there is no ID', () => {
    const id = 100
    const hero = getHeroeById(id)

    expect(hero).toBeFalsy() // Evalúa null, undefined o false
  })

  test('getHeroesByOwner should return an array of length 3 and with only DC heroes', () => {
    const quantity = 3
    const owner = 'DC'
    const testHeroes = getHeroesByOwner(owner)

    expect(testHeroes.length).toBe(quantity)
    expect(testHeroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ])

    // Esta es la forma más adecuada:
    expect(testHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  })

  test('getHeroesByOwner should return an array of length 2 and with only Marvel heroes', () => {
    const quantity = 2
    const owner = 'Marvel'
    const testHeroes = getHeroesByOwner(owner)

    expect(testHeroes.length).toBe(quantity)
    expect(testHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  })
})
