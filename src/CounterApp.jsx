import {useState} from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {
  // Cuando se cambia el estado se vuelve a ejecutar el componente
  // ¡¡¡Tener en cuenta para no ejecutar código que no se requiera!!!
  console.log('render')
  const [counter, setCounter] = useState(value)

  const handleAdd = () => { 
    // console.log(event)
    setCounter(counter + 1)
    // setCounter(c => c + 1)
  }
  
  const handleSubstract = () => setCounter(counter - 1)
  const handleReset = () => setCounter(value)
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      {/* (event) => handleAdd(event): */}
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubstract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
