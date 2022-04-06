export const Pedido = ({pedido,edit}) => {

    return (
        <div style={{
            backgroundColor: 'white',
            margin: '20px',
            padding: '10px 5px',
            borderRadius: '5px',
            color: 'black',
        }}>
            <p
                style={{
                    fontweight: 'bold',
                    textTransform: 'uppercase',

                }}>Nombre: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.name}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',
                    textTransform: 'uppercase',

                }}>Direccion: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.address}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',
                    textTransform: 'uppercase',

                }}>Email: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.email}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',
                    textTransform: 'uppercase',

                }}>N°: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.number}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',
                    textTransform: 'uppercase',

                }}>Fecha de envio: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.date}</span>
            </p>

            <p
                style={{
                    fontweight: 'bold',
                    textTransform: 'uppercase',

                }}>Description: {''}
                <span style={{
                    fontweight: '100',
                    textTransform: 'Capitalize',
                }}>{pedido.description}</span>
            </p>
            <div style={{display:'flex',gap:'30px'}}>
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
                onClick={()=>{edit(pedido)}}
                >Editar</button>
                <button type="button"
                className="btnDelete"
                style={{
                    width: '100%',
                    padding: '15px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '5px',
                    transition: 'all 0.3s ease',
                }}>Eliminar</button>
            </div>

        </div>
    );
}