import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button/>', () => {
  test('render  crashing', () => {
    render(<Button />);
    // expect(
    // //   screen.getByText("Hi, I'm Jun. Front End Engineer based in Vancouver"),
    // ).toBeInTheDocument();
  });
});
