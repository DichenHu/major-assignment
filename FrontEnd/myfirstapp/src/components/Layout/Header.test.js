import {render, screen } from '@testing-library/react';
import Header from '..';
test('should render same test passed to title prop', async ()=> {
    render(<Header title ="my Header"/>);
    const headingElement =screen.getByAltText(/My header/i);
    expec(headingElement).toBeInTheDocument();
})