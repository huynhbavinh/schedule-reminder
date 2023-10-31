const getClosestDate = (listDate: Array<Date>) => {
    return listDate.map(date => {
        return new Date(date).getTime();
    }).sort(function (a, b) {
        return a - b;
    });
}

interface EventC {
    id: number,
    date: Date,
    eventName: string,
    note: string
}
interface Schedule extends Array<EventC> { }

const KEY_STORAGE = 'schedule'
const storageSchedule = (schedule: Schedule) => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(schedule))
}

const getScheduleFromStorage = () => {
    const schedule = JSON.parse(localStorage.getItem(KEY_STORAGE) || '{}')
    return Object.keys(schedule).length === 0 
        ? [{ id: 1, eventName: "Let's setup new event", date: (new Date(Date.now()).getTime()+ 1*60*60*1000), note: "NOTE: You don't have any plan, let's setup new one" }] 
        : schedule
}

const removeSchedule = (id: number) => {
    const schedule = JSON.parse(localStorage.getItem(KEY_STORAGE) || '{}')
    if (schedule.length > 1) {
        const newSch = schedule.filter((ev: { id: number; }) => (ev.id !== id))
        storageSchedule(newSch)
    }
}

export {
    getClosestDate,
    storageSchedule,
    getScheduleFromStorage,
    removeSchedule,
}