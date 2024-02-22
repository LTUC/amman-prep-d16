import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function MemeList(props) {
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
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </>
    )
}

export default MemeList;