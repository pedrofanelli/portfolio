import { useState, MouseEvent, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./Navbar.scss";
import transitionOpacity from "../utils/transitionOpacity";
import { Link } from "@mui/material";

function Navbar() {
  useEffect(() => {
    let nav = document.querySelectorAll("#navv");
    transitionOpacity(nav);
  }, []);
  const pages = ["The Movie Database", "The Mobile Factory", "Broken Office"];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [prjBtn, setPrjBtn] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleProjBtnOpen = (event: MouseEvent<HTMLElement>) => {
    setPrjBtn(event.currentTarget);
  };

  const handleProjBtnClose = () => {
    setPrjBtn(null);
  };

  return (
    <AppBar id="navv" position="static" sx={{ backgroundColor: "#F03A47" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AutoAwesomeIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            fontSize="large"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              fontSize: "2.5em",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              ":hover": { textShadow: "1px 1px 4px white" },
            }}
          >
            PJFE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              disableScrollLock={true}
              MenuListProps={{ sx: { bgcolor: "#525a61", color: "white" } }}
            >
              {pages.map((page, i) => (
                <Link key={page} href={`#card${i + 1}`} color="inherit" underline="none">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AutoAwesomeIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            fontSize="large"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontSize: "2.5em",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              ":hover": { textShadow: "1px 1px 4px white" },
            }}
          >
            PJFE
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "20px",
            }}
          >
            <Tooltip title="">
              <Button
                id="myProjects"
                onClick={handleProjBtnOpen}
                //onMouseOver={handleProjBtnOpen}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "20px",
                }}
              >
                ⬇ My Projects ⬇
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={prjBtn}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(prjBtn)}
              onClose={handleProjBtnClose}
              //MenuListProps={{onMouseLeave : handleProjBtnClose}}
              disableScrollLock={true}
              MenuListProps={{ sx: { bgcolor: "#525a61", color: "white" } }}
            >
              {pages.map((page, i) => (
                <Link key={page} href={`#card${i + 1}`} color="inherit" underline="none">
                  <MenuItem
                    key={page}
                    onClick={handleProjBtnClose}
                    sx={{ height: "50px" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleProjBtnClose}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "20px",
                ":hover": { textShadow: "1px 1px 4px white" },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
