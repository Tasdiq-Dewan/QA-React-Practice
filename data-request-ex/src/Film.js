import {useState} from 'react'
import axios from 'axios'

function Film(){

    const [filmTitle, setTitle] = useState('');
    const [data, setData] = useState("");
    const [apiKey, setKey] = useState("8d44fde4");

    const updateTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value.replace(/\s/g, "%20"));
    }

    const getFilmDate = (e) => {
        axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${filmTitle}`)
        .then(res => {
            console.log(res.data);
            setData(res.data);
        })
    }

    return(
        <>
            <input type="text" onChange={(e) => updateTitle(e)}/>
            <button type="button" onClick={(e) => getFilmDate(e)}>Search film</button>
        </>
    );
}

export default Film;