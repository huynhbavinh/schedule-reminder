import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'

interface IProps {
    eventName: string,
    date: Date,
    note: string,
}

function ClockComponent(props: IProps) {
    const { eventName, date } = props
    return (
        <>
            <h1>{eventName}</h1>
            <FlipClockCountdown
                to={date}
                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                labelStyle={{ fontSize: 16, fontWeight: 900, textTransform: 'uppercase', color: 'black' }}
                digitBlockStyle={{ width: 120, height: 140, fontSize: 90 }}
            />
        </>
    )
}

export default ClockComponent;