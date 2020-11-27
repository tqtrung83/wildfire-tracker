import GoogleMapReact from 'google-map-react';
import LocationMaker from './LocationMaker';

const Map = ({ center, zoom }) => {
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBmUWnolI_615b4ToMtJ1wxfgbq9LXc9Rs' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMaker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
