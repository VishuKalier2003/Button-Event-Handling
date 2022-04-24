type StatusProps = {
    status: string
}

export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading')
    {message = 'Loading...'}
    else if(props.status === 'Found')
    {message = 'Data Fetched successfully!!'}
    else {
        message = 'Fetching Data Failed !!'
    }
    return (
        <div>{message}</div>
    )
}