import { useEffect, useState } from "react";
import MemeList from "./MemeList";

function FavList() {

    const [favArr, setFavArr] = useState([]);
    const sendReq = async () =>{
        const serverURL = `http://localhost:3002/favMeme`;
        const res = await fetch(serverURL);
        const data = await res.json();
        console.log(data);
        setFavArr(data);
    }

    useEffect(()=>{
        sendReq();
    },[])
    return(
        <>
            <h1>Fav List</h1>
            <MemeList favArr={favArr} />

        </>
    )
}

export default FavList;