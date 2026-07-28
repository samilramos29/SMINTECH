import './web.css'

const productos = [
  {
    id: 1,
    nombre: 'Apple MacBook Air M3',
    descripcion: 'Laptop ultraligera con chip Apple M3, pantalla Liquid Retina de 13.6" y 16 GB de RAM.',
    precio: 1499.99,
    imagen: '/productos/mac.jpeg',
  },
  {
    id: 2,
    nombre: 'Samsung Galaxy S25 Ultra',
    descripcion: 'Smartphone premium con pantalla AMOLED de 6.9", cámara de 200 MP y 512 GB de almacenamiento.',
    precio: 1299.99,
    imagen: '/productos/Samsung Galaxy S25 Ultra.jpeg',
  },
  {
    id: 3,
    nombre: 'LG UltraGear 27GR95QE',
    descripcion: 'Monitor OLED de 27 pulgadas con resolución QHD, tasa de refresco de 240 Hz y tiempo de respuesta de 0.03 ms.',
    precio: 899.99,
    imagen: '/productos/LG 27_ Ultragear™ OLED QHD Gaming Monitor with 240Hz _03ms GtG & nVIDIA® G-SYNC® Compatible.jpeg',
  },
  {
    id: 4,
    nombre: 'Logitech G Pro X TKL',
    descripcion: 'Teclado mecánico inalámbrico con iluminación RGB y switches GX para alto rendimiento.',
    precio: 199.99,
    imagen: '/productos/Logitech G Teclado PRO X TKL RAPID Gaming in Negro, Danés_Noruego_Sueco_Finlandés (QWERTY).jpeg',
  },
  {
    id: 5,
    nombre: 'Razer DeathAdder V3 Pro',
    descripcion: 'Mouse inalámbrico ergonómico con sensor Focus Pro de 30,000 DPI y batería de larga duración.',
    precio: 149.99,
    imagen: '/productos/Razer Viper V3 Pro.jpeg',
  },
  {
    id: 6,
    nombre: 'Sony WH-1000XM6',
    descripcion: 'Auriculares Bluetooth con cancelación activa de ruido y audio de alta resolución.',
    precio: 449.99,
    imagen: '/productos/Sony WH-1000XM6 Review_ The Best Noise-Canceling Headphones of 2026.jpeg',
  },
]

function App() {
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
        </nav>
      </header>

      <main id="seccion-productos">
        <div id="grid-productos">
          {productos.map((producto) => (
            <article key={producto.id} className="tarjeta-producto">
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
                <button className="tarjeta-boton">Agregar al carrito</button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer id="pie-de-pagina">
        <p>&copy; 2026 Mi Tienda. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
