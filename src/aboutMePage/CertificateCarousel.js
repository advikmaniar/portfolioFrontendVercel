import * as React from "react";
import { Container, IconButton, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CertificateCarousel = () => {
    const bgImages = [
        '/Certificates/Certificate1.png', '/Certificates/Certificate2.png', '/Certificates/Certificate3.jpg',
        '/Certificates/Certificate4.png', '/Certificates/Certificate5.png', '/Certificates/Certificate6.png',
        '/Certificates/Certificate7.png', '/Certificates/Certificate8.jpeg'
    ];
    const imageCaptions = [
        'Natural Language Processing in TensorFlow', 'Intermediate Machine Learning', 'Python Bootcamp',
        'Data Science Hackathon 2021 Runner-Up', 'Meta Front-End Development Certificate', 'Meta JavaScript Certificate',
        'Meta Version Control Certificate', 'Data Science Hackathon 2022 Runner-Up'
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [expandedImage, setExpandedImage] = React.useState(null);
    const isSmallScreen = useMediaQuery('(max-width:800px)');
    const isMediumScreen = useMediaQuery('(max-width:1000px)');


    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [bgImages.length]);

    const handleImageClick = (image) => {
        setExpandedImage(image);
    };

    const handleClose = () => {
        setExpandedImage(null);
    };

    const getVisibleImages = () => {
        const visibleImages = [];
        let numVisibleImages;
        if (isSmallScreen) {
            numVisibleImages = 1;
        } else if (isMediumScreen) {
            numVisibleImages = 2;
        } else {
            numVisibleImages = 3;
        }
        for (let i = 0; i < numVisibleImages; i++) {
            visibleImages.push((currentIndex + i) % bgImages.length);
        }
        return visibleImages;
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + bgImages.length) % bgImages.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    };

    return (
        <Container
            sx={{
                width: "100%",
            }}
        >
            <Box
                sx={{
                    borderRadius: "20px",
                    backgroundColor: "background.paper",
                    justifyItems: "center",
                    opacity: 0.9,
                    border: "2px solid",
                    borderColor: (theme) => theme.palette.mode === 'dark' ? '#333333' : '#bbbbbb',
                }}
            >
                <h2 style={{
                    textAlign: "center",
                    borderRadius: "16px",
                    boxShadow: 5,
                    width: "50%",
                    backgroundColor: "transparent",
                }}> Certificates</h2>
                <Box
                    sx={{
                        width: "100%",
                        paddingBottom: 5,
                        height: "flex",
                        borderRadius: "16px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <IconButton
                        sx={{ position: "absolute", left: 0 }}
                        onClick={handlePrev}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                    {getVisibleImages().map((index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                mx: 1,
                            }}
                        >
                            <img
                                src={bgImages[index]}
                                alt={`Image ${index + 1}`}
                                style={{
                                    width: "flex",
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "16px",
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease-in-out",
                                }}
                                onClick={() => handleImageClick(bgImages[index])}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                            />
                            <Box
                                sx={{
                                    mt: 1,
                                    textAlign: "center",
                                    boxShadow: 3,
                                    borderRadius: 10,
                                    fontFamily: "serif",
                                    fontWeight: "bold",
                                    padding: "5px",
                                    color: "text.primary",
                                    opacity: 0.8,
                                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#333333' : '#bbbbbb',
                                }}
                            >
                                {imageCaptions[index]}
                            </Box>
                        </Box>
                    ))}
                    <IconButton
                        sx={{ position: "absolute", right: 0 }}
                        onClick={handleNext}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>
            {expandedImage && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                    onClick={handleClose}
                >
                    <img
                        src={expandedImage}
                        alt="Expanded"
                        style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "8px" }}
                    />
                </Box>
            )}
        </Container>
    );
}

export default CertificateCarousel;
