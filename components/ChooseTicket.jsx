"use client";
//React
import { useEffect, useState } from "react";

//mui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//components
import TicketType from "@/components/TicketType";

//firebase
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";
import SelectedTicketsCard from "@/components/SelectedTicketsCard";

export default function ChooseTicket({ id, handleNext, handleBack }) {
  const [ticketTypes, setTicketType] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, `events/${id}/tickets`),
      (snapshot) => {
        setTicketType(snapshot.docs);
      }
    );
    return () => unsub();
  }, []);
  return (
    <Container
      sx={{
        marginTop: "40px",
        padding: "0",
        borderRadius: "20px",
        overflow: "hidden",
      }}
      disableGutters
    >
      <Grid container>
        <Grid item sm={7} sx={{ padding: "20px" }}>
          <Typography variant='h4' fontWeight='600'>
            Choose your tickets
          </Typography>
          <Typography variant='p' color='GrayText'>
            Select which tickets types you wish to purchase below.
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            {ticketTypes.map((ticketType) => (
              <TicketType ticket={ticketType.data()} />
            ))}
          </Box>
          <Stack direction='row' justifyContent='space-between'>
            <Button onClick={handleBack}>Back</Button>
            <Button variant='contained' onClick={handleNext}>
              Next
            </Button>
          </Stack>
        </Grid>
        <Grid item sm={5}>
          <SelectedTicketsCard id={id} />
        </Grid>
      </Grid>
    </Container>
  );
}
