import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { SideBar } from "./components/Layout/Sidebar";


const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}

it('should render the home page', () => {

  const { container, getByTestId } = renderWithRouter(<SideBar />) 
  const navbar = getByTestId('navbar')
  const link = getByTestId('home-link')

  expect(container.innerHTML).toMatch('Home page')
  expect(navbar).toContainElement(link)
})