import './MobileSuit.css';
import MobileSuitImg from './MobileSuitImage';
import NuGundam from './data/NuGundam.json';
import MobileSuitInfo from './MobileSuitInfo';
import MobileSuitList from './data/MobileSuits.json'
import { Component } from 'react';

class MobileSuit extends Component{

    constructor(){
        super();
        let ms = MobileSuitList[0]
        this.state = {...ms, boolForShould: true};
        // this.state = {
        //     "test": "test"
        // };
        console.log("Constructor sets the Mobile Suit as : "+ JSON.stringify(this.state));
    }

    componentWillMount(){
        console.log(`ComponentWillMount sets the alias as` + this.state.alias);
    }

    componentDidMount() {
        console.log("componentDidMount sets the alias as :" + this.state.alias);
        
    }

    componentWillUpdate() {
        console.log("componentWillUpdate sets the alias as :" + this.state.alias);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount sets the alias as :" + this.state.alias);
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate sets the alias as :" + this.state.alias);
        return this.state.boolForShould;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate sets the alias as :" + this.state.alias);
    }

    changeCurrentMobileSuit = (event) => {
        let newMS = MobileSuitList[event.target.value];
        this.setState({...newMS});
    }

    render(){
        return(
            <>
                <header className="ms-header">
                    <h1>Select a Mobile Suit</h1>
                    <select name="mobile-suit-list" id="mobile-suit-list" className="ms-select">
                        {MobileSuitList.map((ms, i) => (<option key={i} label={ms.alias} value={i} 
                         onChange={this.changeCurrentMobileSuit}
                        >
                        </option>))}
                    </select>
                </header>
                <h1 className="ms-heading">{NuGundam.alias}</h1>
                <div className="ms-body">
                    {/* <MobileSuitInfo nameProp={NuGundam.name} aliasProp={NuGundam.alias} pilotProp={NuGundam.pilot} 
                    manufacturerProp={NuGundam.manufacturer} heightProp={NuGundam.height} weightProp={NuGundam.weight}/> */}
                    <MobileSuitInfo {...NuGundam}/>
                    <MobileSuitImg pathProp={NuGundam.imagepath} urlProp={NuGundam.imageurl} altProp={NuGundam.alias}/>
                    {/* <MobileSuitInfo {...this.state}/>
                    <MobileSuitImg pathProp={this.state.imagepath} urlProp={this.state.imageurl}/> */}
                </div>
            </>  
        );
    };
    
}

export default MobileSuit;