export default function H1(props) {
    return (
        <h1 className={"content-h1"} {...props}>
            {props.children}
        </h1>
    )
}