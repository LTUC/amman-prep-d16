import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



function MemeModal(props) {
    return (
        <>

            <Modal show={props.showModal} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedItem.meme_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.clickedItem.image_path}></Image>
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

export default MemeModal;