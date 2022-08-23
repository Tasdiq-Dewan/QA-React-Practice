import './MobileSuit.css';
import MobileSuitImg from './MobileSuitImage';

const MobileSuitInfo = () => {
    return (
        <>
            <div class = "ms-info">
                <p>Name: RX-93 ν Gundam</p>
                <p>Alias: Nu Gundam</p>
                <p>Pilot: Amuro Ray</p>
                <p>Manufacturer: Anaheim Electronics</p>
            </div>
        </>
    );
}

function MobileSuit(){
    return(
        <>
            <h1 class="ms-heading">Mobile Suit</h1>
            <MobileSuitInfo />
            <MobileSuitImg/>
        </>  
    );
}

export default MobileSuit;