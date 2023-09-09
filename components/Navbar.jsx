//NextJS
import Link from "next/link";

//Material UI
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//Zustand
// import { useCart } from "@/store/store";

export default function Navbar() {
  //   const { items } = useCart((state) => state);
  return (
    <nav>
      <AppBar position='sticky' color='transparent' elevation={2}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link href='/' style={{ textDecoration: "none" }}>
              <Typography
                variant='h6'
                color='primary'
                sx={{
                  mr: 2,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Eventicket
              </Typography>
            </Link>

            <Box>
              <Stack direction='row' spacing={1} alignItems='center'>
                <Link href={`/cart`}>
                  <IconButton color='primary' size='large' aria-label='cart'>
                    <Badge badgeContent={0} color='primary'>
                      <ShoppingCartOutlinedIcon fontSize='inherit' />
                    </Badge>
                  </IconButton>
                </Link>
                <Link href='/'>
                  <Button variant='outlined' sx={{ background: "#fff" }}>
                    Login
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
