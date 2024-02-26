import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import MemeModal from './MemeModal';

import { useState } from 'react';
function MemeList(props) {

    const [showModal, setShowModal] = useState(false)
    const [clickedItem, setClickedItem] = useState({})

    const handleShow = (item) => {
        setShowModal(true);
        console.log(item)
        setClickedItem(item)
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const deleteItem = async (id) => {

        const serverURL = `http://localhost:3002/deleteFavMeme/${id}`;
        const res = await fetch(serverURL, {method: "DELETE"});
        //update the favArr with the new items


    }
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.favArr.map((item) => {
                    return <Col key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image_path} />
                            <Card.Body>
                                <Card.Title>{item.meme_name}</Card.Title>
                                <Card.Text>
                                    {item.topText}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { handleShow(item) }}>see more</Button>
                                <Button variant="danger" onClick={() => { deleteItem(item.id) }}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

            <MemeModal showModal={showModal} handleClose={handleClose} clickedItem={clickedItem} />

        </>
    )
}

export default MemeList;