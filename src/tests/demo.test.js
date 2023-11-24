describe('Pruebas en <DemoComponent />', () => {
  test('Esta prueba no debe fallar', () => {
    // 1. Inicialización
    const msg1 = 'Hola mundo'

    // 2. Estímulo
    const msg2 = msg1.trim()

    // Observar el comportamiento
    expect(msg1).toBe(msg2)
  })
})
