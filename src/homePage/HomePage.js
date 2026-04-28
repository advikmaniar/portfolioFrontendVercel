import React from "react";
import { Box } from "@mui/material";
import NameCard from "./NameCard";
import AboutMeCard from "./AboutMeCard";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, md: 4 },
      }}
    >
      {/* Subtle background gradient orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "40vw",
          height: "40vw",
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: "35vw",
          height: "35vw",
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Grid dot pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: (theme) =>
            theme.palette.mode === "dark"
              ? "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.12) 1px, transparent 0)"
              : "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.08) 1px, transparent 0)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "flex-start", lg: "center" },
          gap: { xs: 4, lg: 6 },
        }}
      >
        <Box sx={{ flex: "0 0 auto", width: { xs: "100%", lg: "58%" } }}>
          <NameCard />
        </Box>
        <Box sx={{ flex: "0 0 auto", width: { xs: "100%", lg: "42%" } }}>
          <AboutMeCard />
        </Box>
      </Box>
    </Box>
  );
}
