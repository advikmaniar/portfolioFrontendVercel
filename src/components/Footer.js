import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  Typography
} from "@mui/material";
import { CloseRounded as CloseRoundedIcon, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { FaKaggle } from "react-icons/fa";
import { Link } from "react-router-dom";
import NameLogo from "./NameLogo";
import SkillsSidebar from "../skillsPage/SkillsSidebar";
import ContactPopup from './ContactPopup';
import { StyledIcons } from "../utils/utils";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" to="/home">
        Advik Maniar
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const handleContactModal = () => setContactModalOpen((prev) => !prev);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 1, sm: 2 },
          py: { xs: 1, sm: 2 },
          textAlign: { sm: "center", md: "left" }
        }}
      >
        {/* Footer Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "20px",
            padding: 2,
            backgroundColor: "background.paper",
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NameLogo />
          </Box>
          {/* <Button
            onClick={handleContactModal}
            variant="contained"
            color="primary"
            size="small"
            sx={{ ml: 2, flexShrink: 0 }}
          >
            Get in touch!
          </Button> */}
          {isSmallScreen ? (
            <IconButton onClick={toggleDrawer(true)} sx={{ ml: "auto" }}>
              ☰
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="text" color="info" size="small" component={Link} to="/home">
                HOME
              </Button>
              <Button variant="text" color="info" size="small" component={Link} to="/about">
                ABOUT
              </Button>
              <Button variant="text" color="info" size="small" component={Link} to="/projects">
                MY WORK
              </Button>
              <Button variant="text" color="info" size="small" onClick={toggleSidebar}>
                SKILLS
              </Button>
              <Button variant="text" color="info" size="small" onClick={handleContactModal}>
                CONTACT
              </Button>
            </Box>
          )}
        </Box>

        {/* Bottom Section: Copyright & Social Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 1, sm: 2 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider"
          }}
        >
          <Copyright />
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left", color: "text.secondary" }}
          >
            <StyledIcons
              color="linkedin"
              bgColor="#0077b5"
              hoverColor="#005c8a"
              icon={<LinkedIn fontSize="medium" />}
              url="https://www.linkedin.com/in/advikmaniar/"
            />
            <StyledIcons
              color="github"
              bgColor="#333"
              hoverColor="#444"
              icon={<GitHub fontSize="medium" />}
              url="https://github.com/advikmaniar"
            />
            <StyledIcons
              color="kaggle"
              bgColor="#1da1f2"
              hoverColor="#1991c6"
              icon={<FaKaggle fontSize="medium" />}
              url="https://www.kaggle.com/advikmaniar"
            />
            <StyledIcons
              color="instagram"
              bgColor="#e4405f"
              hoverColor="#b32f46"
              icon={<Instagram fontSize="medium" />}
              url="https://www.instagram.com/advik0220/"
            />
          </Stack>
        </Box>
      </Container>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { top: "var(--template-frame-height, 0px)" } }}
      >
        <Box sx={{ p: 2, backgroundColor: "background.default" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <MenuItem component={Link} to="/home" onClick={toggleDrawer(false)}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={toggleDrawer(false)}>
            About
          </MenuItem>
          <MenuItem component={Link} to="/projects" onClick={toggleDrawer(false)}>
            My Work
          </MenuItem>
          <MenuItem onClick={toggleSidebar}>Skills</MenuItem>
          <MenuItem onClick={handleContactModal}>Contact</MenuItem>
          <Divider sx={{ my: 3 }} />
        </Box>
      </Drawer>

      {/* Sidebar & Contact Popup */}
      <SkillsSidebar open={sidebarOpen} onClose={toggleSidebar} />
      <ContactPopup open={contactModalOpen} onClose={handleContactModal} />
    </React.Fragment>
  );
}
