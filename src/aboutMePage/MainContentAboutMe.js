import * as React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import { Container, Button, Tooltip, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import CertificateCarousel from "./CertificateCarousel";
import { FaTimes } from "react-icons/fa";


export default function MainContentAboutMe() {
  const [showWorkExperience, setShowWorkExperience] = React.useState(false);
  const [showEducation, setShowEducation] = React.useState(false);

  const bgImages = ['/BackgroundImages/bgImage1.jpg', '/BackgroundImages/bgImage2.jpg'];
  const randomBgImage = bgImages[Math.floor(Math.random() * bgImages.length)];

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: "80%", sm: "60%" },
          height: "80%",
          backgroundImage: `url(${randomBgImage})`,
          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          borderRadius: "10%",
          zIndex: 0,
          filter: "blur(2px)",
        }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column" },
          gap: { xs: 2, sm: 4 },
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            width: "fit-content",
            display: "flex",
            flexDirection: "row",
            border: "2px solid",
            borderColor: (theme) => theme.palette.mode === 'dark' ? '#333333' : '#bbbbbb',
            backgroundColor: showWorkExperience || showEducation ? "transparent" : 'background.paper',
            borderRadius: "20px",
            gap: 2,
            py: showWorkExperience || showEducation ? "0px" : "150px",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.9,
          }}
        >
          {!showEducation && (
            <Tooltip title="Show Work Experience" arrow>
              <Button
                onClick={() => setShowWorkExperience(!showWorkExperience)}
                sx={{
                  borderRadius: "20px",
                  borderBottom: showWorkExperience || showEducation ? "0px" : "2px solid",
                  borderColor: (theme) => theme.palette.mode === 'dark' ? '#333333' : '#bbbbbb',
                  py: 3,
                  backgroundColor: "transparent",
                  color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#444444' : '#cccccc',
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              // endIcon={<FaCaretDown />}
              >
                EXPERIENCE
              </Button>
            </Tooltip>
          )}
          {!showWorkExperience && (
            <Tooltip title="Show Education" arrow>
              <Button
                onClick={() => setShowEducation(!showEducation)}
                sx={{
                  borderRadius: "20px",
                  borderBottom: showWorkExperience || showEducation ? "0px" : "2px solid",
                  borderColor: (theme) => theme.palette.mode === 'dark' ? '#333333' : '#bbbbbb',
                  py: 3,
                  backgroundColor: "transparent",
                  color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#444444' : '#cccccc',
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              // endIcon={<FaCaretDown />}
              >
                EDUCATION
              </Button>
            </Tooltip>
          )}
        </Container>
        {showWorkExperience && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "background.default",
              flex: 1,
              width: "800px",
              borderRadius: "16px",
              alignItems: "center",
              boxShadow: 1,
              position: "relative",
              transition: "all 0.5s ease",
              opacity: 0.9,
            }}
          >
            <IconButton
              onClick={() => setShowWorkExperience(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                border: 0,
                borderRadius: "50%",
                color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              }}
            >
              <FaTimes />
            </IconButton>
            <WorkExperience />
          </Box>
        )}
        {showEducation && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "background.default",
              flex: 1,
              width: "800px",
              borderRadius: "16px",
              alignItems: "center",
              boxShadow: 1,
              position: "relative",
              transition: "all 0.5s ease",
              opacity: 0.9,
            }}
          >
            <IconButton
              onClick={() => setShowEducation(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                border: 0,
                borderRadius: "50%",
                color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              }}
            >
              <FaTimes />
            </IconButton>
            <Education />
          </Box>
        )}
        <CertificateCarousel />
      </Container>
    </Box>
  );
}
