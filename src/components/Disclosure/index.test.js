import React from 'react';
import renderer from 'react-test-renderer';
import Disclosure from '../Disclosure';

describe('Disclosure', () => {
  it('it should render', () => {
    const component = renderer.create(<Disclosure />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
