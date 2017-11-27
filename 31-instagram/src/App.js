// Instagram

// This is a fresh create-react-app. Some Instagram data has been added
// for you - `instagramPhotos` is an array of photo details.

// 1. Take a look at data.js so you know what properties are available.
// 2. Use the data to build an instagram feed. Display image, title & likes.

// Beast mode:
// 1. Some images have geolocation details. Use the react-google-maps react plugin
//    to display a map under these images.

import React, { Component } from 'react';
import instagramPhotos from './data';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class App extends Component {
  render() {
    return (
      <div className="App">
        {instagramPhotos.map((data) => <InstagramContainer key={data.id} {...data} />)}
      </div>
    );
  }
}

export default App;

const InstagramContainer = ({ user, images, caption, likes, tags, location }) => {
  return (
    <div>
      <h4>{user.username}</h4>
      <PostImage {...images} />
      <h5>Description:</h5>
      <PostDescription {...caption} />
      <h5>Likes:</h5>
      <p>{likes.count}</p>
      <h5>Tags:</h5>
      {tags.map((tag) => <span>#{tag} </span>)}
      <h5>Location:</h5>
      {location ? <MyMapComponent isMarkerShown {...location}/> : 'None'}
    </div>
  )
}

const PostLocation = ({ name }) => <p>{name}</p>
const PostDescription = ({ text }) => <p>{text}</p>
const PostImage = ({ low_resolution }) => <img src={low_resolution.url} alt=""/>


const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.latitude, lng: props.longitude }}>
    <Marker position={{ lat: props.latitude, lng: props.longitude }} />
  </GoogleMap>
));

