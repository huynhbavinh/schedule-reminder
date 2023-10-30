import ClockComponent from './components/clock.component'
import Responsive84 from './grid/responsive84'

function App() {
  return (
    <>
      <Responsive84 leftContent={'LEFT'} rightContent={<ClockComponent eventName={'Date'}/>} />
    </>
  )
}

export default App
