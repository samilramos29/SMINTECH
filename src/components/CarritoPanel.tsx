import { useState } from 'react'
import { useCart } from '../context/useCart'
import { claveItem } from '../context/cart'

export function CarritoPanel() {
  const {
    items,
    quitarDelCarrito,
    cambiarCantidad,
    vaciarCarrito,
    total,
    carritoAbierto,
    cerrarCarrito,
  } = useCart()
  const [pagando, setPagando] = useState(false)

  if (!carritoAbierto) return null

  const manejarCheckout = () => {
    if (items.length === 0) return

    const sinEnlace = items.filter((item) => !item.pagoUrl)
    if (sinEnlace.length > 0) {
      alert(
        `Estos productos aún no tienen enlace de pago: ${sinEnlace
          .map((item) => item.nombre)
          .join(', ')}`
      )
      return
    }

    setPagando(true)

    const enlaces = items.map((item) => item.pagoUrl) as string[]

    window.location.href = enlaces[0]
    cerrarCarrito()
  }

  return (
    <div className="carrito-overlay" onClick={cerrarCarrito}>
      <aside
        className="carrito-panel"
        onClick={(e) => e.stopPropagation()}
        aria-label="Carrito de compras"
      >
        <div className="carrito-header">
          <h2>Tu carrito</h2>
          <button className="carrito-cerrar" onClick={cerrarCarrito} aria-label="Cerrar carrito">
            &times;
          </button>
        </div>

        {items.length === 0 ? (
          <p className="carrito-vacio">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="carrito-lista">
              {items.map((item) => (
                <li key={claveItem(item)} className="carrito-item">
                  <img src={item.imagen} alt={item.nombre} className="carrito-imagen" />
                  <div className="carrito-info">
                    <p className="carrito-nombre">{item.nombre}</p>
                    <p className="carrito-variantes">
                      {Object.entries(item.variantesSeleccionadas)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(' · ')}
                    </p>
                    <p className="carrito-precio">
                      ${(item.precio * item.cantidad).toFixed(2)}
                    </p>
                    <div className="carrito-controls">
                      <button
                        onClick={() => cambiarCantidad(claveItem(item), item.cantidad - 1)}
                        aria-label="Disminuir cantidad"
                      >
                        &minus;
                      </button>
                      <span>{item.cantidad}</span>
                      <button
                        onClick={() => cambiarCantidad(claveItem(item), item.cantidad + 1)}
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="carrito-eliminar"
                    onClick={() => quitarDelCarrito(claveItem(item))}
                    aria-label={`Eliminar ${item.nombre}`}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>

            <div className="carrito-footer">
              <div className="carrito-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="carrito-checkout" onClick={manejarCheckout} disabled={pagando}>
                {pagando ? 'Redirigiendo…' : 'Finalizar compra'}
              </button>
              <button className="carrito-vaciar" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
