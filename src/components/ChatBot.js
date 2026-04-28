import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Advik's assistant. Ask me anything about his experience, skills, or projects!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((prev) => [...prev, { text: userText, sender: "user" }]);
    setInput("");

    try {
      const response = await fetch(
        "https://dialogflow.googleapis.com/v2/projects/personalportfolio-445102/agent/sessions/123456789:detectIntent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer edfffa1459c737989f520d4b3860e75ad2fecb67`,
          },
          body: JSON.stringify({
            queryInput: { text: { text: userText, languageCode: "en" } },
          }),
        }
      );
      const data = await response.json();
      const botReply = data.queryResult?.fulfillmentText || "I'm not sure about that. You can contact Advik directly!";
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong. Please try again!", sender: "bot" },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Box sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1300 }}>
      {/* Collapsed button */}
      {!isChatOpen && (
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: -2,
              right: -2,
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#22c55e",
              border: "2px solid",
              borderColor: "background.default",
              zIndex: 1,
            }}
          />
          <IconButton
            onClick={() => setIsChatOpen(true)}
            sx={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              color: "#fff",
              width: 52,
              height: 52,
              boxShadow: "0 4px 20px rgba(99,102,241,0.45)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #4f46e5, #0891b2)",
                transform: "scale(1.05)",
                boxShadow: "0 6px 28px rgba(99,102,241,0.6)",
              },
            }}
          >
            <ChatIcon />
          </IconButton>
        </Box>
      )}

      {/* Chat window */}
      {isChatOpen && (
        <Box
          sx={{
            width: { xs: "calc(100vw - 48px)", sm: 360 },
            height: 460,
            borderRadius: "20px",
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 16px 64px rgba(0,0,0,0.35)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SmartToyIcon sx={{ color: "#fff", fontSize: 20 }} />
              <Box>
                <Typography variant="body2" sx={{ color: "#fff", fontWeight: 700, lineHeight: 1.2 }}>
                  Advik's Assistant
                </Typography>
                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Usually replies instantly
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={() => setIsChatOpen(false)}
              size="small"
              sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255,255,255,0.15)" } }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              "&::-webkit-scrollbar": { width: 4 },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(99,102,241,0.3)",
                borderRadius: 2,
              },
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "82%",
                    px: 1.8,
                    py: 1.2,
                    borderRadius: msg.sender === "user"
                      ? "18px 18px 4px 18px"
                      : "18px 18px 18px 4px",
                    background: msg.sender === "user"
                      ? "linear-gradient(135deg, #6366f1, #06b6d4)"
                      : (theme) => theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.06)",
                    color: msg.sender === "user" ? "#fff" : "text.primary",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: msg.text.replace(
                        /(https?:\/\/[^\s]+)/g,
                        '<a href="$1" target="_blank" rel="noopener noreferrer" style="color:inherit;opacity:0.85">$1</a>'
                      ),
                    }}
                  />
                </Box>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box
            sx={{
              p: 1.5,
              borderTop: "1px solid",
              borderColor: "divider",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  fontSize: "0.88rem",
                  "& fieldset": { borderColor: "rgba(99,102,241,0.2)" },
                  "&.Mui-focused fieldset": { borderColor: "#6366f1" },
                },
              }}
            />
            <IconButton
              onClick={sendMessage}
              disabled={!input.trim()}
              sx={{
                background: input.trim()
                  ? "linear-gradient(135deg, #6366f1, #06b6d4)"
                  : "transparent",
                color: input.trim() ? "#fff" : "text.disabled",
                borderRadius: "12px",
                p: 1,
                transition: "all 0.2s ease",
                "&:hover": {
                  background: input.trim()
                    ? "linear-gradient(135deg, #4f46e5, #0891b2)"
                    : "transparent",
                },
              }}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChatBot;
