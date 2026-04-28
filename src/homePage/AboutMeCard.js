import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Chip, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { FaJava, FaReact, FaPython } from "react-icons/fa";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

const coreSkills = [
  { label: "Java / SpringBoot", icon: <FaJava color="#f89820" />, level: 90 },
  { label: "React.js / Node.js", icon: <FaReact color="#61DBFB" />, level: 88 },
  { label: "Python / ML", icon: <FaPython color="#306998" />, level: 85 },
];

const stats = [
  { icon: <WorkIcon sx={{ fontSize: 16 }} />, label: "5+ yrs Experience" },
  { icon: <SchoolIcon sx={{ fontSize: 16 }} />, label: "MS Computer Science" },
  { icon: <CodeIcon sx={{ fontSize: 16 }} />, label: "8+ Projects" },
];

export default function AboutMeCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "20px",
        p: { xs: 3, sm: 3.5 },
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 4px 32px rgba(0,0,0,0.4)"
            : "0 4px 32px rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
        },
      }}
    >
      {/* About Me */}
      <Typography
        variant="overline"
        sx={{
          color: "#6366f1",
          fontWeight: 700,
          letterSpacing: "0.12em",
          fontSize: "0.72rem",
          display: "block",
          mb: 1,
        }}
      >
        About Me
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2.5, fontSize: "0.9rem" }}>
        Always learning, always improving — dedicated to creating software that makes a difference. Currently building robust financial APIs and chatbot solutions at{" "}
        <Box
          component="a"
          href="https://www.voya.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#f97316", fontWeight: 600, textDecoration: "none" }}
        >
          Voya Financial
        </Box>
        .
      </Typography>

      {/* Stats row */}
      <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 2.5 }}>
        {stats.map(({ icon, label }) => (
          <Chip
            key={label}
            icon={icon}
            label={label}
            size="small"
            sx={{
              bgcolor: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.15)",
              color: "text.secondary",
              fontWeight: 500,
              fontSize: "0.75rem",
              "& .MuiChip-icon": { color: "#6366f1" },
            }}
          />
        ))}
      </Box>

      <Divider sx={{ mb: 2.5 }} />

      {/* Core skills */}
      <Typography
        variant="overline"
        sx={{
          color: "text.secondary",
          fontWeight: 700,
          letterSpacing: "0.12em",
          fontSize: "0.72rem",
          display: "block",
          mb: 1.5,
        }}
      >
        Core Skills
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
        {coreSkills.map(({ label, icon, level }) => (
          <Box key={label}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.6 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ fontSize: 16, display: "flex" }}>{icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.85rem" }}>
                  {label}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                {level}%
              </Typography>
            </Box>
            <Box
              sx={{
                height: 5,
                borderRadius: "10px",
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: visible ? `${level}%` : "0%",
                  background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                  borderRadius: "10px",
                  transition: `width 1s ease ${0.6}s`,
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      {/* CTA buttons */}
      <Box sx={{ display: "flex", gap: 1.5 }}>
        <Button
          component={Link}
          to="/about"
          size="small"
          sx={{
            flex: 1,
            border: "1px solid rgba(99,102,241,0.4)",
            color: "primary.main",
            fontWeight: 600,
            fontSize: "0.82rem",
            borderRadius: "10px",
            textTransform: "none",
            py: 1,
            transition: "all 0.25s ease",
            "&:hover": {
              background: "rgba(99,102,241,0.08)",
              borderColor: "#6366f1",
            },
          }}
        >
          View More →
        </Button>
        <Button
          component={Link}
          to="/projects"
          size="small"
          sx={{
            flex: 1,
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.82rem",
            borderRadius: "10px",
            textTransform: "none",
            py: 1,
            boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
            transition: "all 0.25s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #4f46e5, #0891b2)",
              boxShadow: "0 6px 20px rgba(99,102,241,0.4)",
              transform: "translateY(-1px)",
            },
          }}
        >
          Browse Work →
        </Button>
      </Box>
    </Box>
  );
}
