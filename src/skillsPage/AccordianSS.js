import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { FaUserTie } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GiProgression, GiCaptainHatProfile } from "react-icons/gi";
import { TbBulbFilled } from "react-icons/tb";

const softSkills = [
  { name: "Team Collaboration", icon: <RiTeamFill color="#60a5fa" /> },
  { name: "Agile / Scrum", icon: <GiProgression color="#4D76CE" /> },
  { name: "Leadership", icon: <GiCaptainHatProfile color="#0073CF" /> },
  { name: "Innovation", icon: <TbBulbFilled color="#E5B80B" /> },
];

const AccordianSS = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: "8px",
            background: "linear-gradient(135deg, #f97316, #6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaUserTie style={{ color: "#fff", fontSize: 12 }} />
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.01em" }}>
          Soft Skills
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
        {softSkills.map(({ name, icon }) => (
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
                borderColor: "rgba(249,115,22,0.4)",
                bgcolor: "rgba(249,115,22,0.08)",
                color: "#f97316",
              },
              "& .MuiChip-icon": { ml: 0 },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AccordianSS;
