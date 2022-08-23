import './MobileSuit.css';
import MobileSuitImg from './MobileSuitImage';
import NuGundam from './data/NuGundam.json';
import MobileSuitInfo from './MobileSuitInfo';
import MobileSuitList from './data/MobileSuits.json'

function MobileSuit(){
    return(
        <>
            <header class="ms-header">
                <h1>Select a Mobile Suit</h1>
                {/* <select name="mobile-suit-list" id="mobile-suit-list">
                    {MobileSuitList.map(MobileSuitList => (<option></option>))

                    }}
                </select> */}
            </header>
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