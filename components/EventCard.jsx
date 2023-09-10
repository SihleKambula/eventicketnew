import Link from "next/link";

//Material UI'
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

//Component
export default function EventCard({ event, id }) {
  const {
    startPrice,
    eventLocation,
    date,
    startTime,
    endTime,
    eventName,
    imageUrl,
  } = event;
  return (
    <Link href={`/event/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }} elevation={0}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='200px'
            image={imageUrl}
            alt='green iguana'
          />
          <CardContent>
            <Typography fontWeight={600}>{eventName}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {eventLocation}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {date}, {startTime}- {endTime}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              R{startPrice}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
