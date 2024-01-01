module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // Esto se usa para versiones en las que no funciona el fetch API:
  setupFiles: ['./jest.setup.js'],
}
