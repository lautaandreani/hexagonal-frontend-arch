import { productRepository } from "../../infraestructure/respositories/product.respository"

export const productService = {
  getProducts: () => {
    return productRepository.getProducts()
  },
}
