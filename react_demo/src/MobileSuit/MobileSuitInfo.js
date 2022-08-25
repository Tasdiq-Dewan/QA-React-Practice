//import PropTypes from 'prop-types';

function MobileSuitInfo(props){
    return (
        <>
            <div className = "ms-info">
                <p>Name: {props.name}</p>
                <p>Alias: {props.alias}</p>
                <p>Pilot: {props.pilot}</p>
                <p>Manufacturer: {props.manufacturer}</p>
                <p>Height: {props.height}m</p>
                <p>Weight: {props.weight} metric tons</p>
            </div>
        </>
    );
}

// MobileSuitInfo.propTypes = {
//     props.name : PropTypes.string.isRequired,
//     aliasProp: PropTypes.string.isRequired,
//     pilotProp: PropTypes.string.isRequired,
//     manufacturerProp: PropTypes.string.isRequired,
//     heightProp: PropTypes.number.isRequired,
//     weightProp: PropTypes.number.isRequired
// }

export default MobileSuitInfo;