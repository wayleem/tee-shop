export interface Product {
  id: string
  name: string
  price: number
  description?: string
  sizes?: string[]
  colors?: string[]
  imageURL?: string
}

export interface CartItem extends Product {
  quantity: number
}
