import './MobileSuit.css';
import MobileSuitImg from './MobileSuitImage';
import NuGundam from './data/NuGundam.json';
import MobileSuitInfo from './MobileSuitInfo';
import MobileSuitList from './data/MobileSuits.json'
import { Component } from 'react';

class MobileSuit extends Component(){
    render(){
        return(
            <>
                <header class="ms-header">
                    <h1>Select a Mobile Suit</h1>
                    <select name="mobile-suit-list" id="mobile-suit-list" class="ms-select">
                        {MobileSuitList.map(ms => (<option label={ms.alias} value={ms.alias}></option>))}
                    </select>
                </header>
                <h1 class="ms-heading">{NuGundam.alias}</h1>
                <div class="ms-body">
                    <MobileSuitInfo nameProp={NuGundam.name} aliasProp={NuGundam.alias} pilotProp={NuGundam.pilot} 
                    manufacturerProp={NuGundam.manufacturer} heightProp={NuGundam.height} weightProp={NuGundam.weight}/>
                    {/* <MobileSuitInfo props={NuGundam}/> */}
                    <MobileSuitImg pathProp={NuGundam.imagepath} urlProp={NuGundam.imageurl}/>
                </div>
            </>  
        );
    };
    
}

export default MobileSuit;