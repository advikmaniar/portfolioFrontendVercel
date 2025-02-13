import * as React from "react";
import { Box, Container } from "@mui/material";
import NameCard from "./NameCard";
import AboutMeCard from "./AboutMeCard";


export default function MainContent() {

    const bgImages = ['/BackgroundImages/bgImage1.jpg', '/BackgroundImages/bgImage2.jpg',
        '/BackgroundImages/bgImage3.jpg', '/BackgroundImages/bgImage4.png'];
    const randomBgImage = bgImages[Math.floor(Math.random() * bgImages.length)];

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "row" },
                justifyContent: "center",
                alignItems: "center",
                p: { xs: "30px 10px", sm: "100px 0px 100px 0px" },
            }}
        >
            {/* Background Container */}
            <Box
                sx={{
                    position: "absolute",
                    width: { xs: "80%", sm: "70%" },
                    height: "100%",
                    backgroundImage: `url(${randomBgImage})`,
                    backgroundSize: { xs: "100%", sm: "60%" },
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    borderRadius: "20%",
                    zIndex: 0,
                    filter: "blur(2px)",
                }}
            />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },  // Column on small screens, Row on larger screens
                    gap: { xs: 2, sm: 1 },
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "transparent",
                    zIndex: 1,
                    width: "100%",  // Ensures full container width is utilized
                }}
            >
                {/* NameCard */}
                <Box
                    sx={{
                        flex: { xs: 1, sm: 5 },
                        width: "100%",
                        minWidth: { xs: "250px", sm: "auto" },  // Ensures it doesn’t shrink too much on small screens
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 0.9,
                        transition: "opacity 0.3s ease",
                    }}
                >
                    <NameCard />
                </Box>

                {/* AboutMeCard */}
                <Box
                    sx={{
                        flex: { xs: 1, sm: 3 },
                        width: "100%",
                        minWidth: { xs: "250px", sm: "auto" },  // Ensures it stays at least as wide as NameCard
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 0.9,
                        transition: "opacity 0.3s ease",
                    }}
                >
                    <AboutMeCard />
                </Box>
            </Container>

        </Box>
    );
}
