type ButtonProps = {
    click: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    // The id data member is also passed as parameter
    // Parameter is not empty and has an event 
}

// The Event gives details of various properties of the event when passed in the console
export const Button = (props: ButtonProps) => {
    return (
        // The Event is stated (event) and both the parameters are initialised
        <button onClick={(event) => props.click(event, 2)}>Click Here</button>
    )
}