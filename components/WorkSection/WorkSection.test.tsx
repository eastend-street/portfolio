import React from 'react';
import { render, screen } from '@testing-library/react';
import WORKS from 'constants/works';
import WorkSection from './WorkSection';

describe('<Works/>', () => {
  test('Render without crashing', () => {
    WORKS.forEach((work, index) => {
      render(
        <WorkSection odd={(index + 1) % 2 !== 0} key={work.TITLE} {...work} />,
      );
      const workRegex = new RegExp(`^${work.TITLE}$`);
      expect(screen.getByText(workRegex)).toBeInTheDocument();
    });
  });

  test('Should navigate to the each work when the title or the thumbnail is clicked', () => {
    WORKS.forEach((work, index) => {
      render(
        <WorkSection odd={(index + 1) % 2 !== 0} key={work.TITLE} {...work} />,
      );

      screen.debug();
      // const title = screen.getByText(work.TITLE);
      // const thumbnail = screen.getByTestId(`thumbnail-${work.TITLE}`);
      // TODO: Figure out how to test inner route
      // expect(title.closest('a')).toHaveAttribute('href', work.INNER_URL);
      // expect(thumbnail.closest('a')).toHaveAttribute('href', work.INNER_URL);
    });
  });
});
