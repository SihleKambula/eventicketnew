//material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//firebase
import { db } from "@/firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

//Components
import TicketCard from "@/components/TicketCard";
import EventDetails from "@/components/EventDetails";

export default async function Page({ params }) {
  const { id } = params;

  //get single event
  const docCollection = collection(db, "events");
  const docRef = doc(docCollection, id);
  const docSnap = await getDoc(docRef);
  const event = docSnap.data();

  return (
    <>
      {event && (
        <Container sx={{ paddingTop: "50px" }}>
          <Grid container gap={3}>
            <Grid item xs={12} sm={7}>
              <EventDetails
                imageUrl={event.imageUrl}
                eventName={event.eventName}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TicketCard
                startPrice={event.startPrice}
                date={event.date}
                startTime={event.startTime}
                endTime={event.endTime}
                eventLocation={event.eventLocation}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
