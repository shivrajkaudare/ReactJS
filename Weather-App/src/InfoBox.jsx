import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox() {
  const ImgURL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let weatherInfo = {
    city: "Dlehi",
    feelsLike: 24.84,
    humidity: 84,
    temp: 24.17,
    tempMax: 24.17,
    tempMin: 24.17,
    weather: "overcast clouds",
  };
  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {weatherInfo.temp}</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={ImgURL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temprature - {weatherInfo.temp}&deg;C</p>
            <p>Max.Temperature - {weatherInfo.tempMax}&deg;C</p>
            <p>Min.Temperature - {weatherInfo.tempMin}&deg;C</p>
            <p>
              Weather can be described as <b>{weatherInfo.weather}</b> but feels
              like <b>{weatherInfo.feelsLike}&deg;C</b>
            </p>
            <p>Humadity - {weatherInfo.humidity}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
