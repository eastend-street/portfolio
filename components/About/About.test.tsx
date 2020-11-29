import React from 'react';
import { render, screen } from '@testing-library/react';
import SKILLS from 'constants/skills';
import { EMAIL } from 'constants/info';
import About from './About';

const buttonData = [
  {
    name: 'Resume',
    type: 'link',
    url: 'resume_jun_yamada.pdf',
  },
  {
    name: 'Email',
    type: 'external-link',
    url: `mailto:${EMAIL}`,
  },
];

describe('<About/>', () => {
  test('Render without crashing', () => {
    render(<About />);
    expect(
      screen.getByText('ABOUT'),
    ).toBeInTheDocument();
  });

  test('Should have the last skill w/o comma in other skills', () => {
    render(<About />);
    SKILLS.otherSkills.forEach((category) => {
      const lastSkill = category.skills[category.skills.length - 1];
      const regex = new RegExp(`^${lastSkill}$`);
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });

  test('Should render resume button link', () => {
    render(<About />);
    buttonData.forEach((button) => {
      const buttonComponent = screen.getByTestId(`${button.type}-${button.name}`);
      expect(buttonComponent?.getAttribute('href')).toBe(button.url);
    });
  });

  test.todo('Should render email button link');
});
