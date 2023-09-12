"use client";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

//icons
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

export default function TicketType({ ticket }) {
  const [quan, setQuan] = useState(0);

  const { ticketType, price, quantity } = ticket;

  const handleAdd = () => {
    if (quan < quantity) {
      setQuan(quan + 1);
    }
  };
  const handleRemove = () => {
    if (quan > 0) {
      setQuan(quan - 1);
    }
  };
  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        backgroundColor: "#fff",
      }}
    >
      <Stack direction='row' justifyContent='space-between'>
        <Box>
          <Typography variant='h6'>{ticketType}</Typography>
          <Typography>R {price}</Typography>
        </Box>
        <Box>
          <Stack direction='row' alignItems='center'>
            <IconButton color='primary' onClick={handleRemove}>
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            <Typography>{quan}</Typography>
            <IconButton color='primary' onClick={handleAdd}>
              <ControlPointOutlinedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
      <Stack
        direction='row'
        justifyContent='space-between'
        sx={{ marginTop: "20px" }}
      >
        <Box>
          <Typography>See more</Typography>
        </Box>
        <Box>
          <Typography
            variant='body2'
            fontSize='15px'
            color='text.secondary'
            fontStyle='italic'
          >
            Sales Close 11 September 2023
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
