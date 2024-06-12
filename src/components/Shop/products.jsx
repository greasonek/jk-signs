import productData from "../../data.json"
import Product from "./product"
// map through product data and pass individual data to product component

const Products = () => {
  return (
    <div>{productData.map(product => <Product key={product.title} product={product}/>)}</div>
  )
}

export default Products