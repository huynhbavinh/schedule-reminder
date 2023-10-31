import { BsFillPlusCircleFill } from "react-icons/bs";

interface IProps {
    buttonTitle: string
}

function PlusButton(props: IProps) {
    const { buttonTitle } = props;
    return(
        <button type="button" className="btn btn-outline-info">
            <BsFillPlusCircleFill /> {buttonTitle}
        </button>
    )
}

export default PlusButton