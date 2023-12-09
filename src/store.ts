import { writable } from 'svelte/store'
import type { CartItem, Product } from './types'

const initialCart: CartItem[] = []
export const cart = writable<CartItem[]>(initialCart)

export function addToCart(product: Product): void {
  cart.update((items) => {
    const existingItemIndex = items.findIndex((item) => item.id === product.id)
    if (existingItemIndex !== -1) {
      // Increase quantity
      const updatedItems = [...items]
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      }
      return updatedItems
    } else {
      // Add new item with quantity 1
      return [...items, { ...product, quantity: 1 }]
    }
  })
}

export function removeFromCart(productId: string): void {
  cart.update((items) => items.filter((item) => item.id !== productId))
}

export function updateQuantity(productId: string, quantity: number): void {
  cart.update((items) => {
    if (quantity < 1) {
      return items.filter((item) => item.id !== productId)
    } else {
      return items.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item,
      )
    }
  })
}
