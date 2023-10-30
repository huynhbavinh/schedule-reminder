import './App.css'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'

function App() {
  return (
    <>
      <FlipClockCountdown
        to={new Date().getTime() + 10000}
        showLabels={true}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        labelStyle={{ fontSize: 16, fontWeight: 900, textTransform: 'uppercase', color: 'black' }}
      />
    </>
  )
}

export default App
