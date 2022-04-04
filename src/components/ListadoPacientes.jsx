import { Pedido } from "./Pedido"

export const ListadoPacientes = ({ pedidos, setPedidoEdit }) => {

  return (
    <div style={{
      textAlign: 'center',
      overflowY: 'scroll',
      margin: '0 auto',
      height: '800px',
    }}
      className="media">
      {pedidos && pedidos.length ? (
        <>
          <p
            style={{
              fontSize: '1.8em',
              textAlign: 'center',
            }}>
            Listado de envios</p>
          <a href=""
            style={{
              color: 'white',
              fontWeight: '300',
              textDecoration: 'none',
            }}>
            Adminstra pedidos y
            <span
              style={{
                color: '#BB8FCE',
                fontWeight: '100',
              }}> Envios</span>
          </a>
          {pedidos.map((pedido) => (
            <Pedido
              key={pedido.id}
              pedido={pedido}
              setPedidoEdit={setPedidoEdit}
            />
          )
          )}
        </>
      ) : (
        <>
          <p
            style={{
              fontSize: '1.8em',
              textAlign: 'center',
            }}>
            No hay pedidos</p>
        </>
      )

      }


    </div>
  )
}
