

function DisplayBasket({basket}){
    return(
        <>
            <ul>
                {basket.map((item, i) => (
                    <li key={i}>{item.name}: £{item.price}</li>
                ))}
            </ul>
        </>
    );
}

export default DisplayBasket;