import React, { useState } from "react";
import { Box, Container, Typography, Button, IconButton, Stack, Divider } from "@mui/material";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import { FaKaggle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SkillsSidebar from "../skillsPage/SkillsSidebar";
import ContactPopup from "./ContactPopup";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: <LinkedIn sx={{ fontSize: 18 }} />,
    url: "https://www.linkedin.com/in/advikmaniar/",
    color: "#0077b5",
  },
  {
    label: "GitHub",
    icon: <GitHub sx={{ fontSize: 18 }} />,
    url: "https://github.com/advikmaniar",
    color: "#6e5494",
  },
  {
    label: "Kaggle",
    icon: <FaKaggle size={16} />,
    url: "https://www.kaggle.com/advikmaniar",
    color: "#1da1f2",
  },
  {
    label: "Instagram",
    icon: <Instagram sx={{ fontSize: 18 }} />,
    url: "https://www.instagram.com/advik0220/",
    color: "#e4405f",
  },
];

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
];

export default function Footer() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          py: 4,
          mt: 4,
        }}
      >
        <Container maxWidth="lg">
          {/* Main footer row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              justifyContent: "space-between",
              gap: 3,
              mb: 3,
            }}
          >
            {/* Brand */}
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.02em",
                }}
              >
                Advik Maniar
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontSize: "0.8rem" }}>
                Software Developer · New York, NY
              </Typography>
            </Box>

            {/* Nav links */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                justifyContent: "center",
              }}
            >
              {navLinks.map(({ label, path }) => (
                <Button
                  key={path}
                  component={Link}
                  to={path}
                  size="small"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.8rem",
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 1.5,
                    "&:hover": { color: "primary.main", background: "rgba(99,102,241,0.08)" },
                  }}
                >
                  {label}
                </Button>
              ))}
              <Button
                size="small"
                onClick={() => setSidebarOpen(true)}
                sx={{
                  color: "text.secondary",
                  fontSize: "0.8rem",
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 1.5,
                  "&:hover": { color: "primary.main", background: "rgba(99,102,241,0.08)" },
                }}
              >
                Skills
              </Button>
              <Button
                size="small"
                onClick={() => setContactOpen(true)}
                sx={{
                  color: "text.secondary",
                  fontSize: "0.8rem",
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 1.5,
                  "&:hover": { color: "primary.main", background: "rgba(99,102,241,0.08)" },
                }}
              >
                Contact
              </Button>
            </Box>

            {/* Social icons */}
            <Stack direction="row" spacing={1}>
              {socialLinks.map(({ label, icon, url, color }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label={label}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "10px",
                    color: "text.secondary",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: color,
                      color: color,
                      background: `${color}15`,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          <Divider />

          {/* Copyright */}
          <Box
            sx={{
              pt: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.78rem" }}>
              © {new Date().getFullYear()} Advik Maniar · Built with React.js
            </Typography>
          </Box>
        </Container>
      </Box>

      <SkillsSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
