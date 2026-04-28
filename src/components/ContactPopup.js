import React, { useState } from "react";
import {
  Modal, Box, Typography, IconButton, Button,
  TextField, Alert, Stack,
} from "@mui/material";
import { Close as CloseIcon, LinkedIn, GitHub, Instagram, Send } from "@mui/icons-material";
import { FaKaggle } from "react-icons/fa";
import axios from "axios";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/advikmaniar/",
    color: "#0077b5",
  },
  {
    label: "GitHub",
    icon: <GitHub />,
    url: "https://github.com/advikmaniar",
    color: "#6e5494",
  },
  {
    label: "Kaggle",
    icon: <FaKaggle size={18} />,
    url: "https://www.kaggle.com/advikmaniar",
    color: "#1da1f2",
  },
  {
    label: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/advik0220/",
    color: "#e4405f",
  },
];

const ContactPopup = ({ open, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/send-email", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus({ type: "success", message: "Message sent! I'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", message: "Failed to send. Please email me directly at advikmaniar20@gmail.com" });
    } finally {
      setLoading(false);
    }
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      "& fieldset": { borderColor: "rgba(99,102,241,0.2)" },
      "&:hover fieldset": { borderColor: "rgba(99,102,241,0.5)" },
      "&.Mui-focused fieldset": { borderColor: "#6366f1" },
    },
    "& label.Mui-focused": { color: "#6366f1" },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "92vw", sm: 480 },
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          borderRadius: "20px",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          outline: "none",
        }}
      >
        {/* Header gradient bar */}
        <Box
          sx={{
            height: 4,
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            borderRadius: "20px 20px 0 0",
          }}
        />

        <Box sx={{ p: { xs: 3, sm: 4 } }}>
          {/* Close button */}
          <IconButton
            onClick={onClose}
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "action.hover",
              borderRadius: "10px",
              "&:hover": { bgcolor: "action.selected" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 0.5,
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Connect
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
            Send a message and I'll respond within 24 hours.
          </Typography>

          {/* Social icons */}
          <Stack direction="row" spacing={1} sx={{ mb: 2.5 }}>
            {socialLinks.map(({ label, icon, url, color }) => (
              <IconButton
                key={label}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "10px",
                  color: "text.secondary",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: color,
                    color: color,
                    background: `${color}18`,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>

          {/* Email direct */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Or email:{" "}
            <Box
              component="a"
              href="mailto:advikmaniar20@gmail.com"
              sx={{
                color: "#6366f1",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              advikmaniar20@gmail.com
            </Box>
          </Typography>

          {/* Status alert */}
          {status && (
            <Alert severity={status.type} sx={{ mb: 2, borderRadius: "12px" }}>
              {status.message}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Your Name"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
              sx={{ ...inputSx, mb: 2 }}
            />
            <TextField
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              sx={{ ...inputSx, mb: 2 }}
            />
            {/* Native textarea — avoids MUI floating label misalignment on multiline */}
            <Box sx={{ mb: 3 }}>
              <Box
                component="label"
                htmlFor="contact-message"
                sx={{
                  display: "block",
                  mb: 0.8,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "text.secondary",
                  fontFamily: "inherit",
                  cursor: "text",
                }}
              >
                Message *
              </Box>
              <Box
                id="contact-message"
                component="textarea"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                sx={{
                  display: "block",
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px solid rgba(99,102,241,0.2)",
                  bgcolor: "transparent",
                  color: "text.primary",
                  fontSize: "0.95rem",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                  resize: "vertical",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": { borderColor: "rgba(99,102,241,0.5)" },
                  "&:focus": {
                    borderColor: "#6366f1",
                    boxShadow: "0 0 0 3px rgba(99,102,241,0.12)",
                  },
                  "&::placeholder": { color: "text.disabled", opacity: 1 },
                }}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              endIcon={<Send />}
              sx={{
                background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                py: 1.4,
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #4f46e5, #0891b2)",
                  boxShadow: "0 6px 24px rgba(99,102,241,0.5)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-disabled": {
                  background: "rgba(99,102,241,0.3)",
                  color: "rgba(255,255,255,0.5)",
                },
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactPopup;
