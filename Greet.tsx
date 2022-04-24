type GreetProps = {
    name: string
    num?: number
    loggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { num = 0} = props
    return (
        <div>
            <h2>
                {props.loggedIn
                ? `Welcome ${props.name} meeting at ${props.num} time`
                : `Welcome Guest !!`
                }
            </h2>
        </div>
    )
}