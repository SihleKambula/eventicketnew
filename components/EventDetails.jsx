//MUI
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function EventDetails({ imageUrl, eventName }) {
  return (
    <Card sx={{ maxWidth: "100%" }} elevation={0}>
      <CardActionArea>
        <CardMedia component='img' image={imageUrl} alt={eventName} />
        <CardContent>
          <Typography fontWeight={600}>{eventName}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
