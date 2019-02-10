import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

describe('Search', () => {
  it('it should render', () => {
    const component = renderer.create(<Search />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
