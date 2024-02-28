import axios from 'axios';
import { useEffect, useState } from "react";
import Flower from "./Flower";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Favourites() {

    const [favList, setFavList] = useState([])

    const getFavFlowers = async () =>{
        const serverURL = `${process.env.REACT_APP_serverURL}/allFavFlowers`;
        const res = await axios.get(serverURL);
        setFavList(res.data)
    }

    useEffect(() => {
        getFavFlowers();
    }, [favList])

    return (
        <>
        <h1>Favourite List</h1>
        <Row xs={1} md={4} className="g-4">
                {favList.map((item) => {
                    return (
                        <Col>
                            <Flower flowerInfo={item} parentComp="Fav"/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Favourites;