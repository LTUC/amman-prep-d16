import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {

    const [memesArr, setMemesArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `http://localhost:3002/allMemes`;
        const res = await fetch(serverURL);
        const jsonRes = await res.json();
        console.log(jsonRes)
        setMemesArr(jsonRes);
    }

    useEffect(() => {
        sendReq();
    }, [])

    return (
        <>
            <h1>All Memes</h1>
            <Row xs={1} md={4} className="g-4">
            {memesArr.map((item) => {
                return <Col key={item.ID}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.topText}
                            </Card.Text>
                            <Button variant="primary">Add to Fav</Button>
                        </Card.Body>
                    </Card>
                </Col>
            })}
            </Row>
        </>
    )
}

export default Home;