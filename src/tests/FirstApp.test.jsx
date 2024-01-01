import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Test in FirstApp', () => { 
  // test('should match with snapshot', () => { 
  //   const title = 'Buenas'
  //   const {container} = render(<FirstApp title={title}/>)

  //   expect(container).toMatchSnapshot()
  // })
  
  test('should show title in a h1', () => { 
    const title = 'Buenas'
    const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)
    expect(getByText(title)).toBeTruthy() // toBeTruthy() evalua que exista

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain(title)
    expect(getByTestId('test-title').innerHTML).toContain(title)
  })
  
  test('should show subtitle from props', () => { 
    const title = 'Buenas'
    const subTitle = 'Soy un subtítulo'
    const {getAllByText} = render(<FirstApp title={title} subTitle={subTitle}/>)
    expect(getAllByText(subTitle).length).toBe(2)
  })
})