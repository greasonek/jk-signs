import { Grid } from "@mui/material"
const About = () => {
  return (
    <Grid container spacing={3} justifyContent={'center'} alignItems={'center'} 
      style={{
        minHeight: '100vh', 
        position: 'relative', 
        zIndex: 1,
        margin: 'auto'
    }}>
      <Grid item xs={12} sm={8} md={4} style={{ alignContent:'center'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit felis at interdum maximus. Nunc vitae egestas diam. Nunc feugiat nibh quis lobortis ullamcorper. Praesent volutpat sit amet lorem eu tincidunt. Etiam nec molestie neque, ut finibus mi. Morbi laoreet accumsan blandit. Nunc semper risus vitae elementum malesuada. Integer nec ultricies felis. Nullam tristique, lectus in mollis vulputate, odio ipsum pellentesque libero, ac rutrum quam erat non diam. Curabitur hendrerit ligula vel aliquet interdum. In vitae gravida lorem. Nam at sapien vitae purus pulvinar tincidunt. Suspendisse sed aliquam mauris.
       <br/>
       <br/>
        Duis iaculis eros fermentum luctus pretium. Mauris imperdiet lectus scelerisque, feugiat velit in, viverra massa. Pellentesque pellentesque posuere arcu. Aenean vel elementum neque. Ut id sapien rhoncus eros lobortis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam velit ante, lobortis vel pharetra sed, lacinia sit amet tortor. Sed convallis mi odio, in venenatis erat imperdiet sed. Nam et pulvinar ipsum. Vivamus hendrerit commodo massa, vitae consequat risus mattis tempor. Aenean nec orci vel velit dictum luctus sodales ut sem.
      </Grid>

    </Grid>
  )
}

export default About