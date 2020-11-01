import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('<Hero/>', () => {
  test('render without crashing', () => {
    render(<Hero />);
    expect(
      screen.getByText("Hi, I'm Jun. Front End Engineer based in Vancouver"),
    ).toBeInTheDocument();
  });
});
