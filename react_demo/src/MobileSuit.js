import './MobileSuit.css';
import MSImg from './Rx-93.webp';

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

const MobileSuitImg = () => {
    return(
        <a href="https://static.wikia.nocookie.net/gundam/images/8/8c/Rx-93.jpg/revision/latest/scale-to-width-down/1000?cb=20201101140124">
            <img src={MSImg} alt = "Nu Gundam" class="ms-image" height="540" width="auto"/>
        </a>
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