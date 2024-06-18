import { Card, CardContent, CardMedia, Modal, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// import productSlice from '../../store/product';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductModal = () => {
  const product = useSelector((state) => state.selectedProduct)

  return (
      <Modal
          open={product !== undefined}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        {product ? <Card style={style}>
          <CardMedia
            sx={{ height: 250 }}
            image={product?.image}
            title={product?.title}
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small" onClick={handleClick}>Quick View</Button>
          <Button size="small">Add to Cart</Button>
        </CardActions> */}
    </Card> : <></>}
        </Modal>
  )
}


export default ProductModal;