import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { useState } from 'react'
// import { removeSchedule } from '../utils/utils';

interface EventC {
    id: number,
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
    const beautifulFormat = {
        ...event
    }
    const handleClickCard = (e: EventC) => {
        setTarget(e)
    }
    // const handleClickDel = (e: EventC) => {
    //     removeSchedule(e.id)
    // }

    return (
        <div>
            <Card style={{ marginBottom: '0.3rem', transition: '0.2s', cursor: 'pointer' }}
                onMouseOver={() => { setHovering(true) }}
                onMouseOut={() => { setHovering(false) }}
                onClick={() => { handleClickCard(event) }}
                className={isHovering ? 'bg-secondary-subtle' : ''}
            >
                <Card.Header>
                    Date: {beautifulFormat.date.toISOString().split('T')[0] + ' ' + beautifulFormat.date.toISOString().split('T')[1].split('Z')[0].split('.')[0]}
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special day for: {event.eventName}</Card.Title>
                    <Card.Text>
                        {event.note}
                    </Card.Text>
                </Card.Body>
                {/* <Button variant="outline-danger" onClick={() => { handleClickDel(event) }}>Remove Event</Button> */}
            </Card>
        </div>
    );
}

export default CardComponent;
