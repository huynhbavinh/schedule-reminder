interface EventC {
    date: Date,
    eventName: string,
}

interface IProps {
    listEvents: Array<EventC>
}

function ListComponent(props: IProps) {
    const {listEvents} = props;
    return(
        <ul>
            {listEvents.map(ev=> {
                return (
                    <li key={ev.eventName} >{ev.eventName}</li>
                )     
            })}
        </ul>
    )
}

export default ListComponent;