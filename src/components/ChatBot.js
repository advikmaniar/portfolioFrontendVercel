// ChatWidget.js
import * as React from "react";
import { Box, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {/* Toggle Button */}
      {!isChatOpen && (
        <IconButton
          onClick={toggleChat}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            width: 60,
            height: 60,
            borderRadius: "50%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ChatIcon />
        </IconButton>
      )}

      {/* Chat Widget */}
      {isChatOpen && (
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "350px",
            height: "450px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <iframe
            allow="microphone;"
            width="100%"
            height="100%"
            src="https://console.dialogflow.com/api-client/demo/embedded/6c8e39e7-db13-4c94-bc04-ce4422a6d8a8"
            style={{
              border: "none",
            }}
          />
          {/* Close Button */}
          <IconButton
            onClick={toggleChat}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "background.paper",
              "&:hover": {
                backgroundColor: "background.paper",
              },
              width: 30,
              height: 30,
              borderRadius: "50%",
            }}
          >
            ✖
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default ChatBot;
