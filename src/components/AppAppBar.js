import React, { useState, useEffect } from "react";
import {
  AppBar, Box, Button, Container, Drawer, IconButton,
  MenuItem, Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link, useLocation } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import NameLogo from "./NameLogo";
import ColorModeIconDropdown from "../theme/ColorModeIconDropdown";
import CVFile from "../assets/Advik_CV.pdf";
import SkillsSidebar from "../skillsPage/SkillsSidebar";
import ContactPopup from "./ContactPopup";

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
];

const CVButton = () => (
  <Button
    variant="contained"
    href={CVFile}
    target="_blank"
    rel="noopener noreferrer"
    endIcon={<RiPagesLine />}
    sx={{
      background: "linear-gradient(135deg, #6366f1, #06b6d4)",
      color: "#fff",
      fontWeight: 700,
      fontSize: "0.8rem",
      borderRadius: "10px",
      px: 2,
      py: 0.8,
      boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
      textTransform: "none",
      whiteSpace: "nowrap",
      transition: "all 0.3s ease",
      "&:hover": {
        background: "linear-gradient(135deg, #4f46e5, #0891b2)",
        boxShadow: "0 6px 24px rgba(99,102,241,0.5)",
        transform: "translateY(-2px)",
      },
    }}
  >
    View CV
  </Button>
);

export default function AppAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path || (path === "/home" && location.pathname === "/");

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? (theme) => theme.palette.mode === "dark"
              ? "rgba(6, 9, 18, 0.85)"
              : "rgba(248, 250, 252, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid" : "1px solid transparent",
          borderColor: scrolled ? "divider" : "transparent",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
              gap: 2,
            }}
          >
            {/* Logo */}
            <NameLogo />

            {/* Desktop nav links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {navLinks.map(({ label, path }) => (
                <Button
                  key={path}
                  component={Link}
                  to={path}
                  sx={{
                    color: isActive(path) ? "primary.main" : "text.secondary",
                    fontWeight: isActive(path) ? 700 : 500,
                    fontSize: "0.9rem",
                    textTransform: "none",
                    borderRadius: "10px",
                    px: 2,
                    py: 1,
                    position: "relative",
                    transition: "all 0.2s ease",
                    "&::after": isActive(path)
                      ? {
                          content: '""',
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "20px",
                          height: "2px",
                          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                          borderRadius: "1px",
                        }
                      : {},
                    "&:hover": {
                      color: "primary.main",
                      background: "rgba(99,102,241,0.08)",
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
              <Button
                onClick={() => setSidebarOpen(true)}
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  borderRadius: "10px",
                  px: 2,
                  py: 1,
                  transition: "all 0.2s ease",
                  "&:hover": { color: "primary.main", background: "rgba(99,102,241,0.08)" },
                }}
              >
                Skills
              </Button>
              <Button
                onClick={() => setContactOpen(true)}
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  borderRadius: "10px",
                  px: 2,
                  py: 1,
                  transition: "all 0.2s ease",
                  "&:hover": { color: "primary.main", background: "rgba(99,102,241,0.08)" },
                }}
              >
                Contact
              </Button>
            </Box>

            {/* Desktop actions */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1.5 }}>
              <CVButton />
              <ColorModeIconDropdown />
            </Box>

            {/* Mobile actions */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
              <CVButton />
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "10px",
                  p: 0.8,
                }}
              >
                <MenuIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: (theme) =>
              theme.palette.mode === "dark" ? "#0d1117" : "#f8fafc",
            borderBottom: "1px solid",
            borderColor: "divider",
            pt: 1,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)} size="small">
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          {navLinks.map(({ label, path }) => (
            <MenuItem
              key={path}
              component={Link}
              to={path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: "10px",
                mb: 0.5,
                fontWeight: isActive(path) ? 700 : 400,
                color: isActive(path) ? "primary.main" : "text.primary",
              }}
            >
              {label}
            </MenuItem>
          ))}
          <MenuItem
            onClick={() => { setSidebarOpen(true); setDrawerOpen(false); }}
            sx={{ borderRadius: "10px", mb: 0.5 }}
          >
            Skills
          </MenuItem>
          <MenuItem
            onClick={() => { setContactOpen(true); setDrawerOpen(false); }}
            sx={{ borderRadius: "10px", mb: 0.5 }}
          >
            Contact
          </MenuItem>
          <Divider sx={{ my: 1.5 }} />
          <Box sx={{ px: 2, py: 1 }}>
            <ColorModeIconDropdown size="medium" />
          </Box>
        </Box>
      </Drawer>

      <SkillsSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
