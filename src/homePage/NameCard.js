import { Container, Typography, IconButton } from '@mui/material';
import { Twitter, LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { FaKaggle } from "react-icons/fa";
import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import { useState, useEffect } from 'react';

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

const NameCard = () => {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.paper",
            height: "flex",
            width: "max-content",
            p: "30px 50px 30px 50px",
            borderRadius: "16px",
            alignItems: "center",
            boxShadow: 1,
            transition: "all 0.5s ease",
            '&:hover': {
                boxShadow: 3,
                transform: "scale(1.02)",
            },
        }}>
            <Typography variant="h4" sx={{
                fontWeight: "bold",
                fontSize: { xs: '36px', sm: '60px' },
                display: "inline",
            }}>
                <Typography variant="h4" sx={{
                    display: { xs: 'none', sm: 'none', md: 'inline' },
                    fontSize: { xs: '36px', sm: '60px'  },
                }}>
                    Hi👋, i'm 
                </Typography>
                <span className="animated-text">
                    <u>
                        {Array.from(" Advik Maniar").map((letter, index) => (
                            <span key={index}>{letter === ' ' ? '\u00A0' : letter}</span>
                        ))}
                    </u>
                </span>
            </Typography>
            <style>
                {`
                @keyframes fadeInLetter {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animated-text u {
                    display: inline-block;
                }
                .animated-text u span {
                    display: inline-block;
                    opacity: 0;
                    animation: fadeInLetter 0.5s forwards;
                }
                .animated-text u span:nth-child(1) { animation-delay: 0s; }
                .animated-text u span:nth-child(2) { animation-delay: 0.1s; }
                .animated-text u span:nth-child(3) { animation-delay: 0.2s; }
                .animated-text u span:nth-child(4) { animation-delay: 0.3s; }
                .animated-text u span:nth-child(5) { animation-delay: 0.4s; }
                .animated-text u span:nth-child(6) { animation-delay: 0.5s; }
                .animated-text u span:nth-child(7) { animation-delay: 0.6s; }
                .animated-text u span:nth-child(8) { animation-delay: 0.7s; }
                .animated-text u span:nth-child(9) { animation-delay: 0.8s; }
                .animated-text u span:nth-child(10) { animation-delay: 0.9s; }
                .animated-text u span:nth-child(11) { animation-delay: 1s; }
            `}
            </style>
            <Typography variant="h6" sx={{
                fontSize: 25,
                color: "text.secondary",
                display: { xs: 'none', sm: 'block' },
            }}>
                Software Developer based In New York
            </Typography>

            {/* Social Media Icons */}
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mt: 3,
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
        </Container>
    );
}

export default NameCard;