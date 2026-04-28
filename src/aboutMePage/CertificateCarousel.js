import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const certificates = [
  { src: "/Certificates/Certificate1.png", title: "Natural Language Processing in TensorFlow" },
  { src: "/Certificates/Certificate2.png", title: "Intermediate Machine Learning" },
  { src: "/Certificates/Certificate3.jpg", title: "Python Bootcamp" },
  { src: "/Certificates/Certificate4.png", title: "Data Science Hackathon 2021 — Runner-Up" },
  { src: "/Certificates/Certificate5.png", title: "Meta Front-End Development" },
  { src: "/Certificates/Certificate6.png", title: "Meta JavaScript" },
  { src: "/Certificates/Certificate7.png", title: "Meta Version Control" },
  { src: "/Certificates/Certificate8.jpeg", title: "Data Science Hackathon 2022 — Runner-Up" },
];

export default function CertificateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedSrc, setExpandedSrc] = useState(null);
  const isSmall = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:960px)");

  const visibleCount = isSmall ? 1 : isMedium ? 2 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrentIndex((p) => (p - 1 + certificates.length) % certificates.length);
  const next = () => setCurrentIndex((p) => (p + 1) % certificates.length);

  const visibleItems = Array.from({ length: visibleCount }, (_, i) =>
    certificates[(currentIndex + i) % certificates.length]
  );

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "20px",
          p: { xs: 3, sm: 4 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          },
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmojiEventsIcon sx={{ color: "#fff", fontSize: 18 }} />
          </Box>
          <Box>
            <Typography variant="overline" sx={{ color: "#6366f1", fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.72rem", display: "block", lineHeight: 1 }}>
              Achievements
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: "-0.01em", fontSize: "1.1rem" }}>
              Certificates & Awards
            </Typography>
          </Box>
        </Box>

        {/* Carousel */}
        <Box sx={{ position: "relative", display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            onClick={prev}
            size="small"
            sx={{
              flexShrink: 0,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "10px",
              transition: "all 0.2s ease",
              "&:hover": { borderColor: "#6366f1", color: "#6366f1", background: "rgba(99,102,241,0.08)" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <Box sx={{ display: "flex", gap: 2, flex: 1, overflow: "hidden" }}>
            {visibleItems.map((cert, i) => (
              <Box
                key={cert.src + i}
                onClick={() => setExpandedSrc(cert.src)}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                  cursor: "pointer",
                  minWidth: 0,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 130, sm: 160 },
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(99,102,241,0.5)",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.15)",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={cert.src}
                    alt={cert.title}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    color: "text.secondary",
                    fontSize: "0.72rem",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {cert.title}
                </Typography>
              </Box>
            ))}
          </Box>

          <IconButton
            onClick={next}
            size="small"
            sx={{
              flexShrink: 0,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "10px",
              transition: "all 0.2s ease",
              "&:hover": { borderColor: "#6366f1", color: "#6366f1", background: "rgba(99,102,241,0.08)" },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Indicator dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.8, mt: 2.5 }}>
          {certificates.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrentIndex(i)}
              sx={{
                width: i === currentIndex ? 18 : 6,
                height: 6,
                borderRadius: "3px",
                bgcolor: i === currentIndex ? "#6366f1" : "divider",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Lightbox */}
      {expandedSrc && (
        <Box
          onClick={() => setExpandedSrc(null)}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            p: 3,
          }}
        >
          <IconButton
            onClick={() => setExpandedSrc(null)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "rgba(255,255,255,0.1)",
              color: "#fff",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={expandedSrc}
            alt="Certificate"
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "16px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.8)",
            }}
          />
        </Box>
      )}
    </>
  );
}
