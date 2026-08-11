import { useEffect, useState, type ReactNode } from 'react'
import { CartContext, claveItem, type CartItem, type Producto } from './cart'

const STORAGE_KEY = 'smintech-carrito'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const guardado = localStorage.getItem(STORAGE_KEY)
      return guardado ? (JSON.parse(guardado) as CartItem[]) : []
    } catch {
      return []
    }
  })
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const agregarAlCarrito = (
    producto: Producto,
    variantesSeleccionadas: Record<string, string> = {},
    cantidad = 1
  ) => {
    const nuevo = { ...producto, variantesSeleccionadas }
    setItems((prev) => {
      const clave = claveItem(nuevo)
      const existente = prev.find((item) => claveItem(item) === clave)
      if (existente) {
        return prev.map((item) =>
          claveItem(item) === clave ? { ...item, cantidad: item.cantidad + cantidad } : item
        )
      }
      return [...prev, { ...nuevo, cantidad }]
    })
  }

  const quitarDelCarrito = (clave: string) => {
    setItems((prev) => prev.filter((item) => claveItem(item) !== clave))
  }

  const cambiarCantidad = (clave: string, cantidad: number) => {
    if (cantidad <= 0) {
      quitarDelCarrito(clave)
      return
    }
    setItems((prev) =>
      prev.map((item) => (claveItem(item) === clave ? { ...item, cantidad } : item))
    )
  }

  const vaciarCarrito = () => setItems([])

  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  const cantidadTotal = items.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        agregarAlCarrito,
        quitarDelCarrito,
        cambiarCantidad,
        vaciarCarrito,
        total,
        cantidadTotal,
        carritoAbierto,
        abrirCarrito: () => setCarritoAbierto(true),
        cerrarCarrito: () => setCarritoAbierto(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
