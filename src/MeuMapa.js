import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MeuMapa extends React.Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '300px'
    };

    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: -11.85497386062406, lng: -55.50981362720925 }}
      >
        <Marker position={{ lat: -11.85497386062406, lng: -55.50981362720925}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVj1FE4yRHIrzW_3AqqzGzwLUrzsD3LZw'
})(MeuMapa);