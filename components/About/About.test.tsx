import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('<About/>', () => {
  test('Render without crashing', () => {
    render(<About />);
    expect(
      screen.getByText('ABOUT'),
    ).toBeInTheDocument();
  });

  test.todo('Should have the last skill w/o comma');
  test.todo('Should render resume button link');
  test.todo('Should render email button link');
});
