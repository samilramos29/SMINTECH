import { useState } from 'react'
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom'
import './web.css'
import { productos } from '../data/productos'
import { useCart } from '../context/useCart'
import { CarritoPanel } from './CarritoPanel'

function App() {
  const { agregarAlCarrito, cantidadTotal, abrirCarrito } = useCart()
  const [agregadoId, setAgregadoId] = useState<number | null>(null)

  const manejarAgregar = (producto: (typeof productos)[number]) => {
    agregarAlCarrito(producto)
    setAgregadoId(producto.id)
    window.setTimeout(() => {
      setAgregadoId((actual) => (actual === producto.id ? null : actual))
    }, 1200)
  }

  return (
    <div id="contenedor-principal">
      <header id="encabezado">
        <div>
             <h1><b>SMINTECH</b></h1>
        </div>
        <nav id="navegacion">
          <a href="#productos">Productos</a>
          <a href="#contacto">About</a>
          <a href="#contacto">Contactos</a>
          <a href="/login">Login</a>
          <button className="carrito-boton" onClick={abrirCarrito}><ShoppingCart />{cantidadTotal > 0 && <span className="carrito-badge">{cantidadTotal}</span>}
          </button>
        </nav>
      </header>

      <main id="seccion-productos">
        <div id="grid-productos">
          {productos.map((producto) => (
            <article key={producto.id} className="tarjeta-producto">
              <Link to={`/producto/${producto.id}`} className="tarjeta-enlace">
                <div className="tarjeta-imagen-contenedor">
                  <img
                    className="tarjeta-imagen"
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                </div>
                <div className="tarjeta-contenido">
                  <h3 className="tarjeta-nombre">{producto.nombre}</h3>
                  <p className="tarjeta-descripcion">{producto.descripcion}</p>
                  <p className="tarjeta-precio">${producto.precio.toFixed(2)}</p>
                </div>
              </Link>
              <div className="tarjeta-boton-contenedor">
                <button
                  className={`tarjeta-boton${agregadoId === producto.id ? ' agregado' : ''}`}
                  onClick={() => manejarAgregar(producto)}
                >
                  {agregadoId === producto.id ? 'Agregado ✓' : 'Agregar al carrito'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer id="pie-de-pagina">
        <p>&copy; 2026 Mi Tienda. Todos los derechos reservados.</p>
      </footer>

      <CarritoPanel />
    </div>
  )
}

export default App
