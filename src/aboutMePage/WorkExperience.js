import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import CVFile from "../assets/Advik_CV.pdf";

const workExperiences = [
  {
    date: "June 2023 – Present",
    role: "Software Developer Engineer",
    company: "Voya Financial",
    location: "New York, NY",
    type: "Full-time",
    current: true,
    description: [
      "REST APIs development with Java & SpringBoot",
      "Chatbot intent development with Genesys & Google DialogFlow",
      "CI/CD with Git, Jenkins, OpenShift, and XLD",
      "15+ successful production deployments",
    ],
  },
  {
    date: "February 2023",
    role: "Research Assistant",
    company: "New York Institute of Technology",
    location: "New York, NY",
    type: "Part-time",
    current: false,
    description: ["Assisted in the development of internal tools and applications."],
  },
  {
    date: "September 2022",
    role: "Graduate Student Assistant",
    company: "Entrepreneurship & Technology Innovation Center",
    location: "New York, NY",
    type: "Part-time",
    current: false,
    description: [
      "Developed prototype data analysis tools under NASA contract",
      "Leveraged Python, Pandas, and Matplotlib to analyze time-series data",
    ],
  },
  {
    date: "May 2022",
    role: "Software Developer Intern",
    company: "Voya Financial",
    location: "New York, NY",
    type: "Internship",
    current: false,
    description: [
      "REST APIs development with Java & SpringBoot",
      "Chatbot intent development with Genesys & Google DialogFlow",
    ],
  },
  {
    date: "May 2022",
    role: "Research Assistant",
    company: "New York Institute of Technology",
    location: "New York, NY",
    type: "Part-time",
    current: false,
    description: [
      "Assisted faculty with research projects and lab experiments",
    ],
  },
];

const typeColors = {
  "Full-time": { bg: "rgba(34,197,94,0.12)", color: "#22c55e" },
  "Part-time": { bg: "rgba(99,102,241,0.1)", color: "#6366f1" },
  "Internship": { bg: "rgba(6,182,212,0.1)", color: "#06b6d4" },
};

export default function WorkExperience() {
  return (
    <Box>
      {/* Timeline */}
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

        {workExperiences.map((exp, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              mb: i < workExperiences.length - 1 ? 3 : 0,
              position: "relative",
            }}
          >
            {/* Timeline dot */}
            <Box sx={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box
                sx={{
                  width: { xs: 34, sm: 42 },
                  height: { xs: 34, sm: 42 },
                  borderRadius: "50%",
                  background: exp.current
                    ? "linear-gradient(135deg, #6366f1, #06b6d4)"
                    : (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.07)"
                          : "rgba(0,0,0,0.07)",
                  border: "2px solid",
                  borderColor: exp.current ? "transparent" : "divider",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: exp.current ? "0 0 16px rgba(99,102,241,0.4)" : "none",
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: exp.current ? "#fff" : "rgba(99,102,241,0.5)",
                  }}
                />
              </Box>
            </Box>

            {/* Card */}
            <Box
              sx={{
                flex: 1,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: exp.current ? "rgba(99,102,241,0.3)" : "divider",
                borderRadius: "16px",
                p: { xs: 2, sm: 2.5 },
                mb: 0.5,
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "rgba(99,102,241,0.4)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.1)",
                  transform: "translateX(4px)",
                },
                ...(exp.current && {
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
                    {exp.role}
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
                    {exp.company}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}>
                  {exp.current && (
                    <Chip
                      label="Current"
                      size="small"
                      sx={{
                        bgcolor: "rgba(34,197,94,0.12)",
                        color: "#22c55e",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        height: 22,
                        border: "1px solid rgba(34,197,94,0.3)",
                      }}
                    />
                  )}
                  <Chip
                    label={exp.type}
                    size="small"
                    sx={{
                      bgcolor: typeColors[exp.type]?.bg || "action.hover",
                      color: typeColors[exp.type]?.color || "text.secondary",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      height: 22,
                    }}
                  />
                </Box>
              </Box>

              {/* Location & date */}
              <Box sx={{ display: "flex", gap: 2, mb: 1.5, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <LocationOnIcon sx={{ fontSize: 14, color: "text.disabled" }} />
                  <Typography variant="caption" color="text.secondary">{exp.location}</Typography>
                </Box>
                <Typography variant="caption" color="text.secondary">· {exp.date}</Typography>
              </Box>

              {/* Description */}
              <Box>
                {exp.description.map((point, j) => (
                  <Box key={j} sx={{ display: "flex", gap: 1.2, mb: 0.6 }}>
                    <Box
                      sx={{
                        mt: 0.55,
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                      }}
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                      {point}
                    </Typography>
                  </Box>
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
