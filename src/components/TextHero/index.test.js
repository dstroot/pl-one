import React from 'react';
import renderer from 'react-test-renderer';
import TextHero from '../TextHero';

describe('TextHero', () => {
  it('it should render', () => {
    const component = renderer.create(<TextHero />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
