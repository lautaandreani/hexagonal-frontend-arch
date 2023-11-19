import { Product } from '../models/product'
import { Basket } from '../models/basket'
import { generateUid } from '../../infraestructure/uid/uid'

const hasProduct = (basket: Basket, product: Product) =>
  basket.items.find((item) => item.id === product.id)

const createBasket = (product: Product): Basket => ({
  id: generateUid(),
  items: [product],
})

const increaseBasket = (basket: Basket, product: Product): Basket => ({
  ...basket,
  items: [...basket.items, product],
})

const addProductToBasket = (
  product: Product,
  basket?: Basket | null
): Basket => {
  if (basket) {
    if (hasProduct(basket, product)) {
      return basket
    } else {
      return increaseBasket(basket, product)
    }
  } else {
    return createBasket(product)
  }
}

export const basketService = {
  addProductToBasket,
}
