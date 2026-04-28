import React, { useState, useEffect } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppAppBar from "./components/AppAppBar";
import Footer from "./components/Footer";
import AppTheme from "./theme/AppTheme";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import MainContentProjects from "./projectsPage/MainContentProjects";
import MainContentAboutMe from "./aboutMePage/MainContentAboutMe";
import ChatBot from "./components/ChatBot";
import LoadingScreen from "./components/LoadingScreen";

export default function App(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          pt: "80px",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<MainContentProjects />} />
          <Route path="/about" element={<MainContentAboutMe />} />
        </Routes>
      </Box>
      <ChatBot />
      <Footer />
    </AppTheme>
  );
}
