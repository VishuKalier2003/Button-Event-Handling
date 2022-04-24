type ChildProps = {
    children?: React.ReactNode
}

export const ChildNode = (props: ChildProps) => {
    return (
        <div>{props.children}</div>
    )
}