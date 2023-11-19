import { Product } from './product'

type BasketId = string

export type Basket = {
  id: BasketId
  items: Product[]
}
