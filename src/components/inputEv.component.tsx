import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormEvent, useState } from 'react';

interface EventC {
    date: Date,
    eventName: string,
    note: string
}

interface IProps {
    isShow: boolean;
    handleClose: () => void;
    setList: (ev: Array<EventC>) => void,
    listEv: Array<EventC>,
}

function InputEventComponent(props: IProps) {
    const { isShow, handleClose, setList, listEv } = props;

    const [ev, setEv] = useState('')
    const [date, setDate] = useState(new Date())
    const [note, setNote] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newListEv = [{ date, eventName: ev, note }, ...listEv]
        setList(newListEv)

        setEv('')
        setDate(new Date())
        setNote('')
        handleClose()
    }

    return (
        <Offcanvas show={isShow} onHide={handleClose} placement='bottom' >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Register Event Form</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={(e) => { handleSubmit(e) }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter event name" required value={ev}
                                onChange={(e) => { setEv(e.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Date Picker</Form.Label>
                            <Form.Control type="date" required
                                onChange={(e) => { setDate(new Date(e.target.value)) }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} value={note}
                                onChange={(e) => { setNote(e.target.value) }}
                            />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default InputEventComponent;