import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productos } from '../data/productos'
import { useCart } from '../context/useCart'
import './web.css'

export function ProductoDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { agregarAlCarrito, abrirCarrito } = useCart()

  const producto = productos.find((p) => p.id === Number(id))

  const [seleccion, setSeleccion] = useState<Record<string, string>>({})
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)
  const [comprando, setComprando] = useState(false)

  if (!producto) {
    return (
      <div className="detalle-no-encontrado">
        <h2>Producto no encontrado</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    )
  }

  const elegirOpcion = (nombre: string, opcion: string) => {
    setSeleccion((prev) => ({ ...prev, [nombre]: opcion }))
  }

  const manejarAgregar = () => {
    agregarAlCarrito(producto, seleccion, cantidad)
    setAgregado(true)
    window.setTimeout(() => setAgregado(false), 1200)
    abrirCarrito()
  }

  const manejarComprar = () => {
    if (!producto.pagoUrl) {
      alert('Este producto aún no tiene enlace de pago. Crea un Payment Link en Stripe y agréguelo en productos.ts.')
      return
    }
    setComprando(true)
    window.location.href = producto.pagoUrl
  }

  return (
    <div id="contenedor-principal">
      <header id="encabezado">
        <div>
          <h1>
            <b>SMINTECH</b>
          </h1>
        </div>
        <nav id="navegacion">
          <Link to="/">Volver a la tienda</Link>
        </nav>
      </header>

      <main className="detalle-contenedor">
        <div className="detalle-imagen-contenedor">
          <img className="detalle-imagen" src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="detalle-info">
          <h2 className="detalle-nombre">{producto.nombre}</h2>
          <p className="detalle-precio">${producto.precio.toFixed(2)}</p>
          <p className="detalle-descripcion">{producto.descripcion}</p>

          {producto.variantes && producto.variantes.length > 0 && (
            <div className="detalle-variantes">
              {producto.variantes.map((variante) => (
                <div key={variante.nombre} className="detalle-variante">
                  <p className="detalle-variante-nombre">{variante.nombre}</p>
                  <div className="detalle-opciones">
                    {variante.opciones.map((opcion) => (
                      <button
                        key={opcion}
                        className={`detalle-opcion${seleccion[variante.nombre] === opcion ? ' activa' : ''}`}
                        onClick={() => elegirOpcion(variante.nombre, opcion)}
                      >
                        {opcion}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="detalle-cantidad">
            <span>Cantidad</span>
            <div className="carrito-controls">
              <button onClick={() => setCantidad((c) => Math.max(1, c - 1))}>&minus;</button>
              <span>{cantidad}</span>
              <button onClick={() => setCantidad((c) => c + 1)}>+</button>
            </div>
          </div>

          <button
            className={`tarjeta-boton detalle-agregar${agregado ? ' agregado' : ''}`}
            onClick={manejarAgregar}
          >
            {agregado ? 'Agregado ✓' : 'Agregar al carrito'}
          </button>

          <button
            className="tarjeta-boton detalle-comprar"
            onClick={manejarComprar}
            disabled={comprando}
          >
            {comprando ? 'Redirigiendo…' : 'Comprar ahora'}
          </button>

          <button className="detalle-volver" onClick={() => navigate(-1)}>
            &larr; Seguir comprando
          </button>
        </div>
      </main>
    </div>
  )
}
