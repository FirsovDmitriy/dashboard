export interface Goods {
  id: number
  categories: string[]
  name: string
  description?: string
  images: string[]
  previewImage: string
  unit?: any
  slug?: string
  price: number
  rating?: number
  discount?: number
  size?: string[]
  brand?: string
  colors?: string[]
  published?: boolean
  status?: string  
}