import React, { useState } from "react";
import {
  Box, Typography, Dialog, DialogContent, IconButton,
  Chip, Tooltip, Divider,
} from "@mui/material";
import { GitHub, Close, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { FaPython, FaReact, FaNode, FaAws, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiPandas, SiNumpy, SiMysql, SiStreamlit, SiScikitlearn, SiPlotly, SiMongodb } from "react-icons/si";
import { SiTwilio } from "react-icons/si";
import { TbApi, TbChartBar } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import LikeButton from "./LikeButton";

/* ─── Tool icon map ─────────────────────────────────────────── */
const toolIcons = {
  "React.js":    <FaReact    style={{ color: "#61DBFB", fontSize: "1.3rem" }} />,
  "Node.js":     <FaNode     style={{ color: "#68A063", fontSize: "1.3rem" }} />,
  "Python":      <FaPython   style={{ color: "#306998", fontSize: "1.3rem" }} />,
  "MongoDB":     <SiMongodb  style={{ color: "#3FA037", fontSize: "1.2rem" }} />,
  "AWS":         <FaAws      style={{ color: "#FF9900", fontSize: "1.3rem" }} />,
  "Twilio":      <SiTwilio   style={{ color: "#F22F46", fontSize: "1.3rem" }} />,
  "TensorFlow":  <SiTensorflow style={{ color: "#FFA101", fontSize: "1.3rem" }} />,
  "Pandas":      <SiPandas   style={{ color: "#150458", fontSize: "1.3rem" }} />,
  "NumPy":       <SiNumpy    style={{ color: "#4D76CE", fontSize: "1.3rem" }} />,
  "MySQL":       <SiMysql    style={{ color: "#00758F", fontSize: "1.3rem" }} />,
  "StreamLit":   <SiStreamlit style={{ color: "#FF4B4B", fontSize: "1.3rem" }} />,
  "Sklearn":     <SiScikitlearn style={{ color: "#F79939", fontSize: "1.3rem" }} />,
  "Plotly":      <SiPlotly   style={{ color: "#119DFF", fontSize: "1.3rem" }} />,
  "SQLite":      <FaDatabase  style={{ color: "#003B57", fontSize: "1.2rem" }} />,
  "REST APIs":   <TbApi      style={{ color: "#0082C6", fontSize: "1.3rem" }} />,
  "Charts":      <TbChartBar style={{ color: "#6366f1", fontSize: "1.3rem" }} />,
  "JavaScript":  <IoLogoJavascript style={{ color: "#E1BF05", fontSize: "1.3rem" }} />,
};

/* ─── Category badge colours ────────────────────────────────── */
const categoryStyle = {
  "Full-Stack":      { bg: "rgba(99,102,241,0.15)",  color: "#818cf8" },
  "ML · Prediction": { bg: "rgba(6,182,212,0.15)",   color: "#22d3ee" },
  "FinTech · Bot":   { bg: "rgba(16,185,129,0.15)",  color: "#34d399" },
  "FinTech · App":   { bg: "rgba(251,146,60,0.15)",  color: "#fb923c" },
};

/* ─── Project data ───────────────────────────────────────────── */
const allProjects = [
  /* ── EZInterview ── */
  {
    date: "December 2024",
    name: "EZInterview",
    category: "Full-Stack",
    textSecondary: "Real-Time Interview Platform for Employers & Job Seekers",
    description: [
      "Real-time video interview platform with secure, dedicated meeting rooms per session.",
      "JWT + OAuth 2.0 authentication with role-based access for interviewers and candidates.",
      "Integrated Twilio for peer-to-peer video, screen sharing, and in-session chat.",
      "React.js + Express.js frontend/backend with MongoDB for session and user data.",
      "Deployed on AWS EC2 & S3 for elastic scaling and 99.9% uptime.",
    ],
    tools: ["React.js", "Node.js", "MongoDB", "AWS", "Twilio"],
    images: [
      "/EZInterviewImages/EZInterview_Image1.png",
      "/EZInterviewImages/EZInterview_Image2.png",
      "/EZInterviewImages/EZInterview_Image3.png",
      "/EZInterviewImages/EZInterview_Image4.png",
    ],
    github: "https://github.com/advikmaniar/interview-portal",
    accentColor: "#6366f1",
  },

  /* ── TradEazy ── */
  {
    date: "2025",
    name: "TradEazy",
    category: "FinTech · Bot",
    textSecondary: "Automated Forex Algorithmic Trading Bot",
    description: [
      "Built an autonomous Forex trading bot that continuously monitors 10+ major currency pairs (EUR/USD, GBP/USD, USD/JPY) and fires buy/sell signals without manual intervention.",
      "Engineered multi-indicator strategy stacking RSI, MACD, Bollinger Bands, and EMA crossovers to filter high-probability trade setups and reduce false signals.",
      "Developed a backtesting engine on 4+ years of OANDA historical tick data; achieved a 66% win-rate on the EUR/USD pair with a 1.8 : 1 reward-to-risk ratio.",
      "Implemented adaptive risk management: per-trade stop-loss/take-profit calibrated to ATR (Average True Range) and dynamic position sizing capped at 1% account equity per trade.",
      "Deployed 24/7 on AWS EC2 with a trade journal (SQLite), real-time P&L dashboard (Plotly), and email/SMS alerts on every signal and execution.",
    ],
    tools: ["Python", "Pandas", "NumPy", "REST APIs", "AWS", "Plotly"],
    images: [
      "/TradEazyImages/HomePage.png",
      "/TradEazyImages/TradesPAge.png",
      "/TradEazyImages/ReportPage.png",
    ],
    github: null,
    privateRepo: true,
    accentColor: "#10b981",
  },

  /* ── Personal Finance Dashboard ── */
  {
    date: "2025",
    name: "Finance Dashboard",
    category: "FinTech · App",
    textSecondary: "Personal Finance & Budget Management Web App",
    description: [
      "Comprehensive full-stack finance tracker covering income, expenses, investments, and budget goals — all in one interactive React.js dashboard.",
      "Dynamic charts (Recharts) deliver instant visual breakdowns: monthly spending by category, income-vs-expense trend lines, and net-worth progression over time.",
      "Node.js / Express REST API backed by SQLite for fast, local-first storage with no third-party data sharing — privacy by design.",
      "Smart CSV bank statement import with automatic transaction categorization using keyword pattern matching (groceries, utilities, entertainment, etc.).",
      "Budget envelope system: set spending limits per category with real-time colour-coded alerts (green → amber → red) as limits are approached, plus JWT-secured accounts and dark / light mode.",
    ],
    tools: ["React.js", "Node.js", "SQLite", "JavaScript", "Charts"],
    images: ["/FinanceDashboardImages/FinanceDash_Image1.png"],
    github: "https://github.com/advikmaniar/finance-dashboard",
    accentColor: "#f97316",
  },

  /* ── StockAI ── */
  {
    date: "May 2023",
    name: "StockAI",
    category: "ML · Prediction",
    textSecondary: "ML-Powered Stock Price Prediction Model",
    description: [
      "Led a team of 4 to build an LSTM-based stock price prediction model achieving 70% directional accuracy across 50 tickers.",
      "Combined technical indicators (SMA, RSI, MACD) with sentiment scores from Yahoo Finance news via BeautifulSoup for richer feature engineering.",
      "TensorFlow LSTM model trained on 5 years of OHLCV data; hyperparameter-tuned with Keras Tuner to minimise RMSE.",
      "Real-time StreamLit dashboard surfaces next-day forecasts, confidence intervals, and portfolio-level P&L simulation.",
      "MySQL stores historical prices and user watchlists; pandas pipeline handles cleaning, normalisation, and train/test split.",
    ],
    tools: ["Python", "TensorFlow", "StreamLit", "MySQL", "Pandas"],
    images: [
      "/StockPredictionImages/StockPrediction_Image1.jpg",
      "/StockPredictionImages/StockPrediction_Image2.jpg",
      "/StockPredictionImages/StockPrediction_Image3.jpg",
    ],
    github: "https://github.com/advikmaniar/Stock-Price",
    accentColor: "#06b6d4",
  },
];

/* ─── Project Card ───────────────────────────────────────────── */
function ProjectCard({ project, onClick }) {
  const catStyle = categoryStyle[project.category] || { bg: "rgba(99,102,241,0.12)", color: "#6366f1" };

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
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: `${project.accentColor}55`,
          boxShadow: `0 8px 32px ${project.accentColor}22`,
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Image / gradient fallback */}
      <Box
        sx={{
          position: "relative",
          height: 200,
          overflow: "hidden",
          background: `linear-gradient(135deg, ${project.accentColor}33, ${project.accentColor}11)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={project.images[0]}
          alt={project.name}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />
        {/* gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.5) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Fallback project name shown when no image */}
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "2rem",
            color: project.accentColor,
            opacity: 0.35,
            letterSpacing: "-0.04em",
            userSelect: "none",
            position: "relative",
            zIndex: 0,
          }}
        >
          {project.name}
        </Typography>

        {/* Date chip */}
        <Chip
          label={project.date}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: "0.68rem",
            fontWeight: 600,
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.12)",
            zIndex: 1,
          }}
        />

        {/* Category badge */}
        <Chip
          label={project.category}
          size="small"
          sx={{
            position: "absolute",
            bottom: 12,
            left: 12,
            bgcolor: catStyle.bg,
            color: catStyle.color,
            fontSize: "0.68rem",
            fontWeight: 700,
            backdropFilter: "blur(8px)",
            border: `1px solid ${catStyle.color}44`,
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 0.4, letterSpacing: "-0.01em" }}>
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem", mb: 2, lineHeight: 1.55 }}>
          {project.textSecondary}
        </Typography>

        {/* Tech icons */}
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

/* ─── Project Modal ──────────────────────────────────────────── */
function ProjectModal({ project, open, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const catStyle = categoryStyle[project?.category] || { bg: "rgba(99,102,241,0.12)", color: "#6366f1" };

  React.useEffect(() => { if (open) setImgIndex(0); }, [open, project]);
  if (!project) return null;

  const hasMultiple = project.images.length > 1;

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
      {/* Accent bar */}
      <Box sx={{ height: 4, background: `linear-gradient(90deg, ${project.accentColor}, #06b6d4)` }} />

      <DialogContent sx={{ p: 0 }}>
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 220, sm: 300 },
            background: `linear-gradient(135deg, ${project.accentColor}33, ${project.accentColor}11)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={project.images[imgIndex]}
            alt={`${project.name} screenshot`}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
          {/* Fallback label */}
          <Typography sx={{ fontWeight: 900, fontSize: "3rem", color: project.accentColor, opacity: 0.2, letterSpacing: "-0.04em" }}>
            {project.name}
          </Typography>

          {hasMultiple && (
            <>
              <IconButton
                onClick={() => setImgIndex((p) => (p === 0 ? project.images.length - 1 : p - 1))}
                sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", bgcolor: "rgba(0,0,0,0.45)", color: "#fff", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "rgba(0,0,0,0.65)" } }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={() => setImgIndex((p) => (p === project.images.length - 1 ? 0 : p + 1))}
                sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", bgcolor: "rgba(0,0,0,0.45)", color: "#fff", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "rgba(0,0,0,0.65)" } }}
              >
                <ChevronRight />
              </IconButton>
              <Box sx={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 0.8 }}>
                {project.images.map((_, i) => (
                  <Box key={i} onClick={() => setImgIndex(i)} sx={{ width: i === imgIndex ? 18 : 6, height: 6, borderRadius: "3px", bgcolor: i === imgIndex ? project.accentColor : "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.25s ease" }} />
                ))}
              </Box>
            </>
          )}
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8, bgcolor: "rgba(0,0,0,0.5)", color: "#fff", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "rgba(0,0,0,0.7)" } }}
          >
            <Close />
          </IconButton>
        </Box>

        {/* Details */}
        <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
          {/* Header row */}
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 0.5 }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap", mb: 0.4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                  {project.name}
                </Typography>
                <Chip
                  label={project.category}
                  size="small"
                  sx={{ bgcolor: catStyle.bg, color: catStyle.color, fontWeight: 700, fontSize: "0.7rem", border: `1px solid ${catStyle.color}44` }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                {project.textSecondary} · {project.date}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
              <LikeButton projectName={project.name} />
              <Tooltip title={project.privateRepo ? "Contact Me to Use" : "View Code"} arrow>
                <span>
                  <IconButton
                    component={project.privateRepo ? "button" : "a"}
                    href={project.privateRepo ? undefined : project.github}
                    target={project.privateRepo ? undefined : "_blank"}
                    rel={project.privateRepo ? undefined : "noopener noreferrer"}
                    disabled={project.privateRepo}
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      bgcolor: project.privateRepo ? "action.disabledBackground" : "#24292e",
                      color: project.privateRepo ? "text.disabled" : "#fff",
                      borderRadius: "10px",
                      p: 0.8,
                      transition: "all 0.2s ease",
                      cursor: project.privateRepo ? "not-allowed" : "pointer",
                      "&:hover": project.privateRepo
                        ? {}
                        : { bgcolor: "#444", transform: "scale(1.05)" },
                    }}
                  >
                    <GitHub fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Description bullets */}
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
                    background: `linear-gradient(135deg, ${project.accentColor}, #06b6d4)`,
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: "0.88rem" }}>
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Tech stack */}
          <Typography variant="overline" sx={{ color: project.accentColor, fontWeight: 700, letterSpacing: "0.12em", fontSize: "0.68rem" }}>
            Tech Stack
          </Typography>
          <Box sx={{ display: "flex", gap: 1.2, flexWrap: "wrap", mt: 1 }}>
            {project.tools.map((tool) => (
              <Box
                key={tool}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.5,
                  py: 0.5,
                  bgcolor: "action.hover",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "10px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "text.secondary",
                  transition: "all 0.2s ease",
                  "&:hover": { borderColor: `${project.accentColor}66`, color: project.accentColor },
                }}
              >
                {toolIcons[tool] && <Box sx={{ display: "flex", fontSize: "0.95rem" }}>{toolIcons[tool]}</Box>}
                {tool}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

/* ─── Main export ────────────────────────────────────────────── */
export default function AllProjects() {
  const [selected, setSelected] = useState(null);

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
        {allProjects.map((p) => (
          <ProjectCard key={p.name} project={p} onClick={() => setSelected(p)} />
        ))}
      </Box>

      {/* Footer link */}
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
          More projects and experiments available on my GitHub
        </Typography>
        <IconButton
          component="a"
          href="https://github.com/advikmaniar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{ bgcolor: "#24292e", color: "#fff", borderRadius: "8px", p: 0.7, ml: "auto", flexShrink: 0, "&:hover": { bgcolor: "#444" } }}
        >
          <GitHub fontSize="small" />
        </IconButton>
      </Box>

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
