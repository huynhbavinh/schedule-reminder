import CardComponent from "./card.component";
import "../styles/list.styles.css"

interface EventC {
    date: Date,
    eventName: string,
}

interface IProps {
    listEvents: Array<EventC>
}

function ListComponent(props: IProps) {
    const { listEvents } = props;
    return (
        <div className="mb-3" style={{minHeight: '33rem', maxHeight: '32.5rem', overflowY: 'auto'}}>
            {listEvents.map(ev => {
                return (
                    <CardComponent key={ev.eventName} date={ev.date} eventName={ev.eventName} />
                )
            })}
        </div>
    )
}

export default ListComponent;