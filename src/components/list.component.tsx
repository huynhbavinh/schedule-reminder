import CardComponent from "./card.component";
import "../styles/list.styles.css"

interface EventC {
    id: number,
    date: Date,
    eventName: string,
    note: string
}

interface IProps {
    listEvents: Array<EventC>,
    setTarget: (target: EventC) => void
}

function ListComponent(props: IProps) {
    const { listEvents , setTarget } = props;
    return (
        <div className="mb-3" style={{minHeight: '33rem', maxHeight: '32.5rem', overflowY: 'auto'}}>
            {listEvents.map(ev => {
                return (
                    <CardComponent key={ev.eventName} event={ev} setTarget={setTarget} />
                )
            })}
        </div>
    )
}

export default ListComponent;