import { Button, Link } from "@mui/material";
// import logo from '../assets/imgs/JK-logo.png'

const Home = () => {
  
  return (
    <div className="home">
    {/* <div className='header-name'>
    <Button>
      <Link href={'/'} underline='none' color={'#5cb6bd'}>
        <img src= {logo} alt='logo' width={200} display='flex'/> 
      </Link>
    </Button>
  </div> */}
      <div className="gallery-button">
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
      </div>
      <div className="shop-button">
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
      </div>
      <div className="shop-button">
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
           <Link href={'/contact'} underline='none' color={'ivory'}>Contact</Link>

        </Button>
      </div>
    </div>
  )
}

export default Home