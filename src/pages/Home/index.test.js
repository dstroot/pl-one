import React from 'react';
import { create } from 'react-test-renderer';
import Home from '../Home';

function createNodeMock() {
  const doc = document.implementation.createHTMLDocument();
  return { parentElement: doc.body };
}

describe('Home', () => {
  it('it should render', () => {
    let tree = create(<Home />, { createNodeMock });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
