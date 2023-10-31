import CardComponent from "./card.component";

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
        <ul>
            {listEvents.map(ev => {
                return (
                    <CardComponent date={ev.date} eventName={ev.eventName} />
                )
            })}
        </ul>
    )
}

export default ListComponent;