
interface IProps {
    elements: Array<JSX.Element>
    title?: string,
}

function LeftContentWrapper(props: IProps) {
    const { elements, title } = props

    return (
        <>
            <h1>{title ?? "None Event on schedule"}</h1>
            {elements}
        </>
    )
}
export default LeftContentWrapper;