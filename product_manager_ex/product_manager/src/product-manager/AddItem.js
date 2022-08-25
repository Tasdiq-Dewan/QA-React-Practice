

function AddItem({handleItemName, addItem, handleItemPrice}){
    return(
        <>
            <form>
                <input type="text" placeholder="Enter item name" onChange={e => handleItemName(e.target.value)}/>
                <input type="number" placeholder="Enter price" onChange={e => handleItemPrice(e.target.value)}/>
                <button type="button" onClick={addItem}>Add item to Basket</button>
            </form>
        </>
    );
}

export default AddItem;