import React from 'react';

// Import Google Map component
import GoogleMapComponentWithMarker from './GoogleMap';

// Wrapper with Google Map component
const Map = ({ styles, APIKey, scheme }) => (
  <div style={styles}>
    <GoogleMapComponentWithMarker
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APIKey}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);

export default Map;

// pass in location, styles, API key and scheme {light or dark}
