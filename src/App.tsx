import './App.css'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'

function App() {

  const handleComplete = () => {
    console.log('complete')
  }

  const evs = ['date', 'birthday']

  return (
    <>
      {
        evs.map(ev => {
          <FlipClockCountdown
            key={ev}
            to={new Date().getTime() + 10000}
            showLabels={true}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
            labelStyle={{ fontSize: 16, fontWeight: 900, textTransform: 'uppercase', color: 'black' }}
            onComplete={() => { handleComplete() }}
          />
        })
      }
    </>
  )
}

export default App
