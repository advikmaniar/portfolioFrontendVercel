import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import CertificateCarousel from "./CertificateCarousel";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

export default function MainContentAboutMe() {
  const [activeTab, setActiveTab] = React.useState("experience");

  const tabs = [
    { id: "experience", label: "Experience", icon: <WorkIcon sx={{ fontSize: 18 }} /> },
    { id: "education", label: "Education", icon: <SchoolIcon sx={{ fontSize: 18 }} /> },
  ];

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orb */}
      <Box
        sx={{
          position: "fixed",
          top: "15%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: "#6366f1", fontWeight: 700, letterSpacing: "0.15em", fontSize: "0.72rem" }}
          >
            My Background
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" },
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              mt: 0.5,
              mb: 1,
            }}
          >
            About{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1rem", maxWidth: 520 }}>
            Software Developer at Voya Financial · MS in Computer Science · 5+ years of building impactful software.
          </Typography>
        </Box>

        {/* Tab bar */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mb: 4,
            p: 0.6,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
            borderRadius: "14px",
            border: "1px solid",
            borderColor: "divider",
            width: "fit-content",
          }}
        >
          {tabs.map(({ id, label, icon }) => (
            <Button
              key={id}
              onClick={() => setActiveTab(id)}
              startIcon={icon}
              sx={{
                background:
                  activeTab === id ? "linear-gradient(135deg, #6366f1, #06b6d4)" : "transparent",
                color: activeTab === id ? "#fff" : "text.secondary",
                fontWeight: activeTab === id ? 700 : 500,
                fontSize: "0.85rem",
                borderRadius: "10px",
                px: 2.5,
                py: 1,
                textTransform: "none",
                boxShadow: activeTab === id ? "0 2px 12px rgba(99,102,241,0.3)" : "none",
                transition: "all 0.25s ease",
                "&:hover": {
                  background:
                    activeTab === id
                      ? "linear-gradient(135deg, #4f46e5, #0891b2)"
                      : "rgba(99,102,241,0.08)",
                  color: activeTab === id ? "#fff" : "primary.main",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Content */}
        <Box sx={{ mb: 6 }}>
          {activeTab === "experience" ? <WorkExperience /> : <Education />}
        </Box>

        {/* Certificates */}
        <CertificateCarousel />
      </Container>
    </Box>
  );
}
