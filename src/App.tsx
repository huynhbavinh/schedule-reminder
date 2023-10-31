import ClockComponent from './components/clock.component'
import ListComponent from './components/list.component'
import Responsive84 from './grid/responsive84'

function App() {
  const listEvent = [{ date: new Date('2023-11-03T00:00:00Z'), eventName: 'Date' }]
  return (
    <>
      <Responsive84 leftContent={<ListComponent listEvents={listEvent} />} rightContent={<ClockComponent eventName={'Date'} />} />
    </>
  )
}

export default App
