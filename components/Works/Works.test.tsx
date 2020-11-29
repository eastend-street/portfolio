import React from 'react';
import { render, screen } from '@testing-library/react';
import WORKS from 'constants/works';
import Works from './Works';

describe('<Works/>', () => {
  test('Render without crashing', () => {
    render(<Works />);
    expect(screen.getByText('WORKS')).toBeInTheDocument();
  });

  test('Should render all the works', () => {
    render(<Works />);
    WORKS.forEach((work) => {
      const workRegex = new RegExp(`^${work.TITLE}$`);
      expect(screen.getByText(workRegex)).toBeInTheDocument();
    });
  });
});
