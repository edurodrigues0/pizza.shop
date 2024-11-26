import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should hightlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )

    const navLinkAboutText = wrapper.getByText('About')
    const navLinkHomeText = wrapper.getByText('Home')

    expect(navLinkHomeText.dataset.active).toEqual('false')
    expect(navLinkAboutText.dataset.active).toEqual('true')
  })
})
