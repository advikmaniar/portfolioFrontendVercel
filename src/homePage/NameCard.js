import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, Button, Chip } from "@mui/material";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import { FaKaggle } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CVFile from "../assets/Advik_CV.pdf";

const socialLinks = [
  { label: "LinkedIn", icon: <LinkedIn />, url: "https://www.linkedin.com/in/advikmaniar/", color: "#0077b5" },
  { label: "GitHub", icon: <GitHub />, url: "https://github.com/advikmaniar", color: "#6e5494" },
  { label: "Kaggle", icon: <FaKaggle size={18} />, url: "https://www.kaggle.com/advikmaniar", color: "#1da1f2" },
  { label: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/advik0220/", color: "#e4405f" },
];

export default function NameCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Available badge */}
      <Chip
        label="👋  Available for opportunities"
        size="small"
        sx={{
          mb: 3,
          bgcolor: "rgba(99,102,241,0.1)",
          color: "#6366f1",
          border: "1px solid rgba(99,102,241,0.25)",
          fontWeight: 600,
          fontSize: "0.78rem",
          borderRadius: "20px",
          px: 0.5,
        }}
      />

      {/* Greeting */}
      <Typography
        variant="h6"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          fontWeight: 500,
          mb: 0.5,
        }}
      >
        Hi, I'm
      </Typography>

      {/* Name — plain text so gradient background-clip works correctly */}
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: "2.8rem", sm: "4rem", md: "4.8rem", lg: "5.2rem" },
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          mb: 1.5,
          background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Advik Maniar
      </Typography>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.1rem", sm: "1.35rem" },
          fontWeight: 600,
          color: "text.secondary",
          mb: 2,
          letterSpacing: "-0.01em",
        }}
      >
        Software Developer&nbsp;&nbsp;·&nbsp;&nbsp;New York, NY
      </Typography>

      {/* Tagline */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.95rem", sm: "1.05rem" },
          lineHeight: 1.7,
          maxWidth: 520,
          mb: 3.5,
        }}
      >
        Building high-impact software at{" "}
        <Box
          component="a"
          href="https://www.voya.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#f97316",
            fontWeight: 600,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Voya Financial
        </Box>
        . Passionate about full-stack development, machine learning, and building things that matter.
      </Typography>

      {/* Social icons */}
      <Box sx={{ display: "flex", gap: 1, mb: 3.5 }}>
        {socialLinks.map(({ label, icon, url, color }) => (
          <IconButton
            key={label}
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "12px",
              color: "text.secondary",
              transition: "all 0.25s ease",
              "&:hover": {
                borderColor: color,
                color: color,
                background: `${color}18`,
                transform: "translateY(-3px)",
                boxShadow: `0 6px 20px ${color}30`,
              },
            }}
          >
            {icon}
          </IconButton>
        ))}
      </Box>

      {/* CTA buttons */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          component={Link}
          to="/projects"
          sx={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.95rem",
            borderRadius: "12px",
            px: 3,
            py: 1.3,
            textTransform: "none",
            boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #4f46e5, #0891b2)",
              boxShadow: "0 6px 28px rgba(99,102,241,0.5)",
              transform: "translateY(-2px)",
            },
          }}
        >
          View My Work →
        </Button>
        <Button
          href={CVFile}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<RiPagesLine />}
          sx={{
            border: "1px solid",
            borderColor: "rgba(99,102,241,0.4)",
            color: (theme) => theme.palette.mode === "dark" ? "#e2e8f0" : "#1e293b",
            fontWeight: 600,
            fontSize: "0.95rem",
            borderRadius: "12px",
            px: 3,
            py: 1.3,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "#6366f1",
              background: "rgba(99,102,241,0.08)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
