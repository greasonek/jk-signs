import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const Product = ({product}) => {

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
      <Button size="small">Quick View</Button>
      <Button size="small">Add to Cart</Button>
    </CardActions>
  </Card>
      </Grid>    
    )
}

export default Product