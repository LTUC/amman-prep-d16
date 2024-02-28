import axios from "axios";
import { useEffect, useState } from "react";
import Flower from "./Flower";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {

    const [flowersArr, setFlowersArr] = useState([]);

    const getAllFlowers = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/allFlowers`;
        const res = await axios.get(serverURL);
        setFlowersArr(res.data)
    }

    useEffect(() => {
        getAllFlowers();
    }, [])

    return (
        <>
            <h1>Flowers Collections</h1>
            <Row xs={1} md={4} className="g-4">
                {flowersArr.map((item) => {
                    return (
                        <Col>
                            <Flower flowerInfo={item} parentComp="Home"/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Home;