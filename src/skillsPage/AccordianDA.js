import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { SiScipy, SiTableau, SiOpencv, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiPlotly, SiTensorflow } from "react-icons/si";
import { FaChartPie, FaPython } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const skillGroups = [
  {
    label: "Data Manipulation",
    skills: [
      { name: "Python", icon: <FaPython color="#306998" /> },
      { name: "Pandas", icon: <SiPandas color="#130751" /> },
      { name: "NumPy", icon: <SiNumpy color="#4D76CE" /> },
      { name: "SciPy", icon: <SiScipy color="#0D56A5" /> },
    ],
  },
  {
    label: "Visualization",
    skills: [
      { name: "Matplotlib", icon: <FaChartPie color="#3C873A" /> },
      { name: "Plotly", icon: <SiPlotly color="#119DFF" /> },
      { name: "Tableau", icon: <SiTableau color="#255699" /> },
    ],
  },
  {
    label: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", icon: <SiScikitlearn color="#F79939" /> },
      { name: "TensorFlow", icon: <SiTensorflow color="#FFA101" /> },
      { name: "Keras", icon: <SiKeras color="#CE0002" /> },
      { name: "OpenCV", icon: <SiOpencv color="#06FC09" /> },
    ],
  },
];

const AccordianDA = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: "8px",
            background: "linear-gradient(135deg, #06b6d4, #6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TbDeviceDesktopAnalytics style={{ color: "#fff", fontSize: 14 }} />
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.01em" }}>
          Data Analytics
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {skillGroups.map(({ label, skills }) => (
          <Box key={label}>
            <Typography
              variant="caption"
              sx={{
                color: "text.disabled",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.65rem",
                display: "block",
                mb: 0.8,
                ml: 0.5,
              }}
            >
              {label}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
              {skills.map(({ name, icon }) => (
                <Chip
                  key={name}
                  icon={<Box sx={{ display: "flex", alignItems: "center", fontSize: "1rem", pl: 0.5 }}>{icon}</Box>}
                  label={name}
                  size="small"
                  sx={{
                    bgcolor: "action.hover",
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    height: 26,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "rgba(6,182,212,0.4)",
                      bgcolor: "rgba(6,182,212,0.08)",
                      color: "#06b6d4",
                    },
                    "& .MuiChip-icon": { ml: 0 },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AccordianDA;
