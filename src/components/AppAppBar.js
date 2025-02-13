import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import MenuItem from "@mui/material/MenuItem"
import Drawer from "@mui/material/Drawer"
import MenuIcon from "@mui/icons-material/Menu"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import NameLogo from "./NameLogo"
import ColorModeIconDropdown from "../theme/ColorModeIconDropdown"
import CVFile from '../assets/Advik_CV.pdf';
import SkillsSidebar from "../skillsPage/SkillsSidebar";
import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import ContactPopup from './ContactPopup'
import { FaHandPointLeft } from "react-icons/fa";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}))

const DownloadCVButton = () => {
  return (
    <Button
      variant="contained"
      href={CVFile}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        bgcolor: "primary.main",
        color: "background.paper",
        borderRadius: "8px",
        width: "fit-content",
        fontWeight: "bold",
        fontSize: "0.8rem",
        padding: "5px 8px",
        boxShadow: 3,
        transition: "all 0.3s ease",
        '&:hover': {
          bgcolor: "primary.dark",
          boxShadow: 6,
          transform: "translateY(-2px)",
        },
      }}
      endIcon={<RiPagesLine />}
    >
      View CV
    </Button>
  )
}

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  }

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  const handleContactModal = () => {
    setContactModalOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)"
      }}
    >
      <Button
        onClick={toggleSidebar}
        sx={{
          position: "fixed",
          top: "4%",
          left: 0,
          height:"fit-content",
          borderRadius: "50% 10px 10px 50%",
          backgroundColor: "background.paper",
          opacity: 0.8,
          transform: "translateY(-50%)",
          zIndex: 1300,
          display: { xs: "none", md: "none", lg: "block" },
          animation: 'pulse 2s infinite',
          justifyItems:"center",
          alignContent:"center",
          fontSize: '1rem',
          fontWeight:"bold",
            '&:hover': {
            scale: 1.05,
            boxShadow: 5,
            },
        }}>
        <span>👈️ View Skills</span>
      </Button>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
      <Container maxWidth="md">
        <StyledToolbar
          variant="dense"
          disableGutters
          sx={{
            backgroundColor: "transparent",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 0,
              backgroundColor: "transparent",
            }}
          >
            <Box
              sx={{
                alignItems: "left",
                borderRadius: "0px 10px 10px 0px",
                backgroundColor: "transparent",
                display: "flex",
              }}
            >
              <NameLogo />
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                borderRadius: "0px 10px 10px 0px",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
                gap: 2,
              }}
            >
              <Button
                variant="text"
                color="info"
                size="small"
                component={Link}
                to="/home"
                onClick={toggleDrawer(false)}
              >
                HOME
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                component={Link}
                to="/about"
                onClick={toggleDrawer(false)}
              >
                ABOUT
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                component={Link}
                to="/projects"
                onClick={toggleDrawer(false)}
              >
                MY WORK
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => { toggleSidebar(); toggleDrawer(false)(); }}>
                SKILLS
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => { handleContactModal(); toggleDrawer(false)(); }}>
                CONTACT
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center"
            }}
          >
            <DownloadCVButton />
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{
            display: { xs: "flex", md: "none" },
            gap: 1
          }}>
            <DownloadCVButton />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)"
                }
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem component={Link} to="/home" onClick={toggleDrawer(false)}>Home</MenuItem>
                <MenuItem component={Link} to="/about" onClick={toggleDrawer(false)}>About</MenuItem>
                <MenuItem component={Link} to="/projects" onClick={toggleDrawer(false)}>My Work</MenuItem>
                <MenuItem onClick={() => { toggleSidebar(); toggleDrawer(false)(); }}>Skills</MenuItem>
                <MenuItem onClick={() => { handleContactModal(); toggleDrawer(false)(); }}>Contact</MenuItem>
                <Divider sx={{ my: 3 }} />
                <ColorModeIconDropdown size="medium" />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
      <SkillsSidebar open={sidebarOpen} onClose={toggleSidebar} />
      <ContactPopup open={contactModalOpen} onClose={handleContactModal} />
    </AppBar>
  )
}
