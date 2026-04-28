import React from "react";
import { Box, Container, Typography } from "@mui/material";
import AllProjects from "./AllProjects";

export default function MainContentProjects() {
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
          top: "20%",
          right: "-10%",
          width: "35vw",
          height: "35vw",
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
            My Work
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
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {"<Portfolio />"}
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1rem", maxWidth: 560 }}>
            Full-stack apps, machine learning models, and fintech tools — a selection of projects built across industries and tech stacks.
          </Typography>
        </Box>

        <AllProjects />
      </Container>
    </Box>
  );
}
