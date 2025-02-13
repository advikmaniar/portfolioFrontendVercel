import React, { useState } from "react";
import { Modal, Box, Typography, IconButton, Button, TextField, Container, Alert, Divider } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { FaKaggle } from "react-icons/fa";
import axios from "axios";

const StyledIcons = ({ color, bgColor, hoverColor, icon, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <IconButton
                sx={{
                    borderRadius: "50%",
                    backgroundColor: bgColor,
                    '&:hover': {
                        backgroundColor: hoverColor,
                        transform: "scale(1.2)",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                    },
                    transition: "all 0.3s ease",
                }}
                aria-label={color}
            >
                {React.cloneElement(icon, { sx: { color: "white" } })}
            </IconButton>
        </a>
    );
};

const ContactPopup = ({ open, onClose }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus(null);

        try {
            const response = await axios.post("https://portfoliobackendrender.onrender.com/api/send-email", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setStatus({ type: "success", message: "Message sent successfully!" });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus({ type: "error", message: "Failed to send message. Please try again." });
            console.error(error);
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="contact-modal-title"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: 500,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 20,
                p: 4,
            }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 1
                    }}
                >
                    <Typography id="contact-modal-title" variant="h4">
                        Let's Connect!
                    </Typography>
                    <Typography id="contact-modal-body" variant="body2" color="textSecondary">
                        Send me a message and I will respond back within 24 hours
                    </Typography>
                    <Divider sx={{ width: "100%", mt: 2 }} />
                    <IconButton
                        onClick={onClose}
                        size="small"
                        sx={{
                            position: 'absolute',
                            borderRadius: "20px",
                            top: 10,
                            right: 10,
                            backgroundColor: 'transparent !important',
                            border: "transparent !important",
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: "black"
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Container sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "fit-content",
                    borderRadius: 5,
                    gap: 2,
                    py: 1,
                    my: 1,
                }}>
                    <StyledIcons
                        color="linkedin"
                        bgColor="#0077b5"
                        hoverColor="#005c8a"
                        icon={<LinkedIn fontSize="medium" />}
                        url="https://www.linkedin.com/in/advikmaniar/"
                    />
                    <StyledIcons
                        color="github"
                        bgColor="#333"
                        hoverColor="#444"
                        icon={<GitHub fontSize="medium" />}
                        url="https://github.com/advikmaniar"
                    />
                    <StyledIcons
                        color="kaggle"
                        bgColor="#1da1f2"
                        hoverColor="#1991c6"
                        icon={<FaKaggle fontSize="medium" />}
                        url="https://www.kaggle.com/advikmaniar"
                    />
                    <StyledIcons
                        color="instagram"
                        bgColor="#e4405f"
                        hoverColor="#b32f46"
                        icon={<Instagram fontSize="medium" />}
                        url="https://www.instagram.com/advik0220/"
                    />
                </Container>
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                    <Typography variant="body1">
                        Email: <a href="mailto:advikmaniar20@gmail.com">advikmaniar20@gmail.com</a>
                    </Typography>
                </Box>

                {/* Contact Form */}
                {status && (
                    <Alert severity={status.type} sx={{ mb: 2 }}>
                        {status.message}
                    </Alert>
                )}
                <form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            name="name"
                            label="First Name"
                            fullWidth
                            sx={{ mb: 2 }}
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            required
                        />
                        <TextField
                            name="email"
                            label="Email"
                            fullWidth
                            sx={{ mb: 2 }}
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            required
                        />
                        <TextField
                            name="message"
                            label="Message"
                            fullWidth
                            sx={{
                                mb: 2,
                                '& .MuiInputBase-root': {
                                    minHeight: '120px',
                                    resize: 'vertical',
                                },
                            }}
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            required
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: 'center'
                        }}>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                bgcolor: "primary.main",
                                color: "background.paper",
                                borderRadius: "8px",
                                width: "fit-content",
                                fontWeight: "bold",
                                boxShadow: 3,
                                gap: 0.5,
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    bgcolor: "primary.dark",
                                    boxShadow: 6,
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <Typography variant="text1">
                                Send
                            </Typography>
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default ContactPopup;