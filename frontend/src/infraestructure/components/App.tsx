import { useState } from 'react'
import { ProductList } from './product-list'
import { Basket } from '../../domain/models/basket'
import { Product } from '../../domain/models/product'
import { basketService } from '../../domain/services/basket.service'

const App: React.FC = () => {
  const [basket, setBasket] = useState<Basket | null>(null)

  const handleAddToCart = (product: Product) => {
    setBasket(basketService.addProductToBasket(product, basket))
  }

  return (
    <div className='App'>
      <ProductList onSelectProduct={handleAddToCart} />
      {basket && <p>Items on basket: {basket.items.length}</p>}
    </div>
  )
}

export default App
