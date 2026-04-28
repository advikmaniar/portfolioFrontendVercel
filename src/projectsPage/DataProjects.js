import React, { useState } from "react";
import {
  Box, Typography, Dialog, DialogContent, IconButton,
  Chip, Tooltip, Divider,
} from "@mui/material";
import { GitHub, Close, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { FaKaggle, FaPython } from "react-icons/fa";
import {
  SiScipy, SiPlotly, SiNumpy, SiScikitlearn,
  SiTensorflow, SiPandas, SiMysql, SiStreamlit,
} from "react-icons/si";
import LikeButton from "./LikeButton";

const toolIcons = {
  "Python": <FaPython style={{ color: "#306998", fontSize: "1.3rem" }} />,
  "TensorFlow": <SiTensorflow style={{ color: "#FFA101", fontSize: "1.3rem" }} />,
  "Pandas": <SiPandas style={{ color: "#130751", fontSize: "1.3rem" }} />,
  "Numpy": <SiNumpy style={{ color: "#4D76CE", fontSize: "1.3rem" }} />,
  "MySQL": <SiMysql style={{ color: "#61DBFB", fontSize: "1.3rem" }} />,
  "StreamLit": <SiStreamlit style={{ color: "#FF4B4B", fontSize: "1.3rem" }} />,
  "Sklearn": <SiScikitlearn style={{ color: "#F79939", fontSize: "1.3rem" }} />,
  "Plotly": <SiPlotly style={{ color: "#119DFF", fontSize: "1.3rem" }} />,
  "Scipy": <SiScipy style={{ color: "#0D56A5", fontSize: "1.3rem" }} />,
};

const dataProjects = [
  {
    date: "May 2023",
    name: "StockAI",
    affiliation: "NY Institute of Technology",
    textSecondary: "ML Powered Stock Prediction Model",
    description: [
      "Led a group of 4 developers to create an ML-based stock prediction model, achieving 70% accuracy.",
      "Analyzed financial data for 50 stocks, including sentiment analysis with news from Yahoo Finance API.",
      "Developed an intuitive StreamLit dashboard for real-time predictions over 50 stocks.",
    ],
    tools: ["Python", "TensorFlow", "StreamLit", "MySQL", "Pandas"],
    images: [
      "/StockPredictionImages/StockPrediction_Image1.jpg",
      "/StockPredictionImages/StockPrediction_Image2.jpg",
      "/StockPredictionImages/StockPrediction_Image3.jpg",
      "/StockPredictionImages/StockPrediction_Image4.jpg",
    ],
    github: "https://github.com/advikmaniar/Stock-Price",
  },
  {
    date: "May 2021",
    name: "ML in Healthcare",
    affiliation: null,
    textSecondary: "ML Powered Wellness Prediction Model",
    description: [
      "Interactive Machine Learning Web App developed using Python and StreamLit.",
      "Uses ML algorithms to predict the risk of Heart Attack or Breast Cancer based on user attributes.",
    ],
    tools: ["Python", "StreamLit", "Sklearn", "Pandas", "TensorFlow"],
    images: [
      "/MLHealthcareImages/MLHealthcare_Image1.png",
      "/MLHealthcareImages/MLHealthcare_Image2.png",
      "/MLHealthcareImages/MLHealthcare_Image3.png",
    ],
    github: "https://github.com/advikmaniar/ML-Healthcare-Web-App",
  },
  {
    date: "December 2022",
    name: "Report Generator Tool",
    affiliation: "ETIC / NASA",
    textSecondary: "Data Analysis tool & PDF Generator for time-series data",
    description: [
      "Developed prototype data tools at the Entrepreneurship and Technology Innovation Center under NASA contract.",
      "Real-time data reader that analyzes, visualizes, and generates a PDF report on provided data.",
      "Forecasted weather metrics for the next 2 weeks with 84% testing accuracy.",
    ],
    tools: ["Python", "Sklearn", "Pandas", "Scipy", "Plotly"],
    images: [
      "/DataReaderImages/DataReader_Image1.png",
      "/DataReaderImages/DataReader_Image2.png",
      "/DataReaderImages/DataReader_Image3.png",
    ],
    github: "https://github.com/advikmaniar/Data-Analysis-Tool",
  },
  {
    date: "October 2024",
    name: "Anime House",
    affiliation: "NY Institute of Tech",
    textSecondary: "Recommendation System for Anime Lovers",
    description: [
      "Hybrid recommendation system using collaborative filtering algorithms.",
      "Visualized and analyzed data with Plotly and Matplotlib.",
      "Model trained on 20,000+ user reviews and ratings from MyAnimeList API.",
      "Achieved 80% accuracy on the test dataset.",
    ],
    tools: ["Python", "Pandas", "Sklearn", "Plotly"],
    images: [
      "/AnimeHouseImages/AnimeHouse_Image1.png",
      "/AnimeHouseImages/AnimeHouse_Image2.png",
      "/AnimeHouseImages/AnimeHouse_Image3.png",
    ],
    github: "https://github.com/advikmaniar/interview-portal",
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
      <Box sx={{ position: "relative", height: 200, overflow: "hidden", bgcolor: "action.hover" }}>
        <Box
          component="img"
          src={project.images[0]}
          alt={project.name}
          sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)",
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
              bgcolor: "rgba(6,182,212,0.75)",
              color: "#fff",
              fontSize: "0.7rem",
              fontWeight: 600,
              backdropFilter: "blur(8px)",
            }}
          />
        )}
      </Box>

      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 0.5, letterSpacing: "-0.01em" }}>
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.83rem", mb: 2, lineHeight: 1.5 }}>
          {project.textSecondary}
        </Typography>
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
      <Box sx={{ height: 4, background: "linear-gradient(135deg, #6366f1, #06b6d4)" }} />
      <DialogContent sx={{ p: 0 }}>
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
                      bgcolor: i === imgIndex ? "#06b6d4" : "rgba(255,255,255,0.5)",
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
                    sx={{ bgcolor: "rgba(6,182,212,0.12)", color: "#06b6d4", fontWeight: 600 }}
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

          <Typography variant="overline" sx={{ color: "#06b6d4", fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.7rem" }}>
            Tech Stack
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 1 }}>
            {project.tools.map((tool) => (
              <Box
                key={tool}
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
                  "&:hover": { borderColor: "rgba(6,182,212,0.4)", color: "#06b6d4" },
                }}
              >
                {toolIcons[tool] && <Box sx={{ display: "flex", fontSize: "1rem" }}>{toolIcons[tool]}</Box>}
                {tool}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

const DataProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Data quote */}
      <Box
        sx={{
          mb: 3,
          p: 2.5,
          bgcolor: "rgba(6,182,212,0.06)",
          border: "1px solid rgba(6,182,212,0.2)",
          borderRadius: "14px",
          borderLeft: "3px solid #06b6d4",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", color: "text.secondary", fontSize: "0.9rem", lineHeight: 1.65 }}
        >
          "In God we trust. All others must bring data 📊" — Powerful ML algorithms, intuitive dashboards, and data-driven insights.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
          mb: 4,
        }}
      >
        {dataProjects.map((project) => (
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
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
            I'm a{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700,
              }}
            >
              Notebooks Expert
            </Box>{" "}
            on Kaggle · More data projects on my profile
          </Typography>
        </Box>
        <IconButton
          component="a"
          href="https://www.kaggle.com/advikmaniar/code"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{
            bgcolor: "#1da1f2",
            color: "#fff",
            borderRadius: "8px",
            p: 0.7,
            ml: "auto",
            flexShrink: 0,
            "&:hover": { bgcolor: "#0d8bd1" },
          }}
        >
          <FaKaggle size={16} />
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

export default DataProjects;
