import React, { useState } from 'react';
import { Divider, Typography, Box, Container, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FaKaggle, FaPython } from "react-icons/fa";
import { SiScipy, SiPlotly, SiNumpy, SiScikitlearn, SiTensorflow, SiPandas, SiMongodb, SiMysql, SiStreamlit, SiTableau, SiKaggle } from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';
import { IoIosClose } from "react-icons/io";
import { StyledIconsPortfolio } from '../utils/utils';
import LikeButton from './LikeButton';



const dataProjects = [
    {
        date: 'May 2023',
        name: 'StockAI',
        affiliation: 'NY Institute of Technology',
        textSecondary: 'ML Powered Stock Prediction Model',
        description: [
            'Led a group of 4 developers to create an ML-based stock prediction model, achieving a prediction accuracy of 70%. ',
            'Analyzed financial data for 50 stocks, including sentiment analysis with news data from Yahoo Finance API and Beautiful Soup. ',
            'Developed an intuitive StreamLit dashboard to display real-time predictions for over 50 stocks.'
        ],
        tools: [
            'Python',
            'TensorFlow',
            'StreamLit',
            'MySQL',
            'Pandas',
        ],
        images: ['/StockPredictionImages/StockPrediction_Image1.jpg', '/StockPredictionImages/StockPrediction_Image2.jpg', '/StockPredictionImages/StockPrediction_Image3.jpg', '/StockPredictionImages/StockPrediction_Image4.jpg'],
        github: 'https://github.com/advikmaniar/Stock-Price'
    },
    {
        date: 'May 2021',
        name: 'Machine Learning in Healthcare',
        affiliation: 'Self',
        textSecondary: 'ML Powered Wellness Prediction Model',
        description: [
            "This is an interactive Machine Learning Web App developed using Python and StreamLit.",
            "It uses ML algorithms to build powerful models and predict the risk of the user of having a Heart Attack or Breast Cancer based on the user's specific attributes.",
        ],
        tools: [
            'Python',
            'StreamLit',
            'Sklearn',
            'Pandas',
            'TensorFlow',
        ],
        images: ['/MLHealthcareImages/MLHealthcare_Image1.png', '/MLHealthcareImages/MLHealthcare_Image2.png', '/MLHealthcareImages/MLHealthcare_Image3.png'],
        github: 'https://github.com/advikmaniar/ML-Healthcare-Web-App'
    },
    {
        date: 'December 2022',
        name: 'Report Generator Tool',
        affiliation: 'ETIC',
        textSecondary: 'Data Analysis tool & PDF Generator for time-series data',
        description: [
            'Developed prototype data tools, working in the Entrepreneurship and Technology Innovation Center, under the NASA Contract.',
            'Real-time data reader that analyzes, visualizes, and generates a PDF report on data provided.',
            'Forecasted weather metrics for the next 2 weeks with 84% testing accuracy.',
        ],
        tools: [
            'Python',
            'Sklearn',
            'Pandas',
            'Scipy',
            'Plotly',
        ],
        images: ['/DataReaderImages/DataReader_Image1.png', '/DataReaderImages/DataReader_Image2.png', '/DataReaderImages/DataReader_Image3.png', '/DataReaderImages/DataReader_Image4.png',],
        github: 'https://github.com/advikmaniar/Data-Analysis-Tool'
    },
    {
        date: 'October 2024',
        name: 'Anime House',
        affiliation: 'NY Institute of Tech',
        textSecondary: 'Recommendation System for Anime Lovers',
        description: [
            'Hybrid recommendation system developed with collaborative filtering algorithms.',
            'Visualized and analyzed data with Plotly and Matplotlib.',
            'Model trained on 20,000+ user reviews and ratings from MyAnimeList API.',
            'User-based and Item-based CF to recommend anime based on user preferences.',
            'Achieved an accuracy of 80% on the test dataset.'

        ],
        tools: [
            'Python',
            'Pandas',
            'Sklearn',
            'Plotly',

        ],
        images: ['/AnimeHouseImages/AnimeHouse_Image1.png', '/AnimeHouseImages/AnimeHouse_Image2.png', '/AnimeHouseImages/AnimeHouse_Image3.png'],
        github: 'https://github.com/advikmaniar/interview-portal'
    },

];

const DataProjects = () => {
    const [expanded, setExpanded] = useState(null);

    const handleExpandClick = (row, index) => {
        setExpanded(expanded === `${row}-${index}` ? null : `${row}-${index}`);
    };

    const [likes, setLikes] = useState(Array(dataProjects.length).fill(0));
    const [expandedImageIndex, setExpandedImageIndex] = useState(0);

    const handleLikeClick = (index) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);

    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                backgroundColor: 'background.paper',
                opacity: 0.9,
                padding: '10px',
                borderRadius: '10px',
                boxShadow: 3,
                alignItems: 'left',
            }}
        >
            <Typography variant="h6" component="div"
                sx={{
                    mb: 1,
                    color: 'text.secondary',
                    backgroundColor: 'background.paper',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    width: 'fit-content',
                    borderRadius: '10px',
                    p: '5px',
                    fontFamily: 'Cursive',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h6" color="text.primary"
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Cursive',
                    }}>
                    "In God we trust. All others must bring data📊" - Data is the currency of trust. Data is the new oil.
                </Typography>
                <Typography variant="h6" color="text.secondary"
                    sx={{
                        mt: 1,
                        color: 'text.secondary',
                        backgroundColor: 'background.paper',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        width: 'fit-content',
                        borderRadius: '10px',
                        p: '5px',
                        fontFamily: 'Cursive',
                        justifyContent: 'center',
                    }}>
                    Some of my data fueled projects:
                </Typography>
                -&gt; Powerful Machine Learning algorithms to build forecasting models, and intuitive dashboards with{' '}
                <a href="https://streamlit.io" target="_blank" rel="noopener noreferrer">
                    StreamLit<SiStreamlit style={{ marginLeft: "2px", color: "#FF4B4B", fontSize: "2rem", verticalAlign: "bottom" }} />
                </a>
                <br />
                -&gt; Visualized data to analyze, generate insights and make data-driven decisions with{' '}
                <a href="https://plotly.com" target="_blank" rel="noopener noreferrer">
                    Plotly<SiPlotly style={{ marginLeft: "2px", color: "#119DFF", fontSize: "2rem", verticalAlign: "bottom" }} />
                </a>
                {' '} and {' '}
                <a href="https://tableau.com" target="_blank" rel="noopener noreferrer">
                    Tableau<SiTableau style={{ marginLeft: "2px", color: "#119DFF", fontSize: "2rem", verticalAlign: "bottom" }} />
                </a>
                <br />
                -&gt; Developed Recommendation Systems with Natural Language Processing tools and deep learning frameworks.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                {[0, 1].map((row) => (
                    <Box
                        key={row}
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        width="100%"
                    >
                        {dataProjects.slice(row * 2, row * 2 + 2).map((project, index) => (
                            <Box key={index}
                                sx={{
                                    height: expanded === `${row}-${index}` ? '65vh' : expanded ? "50px" : "350px",
                                    width: expanded === `${row}-${index}` ? '100vh' : expanded ? "50px" : "100%",
                                    transition: 'all 0.3s ease',
                                    margin: '10px',
                                    position: 'relative',
                                    '&:hover::after': {
                                        content: expanded === `${row}-${index}` ? '""' : `"${project.name}"`,
                                        position: 'absolute',
                                        padding: '2px',
                                        borderRadius: '10px',
                                        zIndex: 1,
                                    },
                                }}
                                onClick={() => handleExpandClick(row, index)}
                            >
                                <Card
                                    sx={{
                                        p: 0,
                                        m: 0,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '10px',
                                        justifyContent: 'left',
                                        alignItems: 'left',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: 'background.paper',
                                        '&:hover': expanded === `${row}-${index}` ? {} : {
                                            boxShadow: 3,
                                            transform: "scale(1.01)",
                                            cursor: 'pointer',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    <Box sx={{ position: 'relative', height: expanded === `${row}-${index}` ? '60%' : '60%', width: '100%' }}>
                                        {expanded === `${row}-${index}` && (
                                            <>
                                                <IconButton
                                                    sx={{ position: 'absolute', top: '50%', left: 0, zIndex: 2, border: '0px', }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpandedImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
                                                    }}
                                                >
                                                    &lt;
                                                </IconButton>
                                                <IconButton
                                                    sx={{ position: 'absolute', top: '50%', right: 0, zIndex: 2, border: '0px', }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpandedImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
                                                    }}
                                                >
                                                    &gt;
                                                </IconButton>
                                                <IconButton
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                        borderRadius: '10px',
                                                        border: '0px',
                                                        zIndex: 2
                                                    }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpanded(null);
                                                    }}
                                                >
                                                    <IoIosClose />
                                                </IconButton>
                                            </>
                                        )}
                                        <CardMedia
                                            component="img"
                                            image={project.images[expanded === `${row}-${index}` ? expandedImageIndex : 0]}
                                            alt={`${project.name} image ${expanded === `${row}-${index}` ? expandedImageIndex + 1 : 1}`}
                                            sx={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: expanded === `${row}-${index}` ? "contain" : "fit",
                                                borderRadius: '10px 10px 0px 0px'
                                            }}
                                        />
                                    </Box>
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'left',
                                            alignItems: 'left',
                                            height: expanded === `${row}-${index}` ? '50%' : '40%',
                                        }}
                                    >
                                        <Box sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                            <Container
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>
                                                <Box>
                                                    <Typography variant="h5" component="div"
                                                        sx={{
                                                            color: 'text.primary',
                                                            fontWeight: 'bold',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            flexDirection: 'row',
                                                            gap: '22px',
                                                        }}
                                                    >
                                                        {project.name}
                                                        {project.affiliation !== 'Self' && (
                                                            <Box sx={{
                                                                display: 'flex',
                                                                alignContent: 'center',
                                                                backgroundColor: '#4086f4', 
                                                                borderRadius: '20px',
                                                                px: '5px',
                                                                py: '2px',
                                                                boxShadow: 3,
                                                            }}>
                                                                <Typography variant="body2" color="black">
                                                                    {project.affiliation}
                                                                </Typography>
                                                            </Box>
                                                        )}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {project.textSecondary}
                                                    </Typography>
                                                </Box>

                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                >
                                                    <StyledIconsPortfolio
                                                        color="github"
                                                        bgColor="#333"
                                                        hoverColor="#444"
                                                        icon={<GitHub fontSize="medium" />}
                                                        url={project.github}
                                                    />
                                                    <LikeButton projectId={project.name} />
                                                </Box>
                                            </Container>
                                            <Divider sx={{ my: 1 }} />
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    mt: 0
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        height: 'fit-content',
                                                        flexWrap: 'wrap',
                                                    }}>
                                                    {project.tools.slice(0, expanded === `${row}-${index}` ? project.tools.length : 4).map((tool, i) => {
                                                        const icons = {
                                                            'Python': <FaPython style={{ marginRight: "6px", color: "#306998", fontSize: "2.5rem" }} />,
                                                            'MongoDB': <SiMongodb style={{ marginRight: "6px", color: "#3FA037", fontSize: "1.5rem" }} />,
                                                            'TensorFlow': <SiTensorflow style={{ marginRight: "8px", color: "#FFA101", fontSize: "2.5rem" }} />,
                                                            'Pandas': <SiPandas style={{ marginRight: "8px", color: "#130751", fontSize: "2.5rem" }} />,
                                                            'Numpy': <SiNumpy style={{ marginRight: "8px", color: "#4D76CE", fontSize: "2.5rem" }} />,
                                                            'MySQL': <SiMysql style={{ marginRight: "6px", color: "#61DBFB", fontSize: "2.5rem" }} />,
                                                            'StreamLit': <SiStreamlit style={{ marginRight: "6px", color: "#FF4B4B", fontSize: "2.5rem" }} />,
                                                            'Sklearn': <SiScikitlearn style={{ marginRight: "8px", color: "#F79939", fontSize: "2.5rem" }} />,
                                                            'Plotly': <SiPlotly style={{ marginRight: "8px", color: "#119DFF", fontSize: "2.5rem" }} />,
                                                            'Scipy': <SiScipy style={{ marginRight: "8px", color: "#0D56A5", fontSize: "2.5rem" }} />,
                                                        };
                                                        return (
                                                            <Tooltip title={tool} key={i}>
                                                                <Box
                                                                    sx={{
                                                                        m: 1,
                                                                        '&:hover': {
                                                                            transform: 'scale(1.2)',
                                                                            transition: 'transform 0.2s ease-in-out'
                                                                        }
                                                                    }}
                                                                >
                                                                    {icons[tool]}
                                                                </Box>
                                                            </Tooltip>
                                                        );
                                                    })}
                                                </Box>
                                                {expanded === `${row}-${index}` && (
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'left',
                                                            alignItems: 'left',
                                                            backgroundColor: 'background.default',
                                                            borderRadius: '10px',
                                                            padding: '10px',
                                                        }}>

                                                        {project.description.map((desc, i) => (
                                                            <Typography key={i} variant="body2" color="text.secondary"
                                                                sx={{
                                                                    fontSize: '1rem',
                                                                }}>
                                                                <li>{desc}</li>
                                                            </Typography>
                                                        ))}
                                                    </Box>
                                                )}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
            <Divider sx={{ mt: 1 }} />
            <Typography variant="h6" color="text.secondary"
                sx={{
                    mt: 1,
                    color: 'text.secondary',
                    backgroundColor: 'background.paper',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    width: 'fit-content',
                    borderRadius: '10px',
                    p: '5px',
                    fontFamily: 'Cursive',
                    justifyContent: 'center',
                }}>
                I am a <span style={{ backgroundColor: '#651efe', color: "white", borderRadius: 5, padding: "2px", boxShadow: 3 }}> Notebooks Expert</span> on Kaggle. To view more data intensive projects visit my Profile -&gt; {' '}
                <StyledIconsPortfolio
                    color="kaggle"
                    bgColor="#1da1f2"
                    hoverColor="#1991c6"
                    icon={<FaKaggle fontSize="medium" />}
                    url="https://www.kaggle.com/advikmaniar/code"
                />
            </Typography>
        </Container>
    );
};

export default DataProjects;