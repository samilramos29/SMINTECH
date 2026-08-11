import { createContext } from 'react'
export interface Variante {
  nombre: string
  opciones: string[]

}

export interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  pagoUrl?: string
  variantes?: Variante[]
}

export interface CartItem extends Producto {
  cantidad: number
  variantesSeleccionadas: Record<string, string>
}

export function claveItem(item: { id: number; variantesSeleccionadas: Record<string, string> }) {
  const claves = Object.entries(item.variantesSeleccionadas)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}:${v}`)
    .join('|')
  return `${item.id}::${claves}`
}

export interface CartContextValue {
  items: CartItem[]
  agregarAlCarrito: (
    producto: Producto,
    variantesSeleccionadas?: Record<string, string>,
    cantidad?: number
  ) => void
  quitarDelCarrito: (clave: string) => void
  cambiarCantidad: (clave: string, cantidad: number) => void
  vaciarCarrito: () => void
  total: number
  cantidadTotal: number
  carritoAbierto: boolean
  abrirCarrito: () => void
  cerrarCarrito: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
