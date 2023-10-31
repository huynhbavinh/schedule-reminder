import { BsFillPlusCircleFill } from "react-icons/bs";
import InputEventComponent from "../components/inputEv.component";
import { useState } from "react";

interface EventC {
    id: number;
    date: Date,
    eventName: string,
    note: string
}
interface IProps {
    buttonTitle: string,
    setList: (ev: Array<EventC>) => void,
    listEv: Array<EventC>,
}

function PlusButton(props: IProps) {
    const { buttonTitle, setList, listEv } = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleClick = () => {
        setShow(true)
    }
    return (
        <>
            <button type="button" className="btn btn-outline-info" onClick={handleClick}>
                <BsFillPlusCircleFill /> {buttonTitle}
            </button>
            <InputEventComponent handleClose={handleClose} isShow={show} setList={setList} listEv={listEv} />
        </>
    )
}

export default PlusButton