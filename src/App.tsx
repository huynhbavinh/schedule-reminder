import PlusButton from './common/plus.button'
import ClockComponent from './components/clock.component'
import ListComponent from './components/list.component'
import Responsive84 from './grid/responsive84'
import LeftContentWrapper from './wrappers/leftcontent.wrapper'

function App() {
  const listEvent = [
    { date: new Date('2023-11-03T00:00:00Z'), eventName: 'Date' },
    { date: new Date('2023-11-03T00:00:00Z'), eventName: 'Date1' },
    { date: new Date('2023-11-03T00:00:00Z'), eventName: 'Date2' },
    { date: new Date('2023-11-03T00:00:00Z'), eventName: 'Date3' },
    { date: new Date('2023-11-03T00:00:00Z'), eventName: 'Date4' },
    { date: new Date('2023-11-03T00:00:00Z'), eventName: 'Workday' }
  ]
  const leftContents = [
    <ListComponent listEvents={listEvent} key="1stEle" />,
    <PlusButton buttonTitle={'Add event'} key="lastEle" />
  ]
  return (
    <>
      <Responsive84 leftContent={<LeftContentWrapper elements={leftContents} />} rightContent={<ClockComponent eventName={'Date'} />} />
    </>
  )
}

export default App
