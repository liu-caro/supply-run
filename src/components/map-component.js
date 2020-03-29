import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import { googleAPIKey } from "../env";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainerHOC extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    );
  }
}

const MapContainer = GoogleApiWrapper({
  apiKey: googleAPIKey
})(MapContainerHOC);

export { MapContainer };
