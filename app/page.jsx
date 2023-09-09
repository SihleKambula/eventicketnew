import { db } from "../firebase/config";

//Material UI
import { Container, Grid } from "@mui/material";
import EventCard from "@/components/EventCard";

//Firebase
import { collection, getDocs } from "firebase/firestore";

export default async function Home() {
  //get events from Database
  const eventCollection = collection(db, "events");
  const eventSnapshot = await getDocs(eventCollection);
  const events = eventSnapshot.docs.map((doc) => doc.data());

  return (
    <main>
      <Container sx={{ marginTop: "20px" }}>
        {events && (
          <Grid container spacing={2}>
            {events.map((event, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </main>
  );
}
