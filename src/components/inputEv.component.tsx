import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormEvent, useState } from 'react';
import moment from 'moment';
import { storageSchedule } from '../utils/utils';

interface EventC {
    id: number,
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
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DDTkk:mm'))
    const [note, setNote] = useState('')
    const [notValidDate, setNotValidDate] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (new Date(date).getTime() < new Date(Date.now()).getTime()) {
            setNotValidDate(true)
            setDate('')
            return;
        }

        const newListEv = [{ id: listEv.length + 1, date: new Date(date), eventName: ev, note }, ...listEv]
        storageSchedule(newListEv)
        setList(newListEv)

        setEv('')
        setDate(new Date().toISOString())
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
                            <Form.Control type="datetime-local" required value={date}
                                onChange={(e) => {
                                    setNotValidDate(false)
                                    setDate(moment(new Date(e.target.value)).format('YYYY-MM-DDTkk:mm'))
                                }}
                            />
                            {notValidDate && <Form.Control.Feedback style={{ display: 'inline-block', color: 'red' }}>The day is out of date</Form.Control.Feedback>}
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