import Card from 'react-bootstrap/Card';

interface EventC {
    date: Date,
    eventName: string,
}

function CardComponent(props: EventC) {
    const { date, eventName } = props;
    return (
        <Card>
            <Card.Header>Date: {date.toISOString()}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment : {eventName}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;