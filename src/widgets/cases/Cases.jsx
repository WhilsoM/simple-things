import { ProductItem } from './components/ProductItem'
import { data } from './data/data.js'
import './styles/Cases.css'


export const Cases = () => {
  return (
    <section className="cases">
			<div className="container">
				<div className="products">
          {data.map((product, index) => (
            index === 0 ? 
            <ProductItem
              key={product.title + product.circulation}
              title={product.title}
              desc={product.desc}
              imgPath={product.imgPath}
              circulation={product.circulation}
              className="product-img-pt"
            /> :
            <ProductItem
              key={product.title + product.circulation}
              title={product.title}
              desc={product.desc}
              imgPath={product.imgPath}
              circulation={product.circulation}
            />
          ))}
				</div>
			</div>
		</section>
  )
}
