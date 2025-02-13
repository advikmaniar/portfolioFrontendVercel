import { Container, Typography, Button, Divider, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { FaJava, FaReact, FaPython } from "react-icons/fa";
import SkillsSidebar from '../skillsPage/SkillsSidebar';
import React, { useState } from "react";

const AboutMeCard = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        height: "flex",
        width: "max-width",
        p: "20px 10px 20px 10px",
        borderRadius: "16px",
        alignItems: { xs: "center", lg: "flex-start" }, 
        boxShadow: 1,
        transition: "all 0.5s ease",
        '&:hover': {
          boxShadow: 3,
          transform: "scale(1.02)",
        },
      }}>
        {/* About Me Section */}
        <Typography variant="h6" sx={{ color: "text.primary", fontSize: 20, mb: 0 }}>
          ABOUT ME
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 0 }}>
        Always learning, always improving—dedicated to creating software that makes a difference. Currently working as a Software Developer at{" "}
          <a href="https://www.voya.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "orange" }}>
            Voya Financial
          </a>.
          <Divider sx={{ borderColor: "text.secondary", my: 1, width: "60%", mx: "auto" }} />
        </Typography>
        <Typography
          variant="h7"
          onClick={handleOpenSidebar}
          sx={{ color: "text.secondary", fontWeight: "bold", mb: 1, cursor: "pointer " }}>
          Core Skills
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 0 }}>
          <FaJava style={{ marginRight: "8px", color: "#f89820" }} /> API Development with Java | SpringBoot
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 0 }}>
          <FaReact style={{ marginRight: "8px", color: "#61DBFB" }} /> Web Development with React.js | Node.js
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          <FaPython style={{ marginRight: "8px", color: "#306998" }} />  Machine Learning modeling with Python
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to='/about'
          sx={{
            bgcolor: "primary.main",
            color: "background.paper",
            borderRadius: "8px",
            width: "fit-content",
            px: 2,
            py: 1,
            fontWeight: "bold",
            boxShadow: 3,
            transition: "all 0.3s ease",
            '&:hover': {
              bgcolor: "primary.dark",
              boxShadow: 6,
              transform: "translateY(-2px)",
            },
          }}
          // endIcon={<span style={{ fontSize: '1.2em' }}>→</span>}
        >
          View More 👉
        </Button>
        <Divider sx={{ borderColor: "text.secondary", my: 3 }} />

        {/* My Work Section */}
        <Typography variant="h6" sx={{ color: "text.primary", fontSize: 20, mb: 0 }}>
          PROJECTS
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          I have worked on software systems that range from web applications to machine learning models. Check out some of my work.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to='/projects'
          sx={{
            bgcolor: "primary.main",
            color: "background.paper",
            borderRadius: "8px",
            width: "fit-content",
            px: 2,
            py: 1,
            fontWeight: "bold",
            boxShadow: 3,
            transition: "all 0.3s ease",
            '&:hover': {
              bgcolor: "primary.dark",
              boxShadow: 6,
              transform: "translateY(-2px)",
            },
          }}
          // endIcon={<span style={{ fontSize: '1.2em' }}>→</span>}
        >
          Browse Work 👉
        </Button>
        <SkillsSidebar open={isSidebarOpen} onClose={handleCloseSidebar} />
      </Container>
  );
}

export default AboutMeCard;