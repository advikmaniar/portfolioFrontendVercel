import React, { useState } from 'react';
import { Typography, Box, Container } from '@mui/material';
import { TimelineOppositeContent, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import CVFile from '../assets/Advik_CV.pdf';


const workExperiences = [
    {
        date: 'June 2023 - Present',
        role: 'Software Developer Engineer',
        company: 'Voya Financial',
        location: 'New York, NY',
        description: [
            'REST APIs development with Java - SpringBoot',
            'Chatbot Intent development with Genesys - Google DialogFlow',
            'Version Control and CI/CD with Git - Jenkins - Openshift - XLD',
            '15+ successful production deployments'
        ]
    },
    {
        date: 'February 2023',
        role: 'Research Assistant',
        company: 'New York Institute of Technology',
        location: 'New York, NY',
        description: [
            'Assisted in the development of internal tools and applications.'
        ]
    },
    {
        date: 'September 2022',
        role: 'Graduate Student Assistant',
        company: 'Entrepreneurship and Technology Innovation Center',
        location: 'New York, NY',
        description: [
            'Developed prototype data analysis tools for NASA',
            'Leveraged Python, Pandas, and Matplotlib to analyze data'
        ]
    },
    {
        date: 'May 2022',
        role: 'Software Developer Intern',
        company: 'Voya Financial',
        location: 'New York, NY',
        description: [
            'REST APIs development with Java - SpringBoot',
            'Chatbot Intent development with Genesys - Google DialogFlow',
        ]
    },
    {
        date: 'May 2022',
        role: 'Research Assistant',
        company: 'New York Intitute of Technology',
        location: 'New York, NY',
        description: [
            'REST APIs development with Java - SpringBoot',
            'Chatbot Intent development with Genesys - Google DialogFlow',
        ]
    }
];

const WorkExperience = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: 'background.paper',
                borderRadius: '16px',
                py: "30px",
            }}
        >
            <Timeline position="alternate">
                {workExperiences.map((experience, index) => (
                    <TimelineItem
                        key={index}
                        sx={{
                            borderRadius: '10px',
                            padding: '10px',
                            height: "flex",
                            width: "100%",
                            opacity: 0.9,
                            gap: 1,
                            marginBottom: '10px',
                        }}
                    >
                        <TimelineOppositeContent>
                            {experience.date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{
                            paddingLeft: '16px',
                            backgroundColor: 'blue',
                            borderRadius: '10px',
                            boxShadow: 3,
                            maxWidth: 'space-between',
                            justifyItems: 'center',
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#333333' : '#bbbbbb',
                            opacity: 0.9,
                            '&:hover': {
                                boxShadow: 3,
                                transform: "scale(1.02)",
                                cursor: "pointer",
                                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#222222' : '#dddddd',
                            },
                        }}>
                            <Typography variant="h6" component="span">
                                {experience.role}
                            </Typography>
                            <Typography>{experience.company}</Typography>
                            <Box display="flex" alignItems="center" sx={{ marginTop: '8px' }}>
                                <LocationOnIcon sx={{ marginRight: '4px', color: (theme) => theme.palette.mode === 'dark' ? 'white' : 'black' }} />
                                <Typography>{experience.location}</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    href={CVFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<DescriptionIcon />}
                    sx={{
                        bgcolor: "primary.main",
                        color: "background.paper",
                        borderRadius: "8px",
                        width: "fit-content",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        padding: "5px 8px",
                        boxShadow: 3,
                        transition: "all 0.3s ease",
                        '&:hover': {
                            bgcolor: "primary.dark",
                            boxShadow: 6,
                            transform: "translateY(-2px)",
                        },
                    }}

                >
                    View Resume
                </Button>
            </Container>
        </Box>
    );
};

export default WorkExperience;
