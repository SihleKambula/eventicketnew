// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

//icons
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function TicketCard({
  startPrice,
  date,
  startTime,
  endTime,
  eventLocation,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: "100%",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <CardContent>
        <Stack
          direction='row'
          spacing={1}
          alignItems='center'
          sx={{ marginBottom: "10px" }}
        >
          <Typography>From</Typography>
          <Typography variant='h4' component='span' color='primary'>
            R{startPrice}
          </Typography>
        </Stack>

        <Divider />
        <Stack
          direction='row'
          spacing={2}
          alignItems='center'
          sx={{ marginTop: "20px" }}
        >
          <CalendarTodayOutlinedIcon color='primary' />
          <Typography>
            {date} {startTime} - {endTime}
          </Typography>
        </Stack>

        <Stack
          direction='row'
          spacing={2}
          alignItems='center'
          sx={{ marginY: "20px" }}
        >
          <FmdGoodOutlinedIcon color='primary' />
          <Typography>{eventLocation}</Typography>
        </Stack>

        <Divider />
        <Box
          sx={{
            marginTop: "20px",
            justifyItems: "center",
            alignContent: "center",
          }}
        >
          <Button variant='contained'>
            <Typography>Tickets</Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
