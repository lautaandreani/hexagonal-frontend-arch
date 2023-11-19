import { useEffect, useState } from "react"
import { Product } from "../../domain/models/product"
import { productService } from "../../domain/services/product.service"

type ProductListProps = {
  onSelectProduct: (product: Product) => void
}

export const ProductList: React.FC<ProductListProps> = ({
  onSelectProduct,
}) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    productService.getProducts().then(setProducts)
  }, [])

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <button
            onClick={() => {
              onSelectProduct(product)
            }}
          >
            {product.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
