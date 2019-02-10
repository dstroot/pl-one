import React from 'react';
import renderer from 'react-test-renderer';
import CardGroup from '../CardGroup';

describe('CardGroup', () => {
  it('it should render', () => {
    const component = renderer.create(<CardGroup />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
