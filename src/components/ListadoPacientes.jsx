import { useEffect } from "react"
import { Pedido } from "./Pedido"

export const ListadoPacientes = ({ pedidos, edit, deliteUser }) => {
  console.log(pedidos)

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
            Shipping List</p>
          <a href=""
            style={{
              color: 'white',
              fontWeight: '300',
              textDecoration: 'none',
            }}>
            Manage orders and
            <span
              style={{
                color: '#BB8FCE',
                fontWeight: '100',
              }}> Shipping</span>
          </a>
          {pedidos.map((pedido) => (
            <Pedido
              edit={edit}
              key={pedido.id}
              pedido={pedido}
              deliteUser={deliteUser}
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
