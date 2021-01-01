import React from 'react';
// import markericon from '../../assets/images/map-marker.png';

const { compose, withProps, withHandlers } = require('recompose');
const { withScriptjs, withGoogleMap, GoogleMap, BicyclingLayer, Marker } = require('react-google-maps');
// const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer');
const GeneralMap = compose(
	withProps({
		googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAYzby4yYDVaXPmtu4jZAGR258K6IYwjIY&libraries',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `500px`, width: `500px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withHandlers({
		onMarkerClick: props => marker => {
			props.handleLocation(marker.latLng.lat(), marker.latLng.lng());
		}
	}),
	withScriptjs,
	withGoogleMap
)(props => {
	return (
		<GoogleMap
			onClick={props.onMarkerClick}
			defaultZoom={13}
			defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
			defaultOptions={{
				disableDefaultUI: false, // disable default map UI
				draggable: true, // make map draggable
				keyboardShortcuts: false, // disable keyboard shortcuts
				scaleControl: true, // allow scale control
				scrollwheel: true, // allow scroll wheel
				styles: [
					{
						featureType: 'road',
						stylers: [{ color: '#ffffff' }]
					},
					{
						featureType: 'water',
						stylers: [{ color: '#e9e9e9' }]
					},
					{
						featureType: 'landscape',
						stylers: [{ color: '#f5f5f5' }]
					},
					{
						elementType: 'labels.text.fill',
						stylers: [{ color: 'transparent' }]
					},
					{
						featureType: 'poi',
						stylers: [{ color: '#fefefe' }]
					},
					{
						elementType: 'labels.text',
						stylers: [{ saturation: 1 }, { weight: 0.1 }, { color: '#737980' }]
					}
				]
				//icon: markericon
			}}
		>
			<Marker
				onClick={props.onMarkerClick}
				//key={marker.id}
				position={{ lat: props.lat || 40.712776, lng: props.lng || -74.005974 }}
				//slug={marker.slug}
			/>
			<BicyclingLayer autoUpdate />
		</GoogleMap>
	);
});

export default GeneralMap;
