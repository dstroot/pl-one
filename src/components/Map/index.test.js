import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../Map';

// Some default styles
const styles = {
  width: '100%',
  height: '500px',
};

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

describe('Map', () => {
  it('it should render', () => {
    const component = renderer.create(
      <Map styles={styles} APIKey={API_KEY} scheme="dark" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
