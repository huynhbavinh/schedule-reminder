import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import { BsHearts } from "react-icons/bs";
interface IProps {
    eventName: string,
    date: Date,
    note: string,
}

function ClockComponent(props: IProps) {
    const { eventName, date, note } = props
    const notes = note.split("\n")
    return (
        <>
            <h1>Upcoming event<span style={{color: "red"}}><BsHearts/></span>:{eventName}</h1> 
            <FlipClockCountdown
                to={date}
                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                labelStyle={{ fontSize: 16, fontWeight: 900, textTransform: 'uppercase', color: 'black' }}
                digitBlockStyle={{ width: 120, height: 140, fontSize: 90 }}
                className='mb-3'
            />
            {notes && <h1>Don't forget to do:</h1>}
            <ol>
                {notes.map((n,i) => (<li key={i}>{n}</li>))}
            </ol>
        </>
    )
}

export default ClockComponent;