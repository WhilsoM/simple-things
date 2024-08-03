import { Link } from 'react-router-dom'

export const ProductItem = (
  {title, circulation, imgPath, desc, className}
) => {
  
  return (
    <div className="product">
      <img
        className={`product-img ${className}`}
        src={`/img/cases/${imgPath}`}
        alt={title}
      />
      <h3 className="product-title">{title}</h3>
      <span className="circulation">{circulation}</span>
      <p className="product-desc">{desc}</p>
      <Link to="" className="product-link">Подробнее</Link>
    </div>
  )
}
