import { useState } from 'react'
import PlusButton from './common/plus.button'
import ClockComponent from './components/clock.component'
import ListComponent from './components/list.component'
import Responsive84 from './grid/responsive84'
import LeftContentWrapper from './wrappers/leftcontent.wrapper'
import { getClosestDate, getScheduleFromStorage, storageSchedule } from './utils/utils'

function App() {
  const listEvent = getScheduleFromStorage();

  const sortClosestDay = (getClosestDate(listEvent.map((e: { date: Date }) => (e.date))))
    .map((e, i) => ({ id: i+1, date: new Date(e), eventName: '', note: '' }))
    .filter(e => (e.date.getTime() > new Date(Date.now()).getTime()))

  for (let index = 0; index < listEvent.length; index++) {
    for (let index1 = 0; index1 < sortClosestDay.length; index1++) {
      if (new Date(listEvent[index].date).getTime() === new Date(sortClosestDay[index1].date).getTime()) {
        sortClosestDay[index1].eventName = listEvent[index].eventName
        sortClosestDay[index1].note = listEvent[index].note
      }
    }
  }

  const [target, setTarget] = useState(sortClosestDay[0] || { eventName: '', date: new Date(), note: '' });
  const [listEv, setListEv] = useState(sortClosestDay);

  storageSchedule(listEv)

  const leftContents = [
    <ListComponent listEvents={sortClosestDay} setTarget={setTarget} key="1stEle" />,
    <PlusButton buttonTitle={'Add event'} setList={setListEv} listEv={listEv} key="lastEle" />
  ]
  return (
    <>
      <Responsive84
        leftContent={<LeftContentWrapper elements={leftContents} title='Your schedule' />}
        rightContent={<ClockComponent eventName={target.eventName} date={target.date} note={target.note} />}
      />
    </>
  )
}

export default App
