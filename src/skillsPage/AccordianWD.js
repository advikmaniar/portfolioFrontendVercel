import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { SiRedux, SiRedhatopenshift, SiDialogflow, SiMongodb, SiMysql, SiDjango, SiSpringboot, SiStreamlit } from "react-icons/si";
import { FaJenkins, FaBitbucket, FaGithub, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { FaCode } from "react-icons/fa";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 color="#C42C05" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#006EBB" /> },
      { name: "JavaScript", icon: <IoLogoJavascript color="#E1BF05" /> },
      { name: "React.js", icon: <FaReact color="#61DBFB" /> },
      { name: "Redux", icon: <SiRedux color="#754eb9" /> },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNode color="#3C873A" /> },
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "SpringBoot", icon: <SiSpringboot color="#6BB13F" /> },
      { name: "Django", icon: <SiDjango color="#2BA977" /> },
      { name: "StreamLit", icon: <SiStreamlit color="#FF4B4B" /> },
      { name: "REST APIs", icon: <TbApi color="#0082C6" /> },
    ],
  },
  {
    label: "Databases & Cloud",
    skills: [
      { name: "MySQL", icon: <SiMysql color="#61DBFB" /> },
      { name: "MongoDB", icon: <SiMongodb color="#3FA037" /> },
      { name: "Firebase", icon: <IoLogoFirebase color="#f5820D" /> },
      { name: "DialogFlow", icon: <SiDialogflow color="#f5820D" /> },
    ],
  },
  {
    label: "DevOps",
    skills: [
      { name: "GitHub", icon: <FaGithub color="#9A59B5" /> },
      { name: "BitBucket", icon: <FaBitbucket color="#2682FD" /> },
      { name: "Jenkins", icon: <FaJenkins color="#cc0000" /> },
      { name: "OpenShift", icon: <SiRedhatopenshift color="#cc0000" /> },
    ],
  },
];

const AccordianWD = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: "8px",
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaCode style={{ color: "#fff", fontSize: 13 }} />
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 800, fontSize: "0.9rem", letterSpacing: "-0.01em" }}>
          Web Development
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
                      borderColor: "rgba(99,102,241,0.4)",
                      bgcolor: "rgba(99,102,241,0.08)",
                      color: "primary.main",
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

export default AccordianWD;
