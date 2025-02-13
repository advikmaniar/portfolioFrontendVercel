import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppAppBar from "./components/AppAppBar";
import Footer from "./components/Footer";
import AppTheme from "./theme/AppTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import MainContentProjects from "./projectsPage/MainContentProjects";
import MainContentAboutMe from "./aboutMePage/MainContentAboutMe";
import ChatBot from "./components/ChatBot";

export default function App(props) {

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Router>
        <AppAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            my: 16,
            gap: 4,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<MainContentProjects />} />
            <Route path="/about" element={<MainContentAboutMe />} />
          </Routes>
        </Container>
        {/* Chatbot */}
        <ChatBot />
        <Footer />
      </Router>
    </AppTheme>
  );
}
