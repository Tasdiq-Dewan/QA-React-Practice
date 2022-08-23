import PropTypes from 'prop-types';

function MobileSuitInfo(props){
    return (
        <>
            <div class = "ms-info">
                <p>Name: {props.nameProp}</p>
                <p>Alias: {props.aliasProp}</p>
                <p>Pilot: {props.pilotProp}</p>
                <p>Manufacturer: {props.manufacturerProp}</p>
                <p>Height: {props.heightProp}m</p>
                <p>Weight: {props.weightProp} metric tons</p>
            </div>
        </>
    );
}

MobileSuitInfo.propTypes = {
    nameProp : PropTypes.string.isRequired,
    aliasProp: PropTypes.string.isRequired,
    pilotProp: PropTypes.string.isRequired,
    manufacturerProp: PropTypes.string.isRequired,
    heightProp: PropTypes.number.isRequired,
    weightProp: PropTypes.number.isRequired
}

export default MobileSuitInfo;