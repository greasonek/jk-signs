import productData from "../../data.json"
import Product from "./product"
import { Grid } from "@mui/material"
// map through product data and pass individual data to product component

const Products = () => {
  return (
    <Grid container spacing={3} marginTop={'16px'}>
      {productData.map((product) => 
        <Product key={product.title} product={product}/>)}
    </Grid>
  )
}

export default Products