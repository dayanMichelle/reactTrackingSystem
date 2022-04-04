

export const  Error = ({message}) => {
    return (
        <div style={{ backgroundColor: '#890F0D', padding: '1px', margin: '5px', borderRadius: '5px' }}>
            <p style={{ textTransform: 'uppercase', color: 'white' }}>{message}</p>
        </div>
    )
}

