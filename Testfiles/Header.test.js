import {render, screen } from '@testing-library/react';
import Header from "./components/Layout/Header";
test('should render same test passed to title prop', async ()=> {
    render(<Header title ="my Header"/>);
    const headingElement =screen.getByAltText(/My header/i);
    expec(headingElement).toBeInTheDocument();
})


it('should render same text passed into title prop', () => {
    render(
        <Header 
          title="todo"
        />
    );
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
});