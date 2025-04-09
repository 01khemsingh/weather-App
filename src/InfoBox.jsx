import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Info.css'



export default function InfoBox({info}) {
    const INIT=
    "https://media.istockphoto.com/id/856939024/photo/cracked-earth-soil-sunset-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=YVBo2vZ_sd2SZiaNTP8Kh6eFp0D887vqT_TeOS9KrPw="
   
 
    return(<div className="InfoBox">
        <div className='CardContent'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image={INIT}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>temperature={info.temp}&deg;c</p>
        <p>MIN temp ={info.tempMin}</p>
        <p>MAX temp ={info.tempMax}</p>
        <p>Humidity ={info.humidity}</p>
        <p>the weather can be described as <i>{info.weather}</i> and feela like{info.feelslike}&deg;c</p>
    

        </Typography>
      </CardContent>
     
     
    </Card>
    </div>
        
        </div>
        
    );
}