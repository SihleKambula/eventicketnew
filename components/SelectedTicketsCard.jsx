"use client";
//mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

//firebase
import { db } from "@/firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function SelectedTicketsCard({ id }) {
  const [event, setEvent] = useState({});

  const getEvent = async () => {
    const docCollection = collection(db, "events");
    const docRef = doc(docCollection, id);
    const docSnap = await getDoc(docRef);
    setEvent(docSnap.data());
  };
  useEffect(() => {
    getEvent();
  });

  return (
    <Card elevation={0} sx={{ marginTop: "105px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={event.imageUrl}
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' fontWeight='600'>
          {event.eventName}
        </Typography>
        <Stack direction='row' justifyContent='space-between'>
          <Box>
            <Typography fontWeight='600' color='text.secondary'>
              Order Summary
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight='600' color='text.secondary'>
              QTY
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight='600' color='text.secondary'>
              Amount
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography>Stuff</Typography>
        </Box>
        <Divider />
        <Stack
          direction='row'
          justifyContent='space-between'
          sx={{ marginTop: "20px" }}
        >
          <Typography fontWeight='600' color='text.secondary'>
            Total
          </Typography>
          <Typography fontWeight='600' color='text.secondary'>
            R0.00
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
