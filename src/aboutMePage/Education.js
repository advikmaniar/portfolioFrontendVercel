import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import SchoolIcon from "@mui/icons-material/School";
import CVFile from "../assets/Advik_CV.pdf";

const education = [
  {
    date: "September 2021 – May 2023",
    degree: "MS in Computer Science",
    university: "New York Institute of Technology",
    location: "New York, NY",
    gpa: "3.8 / 4.0",
    coursework: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Cloud Computing"],
  },
  {
    date: "June 2017 – May 2021",
    degree: "BE in Electronics Engineering",
    university: "KJ Somaiya College of Engineering",
    location: "Mumbai, India",
    gpa: "3.6 / 4.0",
    coursework: ["Digital Signal Processing", "Microprocessors", "Control Systems", "VLSI Design"],
  },
];

export default function Education() {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 16, sm: 20 },
            top: 8,
            bottom: 8,
            width: 2,
            background: "linear-gradient(180deg, #6366f1, #06b6d4)",
            borderRadius: "1px",
            opacity: 0.3,
          }}
        />

        {education.map((edu, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              mb: i < education.length - 1 ? 3 : 0,
              position: "relative",
            }}
          >
            {/* Timeline dot */}
            <Box sx={{ flexShrink: 0 }}>
              <Box
                sx={{
                  width: { xs: 34, sm: 42 },
                  height: { xs: 34, sm: 42 },
                  borderRadius: "50%",
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #6366f1, #06b6d4)"
                      : (theme) =>
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.07)"
                            : "rgba(0,0,0,0.07)",
                  border: "2px solid",
                  borderColor: i === 0 ? "transparent" : "divider",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: i === 0 ? "0 0 16px rgba(99,102,241,0.4)" : "none",
                  zIndex: 1,
                }}
              >
                <SchoolIcon sx={{ fontSize: { xs: 14, sm: 16 }, color: i === 0 ? "#fff" : "text.disabled" }} />
              </Box>
            </Box>

            {/* Card */}
            <Box
              sx={{
                flex: 1,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: i === 0 ? "rgba(99,102,241,0.3)" : "divider",
                borderRadius: "16px",
                p: { xs: 2, sm: 2.5 },
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "rgba(99,102,241,0.4)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.1)",
                  transform: "translateX(4px)",
                },
                ...(i === 0 && {
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(6,182,212,0.04))"
                      : "linear-gradient(135deg, rgba(99,102,241,0.04), rgba(6,182,212,0.02))",
                }),
              }}
            >
              {/* Header */}
              <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 1 }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { xs: "0.95rem", sm: "1.05rem" }, letterSpacing: "-0.01em" }}>
                    {edu.degree}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {edu.university}
                  </Typography>
                </Box>
                <Chip
                  label={`GPA ${edu.gpa}`}
                  size="small"
                  sx={{
                    bgcolor: "rgba(99,102,241,0.1)",
                    color: "#6366f1",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    height: 24,
                    border: "1px solid rgba(99,102,241,0.25)",
                  }}
                />
              </Box>

              {/* Location & date */}
              <Box sx={{ display: "flex", gap: 2, mb: 1.5, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <LocationOnIcon sx={{ fontSize: 14, color: "text.disabled" }} />
                  <Typography variant="caption" color="text.secondary">{edu.location}</Typography>
                </Box>
                <Typography variant="caption" color="text.secondary">· {edu.date}</Typography>
              </Box>

              {/* Coursework */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                {edu.coursework.map((course) => (
                  <Chip
                    key={course}
                    label={course}
                    size="small"
                    sx={{
                      bgcolor: "action.hover",
                      color: "text.secondary",
                      fontSize: "0.72rem",
                      height: 22,
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* CV button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          href={CVFile}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<DescriptionIcon />}
          sx={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.9rem",
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
          Download Resume
        </Button>
      </Box>
    </Box>
  );
}
