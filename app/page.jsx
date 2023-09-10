//Material UI
import { Container, Grid } from "@mui/material";
import EventCard from "@/components/EventCard";

//Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default async function Home() {
  //get events from Database
  const eventCollection = collection(db, "events");
  const eventSnapshot = await getDocs(eventCollection);

  return (
    <main>
      <Container sx={{ marginTop: "20px" }}>
        {eventSnapshot && (
          <Grid container spacing={2}>
            {eventSnapshot.docs.map((doc) => (
              <Grid key={doc.id} item xs={12} sm={6} md={4}>
                <EventCard event={doc.data()} id={doc.id} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </main>
  );
}
