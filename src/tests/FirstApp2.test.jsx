import { render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Test in FirstApp', () => { 
  const title = 'Buenas'
  const subTitle = 'Esto es un subtítulo'

  test('should match with snapshot', () => { 
    const { container } = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot()
  })

   test('should show message "Buenas"', () => { 
    render(<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
    })

   test('should show title in h1', () => { 
    render(<FirstApp title={title} />)
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    })

   test('should show subtitle sended by props', () => { 
    render(<FirstApp title={title} subTitle={subTitle} />)
    expect(screen.getAllByText(subTitle).length).toBe(2)
    })
})