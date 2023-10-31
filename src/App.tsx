import { useState } from 'react'
import PlusButton from './common/plus.button'
import ClockComponent from './components/clock.component'
import ListComponent from './components/list.component'
import Responsive84 from './grid/responsive84'
import LeftContentWrapper from './wrappers/leftcontent.wrapper'
import { getClosestDate } from './utils/utils'

function App() {
  const listEvent = [
    { date: new Date('2023-11-03T00:00:00Z'), eventName: 'Date' },
    { date: new Date('2023-11-01T00:00:00Z'), eventName: 'Date1' },
    { date: new Date('2023-11-05T00:00:00Z'), eventName: 'Date2' },
    { date: new Date('2023-11-02T00:00:00Z'), eventName: 'Date3' },
    { date: new Date('2023-11-07T00:00:00Z'), eventName: 'Date4' },
    { date: new Date('2023-11-08T00:00:00Z'), eventName: 'Workday' }
  ]

  const sortClosestDay = (getClosestDate(listEvent.map(e => (e.date)))).map(e => ({ date: new Date(e), eventName: '' }))
  for (let index = 0; index < listEvent.length; index++) {
    for (let index1 = 0; index1 < listEvent.length; index1++) {
      if (new Date(listEvent[index].date).getTime() === new Date(sortClosestDay[index1].date).getTime()) {
        console.log(listEvent[index].eventName)
        sortClosestDay[index1].eventName = listEvent[index].eventName
      }
    }
  }

  const [target, setTarget] = useState(sortClosestDay[0]);


  const leftContents = [
    <ListComponent listEvents={sortClosestDay} key="1stEle" />,
    <PlusButton buttonTitle={'Add event'} key="lastEle" />
  ]
  return (
    <>
      <Responsive84
        leftContent={<LeftContentWrapper elements={leftContents} />}
        rightContent={<ClockComponent eventName={target.eventName} date={target.date} />}
      />
    </>
  )
}

export default App
