import PropTypes from 'prop-types'

// Aun estando por fuera sigue siendo parte del componente
// Así no se tiene que re-renderizar cuando se hace un cambio dentro del componente
// Sí no hay una dependencia internamente se recomienda poner fuera del componente
// const newMessage = {message: 'Hola mundo', title: 'Ozzy'}

// const getMessage = () => { 
//   return 'Hola Mundo'
// }

export const FirstApp = ({title, subTitle, name}) => {
  // console.log(props)

  return (
    <>
      {/* Con funciones asíncronas se genera un error porque devuelve un objeto: */}
      <h1 data-testid="test-title"> {title} </h1>
      {/* <h1>{getMessage()}</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

// Los PropTypes sirven para tipar las props
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Ozzy',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}
