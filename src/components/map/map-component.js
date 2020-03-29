import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { CurrentLocation } from './current-location';
import StarIcon from '@material-ui/icons/Star';
import Star from '../../assets/star.png';
import { googleAPIKey } from "../../env";

export class MapContainerHOC extends Component {
  constructor(props) {
    super(props);

    this.state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}  
    }        //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
  
  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'current location'}/>
        {this.props.tasks.map((task, i) => {
                  return <Marker
                  onClick={this.onMarkerClick}
                  key={i}
                  label={i.toString()}
                  name={task.address}
                  position={{
                    lat: parseFloat(task.lat),
                    lng: parseFloat(task.long)
                  }}
                />
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </CurrentLocation>
    );
  }
}

const MapContainer = GoogleApiWrapper({
  apiKey: googleAPIKey
})(MapContainerHOC);

export { MapContainer };
