import React from 'react';
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  // const coordinates = {
  //   lat: 0,
  //   lng: 0
  // };
  // console.log(coordinates);

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys= {{ key: 'AIzaSyBTIqrplFfnFOl5se44PwLAJPfM0I4pb7Y' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={e => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map;
