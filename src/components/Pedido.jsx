

export const Pedido = ({ pedido, edit, deliteUser }) => {
    const handledDelite = () => {
        const respuesta = confirm('Deseas elimar este paciente');
        respuesta && deliteUser(pedido.id)
    }

    return (
        <div style={{
            backgroundColor: 'white',
            margin: '20px',
            padding: '10px 35px',
            borderRadius: '5px',
            color: 'black',
            textAlign:'left',
            fontSize: '1.2em',
        }}>
            <p
                style={{
                    fontweight: 'bold',

                }}>Name: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.name}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',

                }}>Address: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.address}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',

                }}>Email: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.email}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',

                }}>N°: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.number}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',

                }}>Shipping date: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.date}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',

                }}>Description: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.description}</span>
            </p>
            <div style={{ display: 'flex', gap: '30px' }}>
                <button type="button"
                    className="btn"
                    style={{
                        width: '100%',
                        padding: '15px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                    }}
                    onClick={() => { edit(pedido) }}
                >Edit</button>
                <button type="button"
                    className="btnDelete"
                    onClick={handledDelite}
                    style={{
                        width: '100%',
                        padding: '15px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                    }}>Remove</button>
            </div>

        </div>
    );
}