
function MobileSuitSelect({currentMS, handleChange, list}){
    return(
        <header className="ms-header">
        <h1>Select a Mobile Suit</h1>
        <select name="mobile-suit-list" id="mobile-suit-list" className="ms-select"
        onChange={(e) => handleChange(e.target.value)}>
            {list.map((ms, i) => (<option key={i} label={ms.alias} value={i}></option>))}
        </select>
        </header>
    );
}

export default MobileSuitSelect;