import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('<Hero/>', () => {
  test('render without crashing', () => {
    render(<Hero />);
    expect(
      screen.getByText("Hello. I'm Jun, a Front End Engineer"),
    ).toBeInTheDocument();
  });
});
