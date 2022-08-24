import './MobileSuit.css';
import MobileSuitImg from './MobileSuitImage';
//import NuGundam from './data/NuGundam.json';
import MobileSuitInfo from './MobileSuitInfo';
import MobileSuitList from './data/MobileSuits.json'
import {useState} from 'react'

const MobileSuit = () => {
    let initialMS = MobileSuitList[1]
    const[currentMS, setMS] = useState({...initialMS});

    const handleChange = index => {
        let newMS = MobileSuitList[index];
        setMS({...newMS})
    }

    return(
            <>
                <header className="ms-header">
                    <h1>Select a Mobile Suit</h1>
                    <select name="mobile-suit-list" id="mobile-suit-list" className="ms-select"
                    onChange={(e) => handleChange(e.target.value)}>
                        {MobileSuitList.map((ms, i) => (<option key={i} label={ms.alias} value={i}>
                        </option>))}
                    </select>
                </header>
                <h1 className="ms-heading">{currentMS.alias}</h1>
                <div className="ms-body">
                    {/* <MobileSuitInfo {...initialMS}/>
                    <MobileSuitImg pathProp={initialMS.imagepath} urlProp={initialMS.imageurl} altProp={initialMS.alias}/> */}
                    <MobileSuitInfo {...currentMS}/>
                    <MobileSuitImg pathProp={currentMS.imagepath} urlProp={currentMS.imageurl} altProp={currentMS.alias}/>
                </div>
            </>  
        );
    
}

export default MobileSuit;