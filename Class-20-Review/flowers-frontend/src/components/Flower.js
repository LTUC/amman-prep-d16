import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import UpdateModal from './UpdateModal'
import { useState } from 'react';

function Flower(props) {

    const [showModal, setShowModal] = useState(false);
    const [selecteItem, setSelectedItem] = useState({});

    const addToFav = async (item) => {
        console.log(item)
        const serverURL = `${process.env.REACT_APP_serverURL}/favFlower`;

        const obj = {
            name: item.name,
            photo: item.photo,
            info: item.info
        }
        await axios.post(serverURL, obj);
    }

    const deleteFlower = async (id) =>{
        const serverURL = `${process.env.REACT_APP_serverURL}/favFlower/${id}`;
        const res = await axios.delete(serverURL)
        console.log(res.data)
    }

    const openUpdateForm = (item) =>{
        setSelectedItem(item)
        setShowModal(true)
    }

    const handleClose = ()=>{
        setShowModal(false)
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.flowerInfo.photo} />
                <Card.Body>
                    <Card.Title>{props.flowerInfo.name}</Card.Title>
                    <Card.Text>
                        {props.flowerInfo.info}
                    </Card.Text>
                    {props.parentComp == "Home" ?
                        <Button variant="primary" onClick={() => addToFav(props.flowerInfo)}>💗</Button>
                        : <>
                            <Button variant="primary" onClick={() => openUpdateForm(props.flowerInfo)}>update</Button>
                            <Button variant="danger" onClick={() => deleteFlower(props.flowerInfo.id)}>delete</Button>
                        </>}

                </Card.Body>
            </Card>

            <UpdateModal show={showModal} handleClose={handleClose} item={selecteItem}/>
        </>
    )
}

export default Flower;