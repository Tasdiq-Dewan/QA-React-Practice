import './MobileSuit.css';
import MobileSuitImg from './MobileSuitImage';
import NuGundam from './data/NuGundam.json';
import MobileSuitInfo from './MobileSuitInfo';

function MobileSuit(){
    return(
        <>
            <h1 class="ms-heading">{NuGundam.alias}</h1>
            <div class="ms-body">
                <MobileSuitInfo nameProp={NuGundam.name} aliasProp={NuGundam.alias} pilotProp={NuGundam.pilot} 
                manufacturerProp={NuGundam.manufacturer} heightProp={NuGundam.height} weightProp={NuGundam.weight}/>
                <MobileSuitImg/>
            </div>
        </>  
    );
}

export default MobileSuit;