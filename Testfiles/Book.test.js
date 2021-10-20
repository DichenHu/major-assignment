import { render, screen } from '@testing-library/react';

import SoldBook from '../components/Book/SoldBook';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <SoldBook>
          
        </SoldBook>
    )
}

it('should render the correct amount of incomplete tasks', () => {
    render(
        <MockTodoFooter 
          numberOfIncompleteTasks={5}
        />
    );
    const pElement = screen.getByText(/booksearch test/i);
    expect(pElement).toBeInTheDocument();
});

it('should render "task" when the number of incomplete tasks is one', () => {
  render(
      <MockTodoFooter 
        numberOfIncompleteTasks={1}
      />
  );
  const pElement = screen.getByText(/check the test/i);
  expect(pElement).toBeInTheDocument();
});