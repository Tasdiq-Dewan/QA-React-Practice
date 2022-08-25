import './MobileSuit.css';
import MobileSuitImg from './MobileSuitImage';
//import NuGundam from './data/NuGundam.json';
import MobileSuitInfo from './MobileSuitInfo';
import MobileSuitList from '../data/MobileSuits.json'
import MobileSuitSelect from './MobileSuitSelect';
import {useState} from 'react'

const MobileSuit = () => {
    let initialMS = MobileSuitList[0]
    //console.log(MobileSuitList)

    const[currentMS, setMS] = useState({...initialMS});

    const handleChange = index => {
        let newMS = MobileSuitList[index];
        setMS({...newMS});
    }

    return(
            <>
                <MobileSuitSelect currentMS={currentMS} handleChange={handleChange} list={MobileSuitList}/>
                <h1 className="ms-heading">{currentMS.alias}</h1>
                <div className="ms-body">
                    <MobileSuitInfo {...currentMS}/>
                    {/* <MobileSuitImg pathProp={currentMS.imagepath} urlProp={currentMS.imageurl} altProp={currentMS.alias}/> */}
                </div>
            </>  
        );
    
}

export default MobileSuit;