import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp"

describe('Test en <CounterApp />', () => {
  const initialValue = 10
  test('should match with snapshot', () => { 
    const {container} = render(<CounterApp value={initialValue}/>)
    expect(container).toMatchSnapshot()
   })

   test('should show 100 in initial value', () => { 
    render(<CounterApp value={100}/>)
    expect(screen.getByText(100)).toBeTruthy()
    })

    test('should increase with +1 button', () => { 
      render(<CounterApp value={initialValue}/>)
      fireEvent.click(screen.getByText('+1')) // Ejecuta el evento click
      expect(screen.getByText('11')).toBeTruthy()
    })

    test('should decrease with -1 button', () => { 
      render(<CounterApp value={initialValue}/>)
      fireEvent.click(screen.getByText('-1'))
      expect(screen.getByText('9')).toBeTruthy()
    })

    test('should work reset button', () => { 
      render(<CounterApp value={initialValue}/>)
      fireEvent.click(screen.getByText('+1'))
      fireEvent.click(screen.getByText('+1'))
      fireEvent.click(screen.getByText('+1'))
      // fireEvent.click(screen.getByText('Reset'))
      fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
      expect(screen.getByText(initialValue)).toBeTruthy()
    })
})