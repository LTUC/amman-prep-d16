import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



function UpdateModal(props) {

    const updateFlowerHandler = async(event) => {
        event.preventDefault();
        const obj = {
            name : event.target.name.value,
            info : event.target.info.value,
            photo : event.target.photo.value,
        }

        const serverURL = `${process.env.REACT_APP_serverURL}/favFlower/${props.item.id}`
        const res = await axios.put(serverURL,obj)
        props.handleClose();
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Flower {props.item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateFlowerHandler}>
                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Flower name"
                                    defaultValue={props.item.name}
                                />
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Info</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="info"
                                    placeholder="Flower Info"
                                    defaultValue={props.item.info}
                                />
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Photo</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="photo"
                                    placeholder="Flower photo"
                                    defaultValue={props.item.photo}
                                />
                            </Form.Group>
                        <Button type="submit">update</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;