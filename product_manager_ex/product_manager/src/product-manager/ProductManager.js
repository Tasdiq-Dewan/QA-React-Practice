import AddItem from "./AddItem";
import DisplayBasket from "./DisplayBasket";
import {useState, useEffect} from 'react';

function ProductManager(){

    const [currentItem, setCurrentItem] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        console.log("Running useEffect");
    });

    const handleItemName = (itemName) => {
        setCurrentItem(itemName);
    }

    const handleItemPrice = (itemPrice) => {
        setCurrentPrice(itemPrice);
    }

    const addItem = () => {
        setBasket(basket => [...basket, {index: basket.length, name: currentItem, price: currentPrice}]);
    }

    return(
        <>
            <AddItem handleItemName={handleItemName} addItem={addItem} handleItemPrice={handleItemPrice}/>
            <DisplayBasket basket={basket}/>
        </>
    );
}

export default ProductManager;