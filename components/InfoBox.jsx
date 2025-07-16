import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import  './Infobox.css';



export default function InfoBox ({info}){
  const rainUrl ="https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const coldUrl = "https://images.unsplash.com/photo-1705077826486-84ab2c1ba78a?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const hotUrl = "https://images.unsplash.com/photo-1706694668166-d09c91016064?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 
  return(
    <div className='infoBox'>
      <div>
     <Card sx={{ minWidth:345  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? rainUrl : info.temp > 15 ? hotUrl : coldUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography className='info' component = 'div' variant="body2" sx={{ color: 'text.secondary'}}>
        <p>temp: {info.temp}&deg;C</p>
        <p> feelsLike:{info.feelsLike}&deg;C</p>
        <p>tempMin:{info.tempMin} &deg;C</p>
        <p>tempMax: {info.tempMax}&deg;C</p>
       <p>humidity:{info.humidity}%</p> 
        <p>weather: {info.weather}</p>
       
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>
    </div>
  )
}