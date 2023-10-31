
interface IProps {
    elements: Array<JSX.Element>
    title?: string,
}

function LeftContentWrapper(props: IProps) {
    const { elements, title } = props

    return (
        <>
            <h1>{title ?? "Upcoming event"}</h1>
            {elements.map(el=> {
                return(
                    {el}
                )
            })}
        </>
    )
}
export default LeftContentWrapper;