import React from "react";
import {
  Box, Drawer, Typography, Divider, IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import AccordianWD from "./AccordianWD";
import AccordianDA from "./AccordianDA";
import AccordianSS from "./AccordianSS";

const SkillsSidebar = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "85vw", sm: 340 },
          bgcolor: "background.paper",
          borderRight: "1px solid",
          borderColor: "divider",
          borderRadius: "0 20px 20px 0",
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: 4 },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(99,102,241,0.3)",
            borderRadius: 2,
          },
        },
      }}
    >
      {/* Top gradient bar */}
      <Box sx={{ height: 3, background: "linear-gradient(90deg, #6366f1, #06b6d4)", flexShrink: 0 }} />

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2.5,
          pb: 1.5,
          flexShrink: 0,
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{ color: "#6366f1", fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.68rem", display: "block", lineHeight: 1 }}
          >
            Tech Skills
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: "-0.01em", fontSize: "1.1rem" }}>
            Skill Set
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            bgcolor: "action.hover",
            borderRadius: "10px",
            "&:hover": { bgcolor: "action.selected" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Divider />

      {/* Skill sections */}
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2.5 }}>
        <AccordianWD />
        <AccordianDA />
        <AccordianSS />
      </Box>
    </Drawer>
  );
};

export default SkillsSidebar;
