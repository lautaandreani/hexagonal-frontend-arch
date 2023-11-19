import { http } from "../http/http"
import { ProductDTO } from "../http/dto/product.dto"
import { Product } from "../../domain/models/product"

const BASE_URL = "http://localhost:3001"

export const productRepository = {
  getProducts: async () => {
    const products = await http.get<ProductDTO[]>(`${BASE_URL}/products`)

    return products.map(
      (productDto): Product => ({
        id: productDto.product_id,
        title: productDto.title,
        price: Number(productDto.price),
      })
    )
  },
}
