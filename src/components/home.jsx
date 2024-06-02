import { Button, Grid, Link } from "@mui/material";

const Home = () => {
  
  return (
    <Grid 
      className='home'
      container spacing={3} 
      justifyContent={'center'} 
      alignItems={'center'} 
      style={{minHeight: '100vh', position: 'relative', zIndex: 1,
        }}>
          
      <Grid item xs={12} sm={6} md={4} style={{ textAlign: 'center'}} className='gallery-button'>
        <Button 
          variant="contained"
          sx={{
            height:80,
            width: 290,
            fontSize: 28,
            cursor: 'pointer',
          }} 
          style={{
            textDecoration: 'none', 
            color:'ivory', 
            backgroundColor: '#5cb6bd',
            border:'solid 3px #5cb6bd',
            borderRadius: 8,
          }}>
        <Link href={'/gallery'} underline='none' color={'ivory'}>Gallery</Link>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4} style={{ textAlign: 'center'}}>
        <Button 
          variant="contained"
          sx={{
            height:80,
            width: 290,
            fontSize: 28,
            cursor: 'pointer',
          }} 
          style={{
            textDecoration: 'none', 
            color:'ivory', 
            backgroundColor: '#5cb6bd',
            border:'solid 3px #5cb6bd',
            borderRadius: 8,
          }}>
          <Link href={'/shop'} underline='none' color={'ivory'}>Shop</Link>

        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{ textAlign: 'center'}}>
        <Button 
          variant="contained"
          sx={{
            height:80,
            width: 290,
            fontSize: 28,
            cursor: 'pointer',
          }} 
          style={{
            textDecoration: 'none', 
            color:'ivory', 
            backgroundColor: '#5cb6bd',
            border:'solid 3px #5cb6bd',
            borderRadius: 8,
          }}>
           <Link href={'/about'} underline='none' color={'ivory'}>Contact</Link>

        </Button>
      </Grid>
    </Grid>
  )
}

export default Home