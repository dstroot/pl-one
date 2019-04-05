import React from 'react';
import { create } from 'react-test-renderer';
import Chart from '../Chart';

function createNodeMock() {
  const doc = document.implementation.createHTMLDocument();
  return { parentElement: doc.body };
}

describe('chart', () => {
  it('it should render', () => {
    let tree = create(<Chart />, { createNodeMock });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
