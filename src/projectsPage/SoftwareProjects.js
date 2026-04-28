import React, { useState } from "react";
import {
  Box, Typography, Dialog, DialogContent, IconButton,
  Chip, Tooltip, Divider,
} from "@mui/material";
import { GitHub, Close, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNode, FaAws } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux, SiDialogflow, SiTwilio, SiMongodb, SiMysql, SiDjango } from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";
import LikeButton from "./LikeButton";

const toolIcons = {
  "React.js": <FaReact style={{ color: "#61DBFB", fontSize: "1.4rem" }} />,
  "Node.js": <FaNode style={{ color: "#68A063", fontSize: "1.4rem" }} />,
  "Java": <FaJava style={{ color: "#f89820", fontSize: "1.4rem" }} />,
  "Python": <FaPython style={{ color: "#306998", fontSize: "1.4rem" }} />,
  "MongoDB": <SiMongodb style={{ color: "#3FA037", fontSize: "1.2rem" }} />,
  "AWS": <FaAws style={{ color: "#FF9900", fontSize: "1.4rem" }} />,
  "Flutter": <FaFlutter style={{ color: "#02569B", fontSize: "1.4rem" }} />,
  "Google Firebase": <IoLogoFirebase style={{ color: "#f5820D", fontSize: "1.4rem" }} />,
  "HTML5": <FaHtml5 style={{ color: "#C42C05", fontSize: "1.4rem" }} />,
  "CSS3": <FaCss3Alt style={{ color: "#006EBB", fontSize: "1.4rem" }} />,
  "Django": <SiDjango style={{ color: "#2BA977", fontSize: "1.4rem" }} />,
  "MySQL": <SiMysql style={{ color: "#61DBFB", fontSize: "1.4rem" }} />,
  "Twilio": <SiTwilio style={{ color: "#F22F46", fontSize: "1.4rem" }} />,
  "Google DialogFlow": <SiDialogflow style={{ color: "#f5820D", fontSize: "1.4rem" }} />,
  "Redux": <SiRedux style={{ color: "#764ABC", fontSize: "1.4rem" }} />,
  "Android": <FcAndroidOs style={{ fontSize: "1.4rem" }} />,
  "APIs": null,
  "Stripe": null,
};

const softwareProjects = [
  {
    date: "December 2024",
    name: "EZInterview",
    affiliation: null,
    textSecondary: "Interview Platform for Job Seekers and Employers",
    description: [
      "Real-time interview platform for employers to conduct interviews.",
      "Secure authentication and authorization using JWT and OAuth2.0.",
      "Designed with React.js and Express.js for a seamless user experience.",
      "Integrated Twilio to establish secure meeting rooms for interviews.",
      "Deployed on AWS EC2 and S3 for scalability and reliability.",
    ],
    tools: ["React.js", "Node.js", "MongoDB", "AWS", "Twilio"],
    images: [
      "/EZInterviewImages/EZInterview_Image1.png",
      "/EZInterviewImages/EZInterview_Image2.png",
      "/EZInterviewImages/EZInterview_Image3.png",
      "/EZInterviewImages/EZInterview_Image4.png",
    ],
    github: "https://github.com/advikmaniar/interview-portal",
  },
  {
    date: "October 2024",
    name: "AMPortfolio",
    affiliation: null,
    textSecondary: "Personal Portfolio developed with React.js",
    description: [
      "Established a backend with NodeMailer to deliver 100+ real-time messages from the UI.",
      "Integrated an intelligent chatbot using Google DialogFlow with 30+ intents.",
      "Redux for efficient state management across dynamic UI components.",
    ],
    tools: ["React.js", "HTML5", "CSS3", "Node.js", "Redux", "Google DialogFlow", "AWS"],
    images: [
      "/PersonalPortfolioImages/ReactPortfolio_Image1.png",
      "/PersonalPortfolioImages/ReactPortfolio_Image2.png",
      "/PersonalPortfolioImages/ReactPortfolio_Image3.png",
      "/PersonalPortfolioImages/ReactPortfolio_Image4.png",
    ],
    github: "https://github.com/advikmaniar/portfolio",
  },
  {
    date: "May 2021",
    name: "FarmApp",
    affiliation: "Mumbai University",
    textSecondary: "Android App developed with Java and Flutter",
    description: [
      "IoT Based Smart Irrigation System to control irrigation system remotely.",
      "Implemented secure authentication using JWT and Google Firebase.",
      "Developed android app to view farm metrics and control irrigation pumps.",
      "Configured webhooks to trigger irrigation pumps based on soil moisture.",
      "Utilized Python to visualize data collected from sensors in real-time.",
    ],
    tools: ["Java", "Android", "Python", "Google Firebase", "Flutter"],
    images: [
      "/FarmAppImages/FarmApp_Image1.png",
      "/FarmAppImages/FarmApp_Image2.png",
      "/FarmAppImages/FarmApp_Image3.png",
      "/FarmAppImages/FarmApp_Image4.png",
    ],
    github: "https://github.com/advikmaniar/FarmApp",
  },
  {
    date: "December 2022",
    name: "OnlyFootball",
    affiliation: "NY Institute of Technology",
    textSecondary: "E-commerce website for football merchandise",
    description: [
      "E-commerce website for football items developed using Python and Django.",
      "Utilized MongoDB to store product data to display dynamically on the website.",
      "Integrated Stripe for secure payment processing and user authentication.",
      "Developed an intuitive dashboard on Python to track user activity and sales.",
    ],
    tools: ["Python", "Django", "MySQL", "MongoDB"],
    images: [
      "/OnlyFootballImages/OnlyFootball_Image1.png",
      "/OnlyFootballImages/OnlyFootball_Image2.png",
    ],
    github: "https://github.com/advikmaniar/Only-Football-Website",
  },
];

function ProjectCard({ project, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        "&:hover": {
          borderColor: "rgba(99,102,241,0.4)",
          boxShadow: "0 8px 32px rgba(99,102,241,0.15)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative", height: 200, overflow: "hidden", bgcolor: "action.hover" }}>
        <Box
          component="img"
          src={project.images[0]}
          alt={project.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <Chip
          label={project.date}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: 600,
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        {project.affiliation && (
          <Chip
            label={project.affiliation}
            size="small"
            sx={{
              position: "absolute",
              bottom: 12,
              left: 12,
              bgcolor: "rgba(99,102,241,0.8)",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 600,
              backdropFilter: "blur(8px)",
            }}
          />
        )}
      </Box>

      {/* Content */}
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 0.5, letterSpacing: "-0.01em" }}
        >
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "0.83rem", mb: 2, lineHeight: 1.5 }}
        >
          {project.textSecondary}
        </Typography>

        {/* Tech stack icons */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: "auto" }}>
          {project.tools.slice(0, 5).map((tool) =>
            toolIcons[tool] ? (
              <Tooltip title={tool} key={tool} arrow>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "scale(1.2)" },
                  }}
                >
                  {toolIcons[tool]}
                </Box>
              </Tooltip>
            ) : null
          )}
        </Box>
      </Box>
    </Box>
  );
}

function ProjectModal({ project, open, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  React.useEffect(() => {
    if (open) setImgIndex(0);
  }, [open, project]);

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "20px",
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
          bgcolor: "background.paper",
        },
      }}
    >
      {/* Top gradient bar */}
      <Box sx={{ height: 4, background: "linear-gradient(135deg, #6366f1, #06b6d4)" }} />

      <DialogContent sx={{ p: 0 }}>
        {/* Image carousel */}
        <Box sx={{ position: "relative", height: { xs: 220, sm: 320 }, bgcolor: "action.hover" }}>
          <Box
            component="img"
            src={project.images[imgIndex]}
            alt={`${project.name} screenshot ${imgIndex + 1}`}
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          {project.images.length > 1 && (
            <>
              <IconButton
                onClick={() => setImgIndex((p) => (p === 0 ? project.images.length - 1 : p - 1))}
                sx={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(0,0,0,0.45)",
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.65)" },
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={() => setImgIndex((p) => (p === project.images.length - 1 ? 0 : p + 1))}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(0,0,0,0.45)",
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.65)" },
                }}
              >
                <ChevronRight />
              </IconButton>
              {/* Dots */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 0.8,
                }}
              >
                {project.images.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setImgIndex(i)}
                    sx={{
                      width: i === imgIndex ? 18 : 6,
                      height: 6,
                      borderRadius: "3px",
                      bgcolor: i === imgIndex ? "#6366f1" : "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  />
                ))}
              </Box>
            </>
          )}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "#fff",
              backdropFilter: "blur(4px)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            }}
          >
            <Close />
          </IconButton>
        </Box>

        {/* Content */}
        <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 1 }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                  {project.name}
                </Typography>
                {project.affiliation && (
                  <Chip
                    label={project.affiliation}
                    size="small"
                    sx={{ bgcolor: "rgba(99,102,241,0.12)", color: "#6366f1", fontWeight: 600 }}
                  />
                )}
              </Box>
              <Typography variant="body2" color="text.secondary">
                {project.textSecondary} · {project.date}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
              <LikeButton projectName={project.name} />
              <IconButton
                component="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                sx={{
                  bgcolor: "#24292e",
                  color: "#fff",
                  borderRadius: "10px",
                  p: 0.8,
                  "&:hover": { bgcolor: "#444", transform: "scale(1.05)" },
                  transition: "all 0.2s ease",
                }}
              >
                <GitHub fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Description */}
          <Box sx={{ mb: 2.5 }}>
            {project.description.map((point, i) => (
              <Box key={i} sx={{ display: "flex", gap: 1.5, mb: 1 }}>
                <Box
                  sx={{
                    mt: 0.6,
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Tech stack */}
          <Typography variant="overline" sx={{ color: "#6366f1", fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.7rem" }}>
            Tech Stack
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 1 }}>
            {project.tools.map((tool) => (
              <Tooltip title={tool} key={tool} arrow>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: 1.5,
                    py: 0.6,
                    bgcolor: "action.hover",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "text.secondary",
                    transition: "all 0.2s ease",
                    "&:hover": { borderColor: "rgba(99,102,241,0.4)", color: "primary.main" },
                  }}
                >
                  {toolIcons[tool] && (
                    <Box sx={{ display: "flex", fontSize: "1rem" }}>{toolIcons[tool]}</Box>
                  )}
                  {tool}
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

const SoftwareProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
          mb: 4,
        }}
      >
        {softwareProjects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </Box>

      {/* Footer note */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          p: 2,
          bgcolor: "action.hover",
          borderRadius: "14px",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
          More projects available on my GitHub profile
        </Typography>
        <IconButton
          component="a"
          href="https://github.com/advikmaniar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{
            bgcolor: "#24292e",
            color: "#fff",
            borderRadius: "8px",
            p: 0.7,
            ml: "auto",
            flexShrink: 0,
            "&:hover": { bgcolor: "#444" },
          }}
        >
          <GitHub fontSize="small" />
        </IconButton>
      </Box>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default SoftwareProjects;
