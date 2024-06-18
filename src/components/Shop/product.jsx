import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import productSlice from '../../store/product';

const Product = ({product}) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    //dispatch the action to update the selected beast
    //like setting state but we ask the store to do it
    //dispatch the action and pass the action the payload
    dispatch(productSlice.actions.showProduct(product));
  };

  return (
    <Grid item xs={12} sm={4} md={3} display={'flex'} justifyContent={'center'}>
      <Card sx={{ maxWidth: 345, minWidth:345 }}>
          <CardMedia 
            sx={{ height: 250 }}
            image={product.image}
            title={product.title}
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>Quick View</Button>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Card>
    </Grid>    
    )
}

export default Product