import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';

function Child(props) {

    const [takenToys, setTakenToys] = useState(0);

    const incrementTakenToys = () =>{
        // takenToys++; //wrong way
        setTakenToys(takenToys+1)

        //decremnt total Toys
        props.decrementFun(true);

    }
    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.imgPath} />
                    <Card.Body>
                        <Card.Title>Name : {props.name}</Card.Title>
                        <Card.Text>
                            Age : {props.age}
                        </Card.Text>
                        <Button variant="primary" onClick={incrementTakenToys}>I need a Toy!</Button>
                        <Card.Text>
                            Number of Taken Toys 🧸 = {takenToys}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Child;