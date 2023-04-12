import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import { Link, useLocation } from "react-router-dom";
import { FC } from "react";

 const Header: FC = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          {pathname != "/" ? (
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </Link>
          ) : (
            <Typography variant="h6">Star Wars</Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
