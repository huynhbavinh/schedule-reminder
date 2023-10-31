import Card from 'react-bootstrap/Card';
import { useState } from 'react'

interface EventC {
    date: Date,
    eventName: string,
    note: string
}
interface IProps {
    event: EventC,
    setTarget: (event: EventC) => void
}

function CardComponent(props: IProps) {
    const [isHovering, setHovering] = useState(false)
    const { event, setTarget } = props;

    const handleClick = (e: EventC) => {
        setTarget(e)
    }

    return (
        <Card style={{ marginBottom: '0.3rem', transition: '0.2s', cursor: 'pointer' }}
            onMouseOver={() => { setHovering(true) }}
            onMouseOut={() => { setHovering(false) }}
            onClick={()=> { handleClick(event) }}
            className={isHovering ? 'bg-secondary-subtle' : ''}
        >
            <Card.Header>Date: {event.date.toISOString()}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment : {event.eventName}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;
