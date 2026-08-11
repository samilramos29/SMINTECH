import { useContext } from 'react'
import { CartContext, type CartContextValue } from './cart'

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart debe usarse dentro de <CartProvider>')
  }
  return ctx as CartContextValue
}
