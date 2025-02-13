import React, { useState } from 'react';
import {
    Box,
    Button,
    Drawer,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { Close as CloseIcon } from '@mui/icons-material';
import { SiTableau, SiRedhatopenshift, SiOpencv, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiPlotly, SiDialogflow, SiDailydotdev, SiMongodb, SiMysql, SiDjango, SiSpringboot, SiJupyter, SiTensorflow } from "react-icons/si";
import { FaJenkins, FaBitbucket, FaGithub, FaChartPie, FaUserTie, FaPython, FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { GiProgression, GiCaptainHatProfile, GiThink } from "react-icons/gi";
import { TbApi, TbBulbFilled, TbDeviceDesktopAnalytics } from "react-icons/tb";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha, styled, useTheme } from "@mui/material/styles";
import AccordianWD from './AccordianWD';
import AccordianDA from './AccordianDA';

const AccordianSS = ({ expandedPanels, handleChange }) => {
    const theme = useTheme();

    return (
        <>
            <Box
                    sx={{
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        boxShadow: 5,
                        borderRadius: 2,
                        px: 2,
                        py: 1
                    }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1
                    }}>
                        <Typography variant="h6" sx={{ mb: 0 }}>
                            Soft Skills
                        </Typography>
                        <FaUserTie style={{ marginRight: "8px", color: "grey", fontSize: "1.5rem" }} />
                    </Box>

                    <Accordion
                        expanded={expandedPanels.includes('panelSS1')}
                        onChange={handleChange('panelSS1')}
                        sx={{
                            backgroundColor: "transparent",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="frontend-content"
                            id="frontend-header"
                            sx={{
                                p: "0px 0px 0px 10px",
                                minHeight: "30px",
                                color: "text.secondary",
                                '& .MuiAccordionSummary-content': {
                                    margin: 0,
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <Typography variant="h7">Soft Skills</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <RiTeamFill style={{ marginRight: "8px", color: "lightblue", fontSize: "1.5rem" }} />
                                <ListItemText primary="Team Collaboration" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <GiProgression style={{ marginRight: "8px", color: "#4D76CE", fontSize: "1.5rem" }} />
                                <ListItemText primary="Agile" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <GiCaptainHatProfile style={{ marginRight: "8px", color: "#0073CF", fontSize: "1.5rem" }} />
                                <ListItemText primary="Leadership" />
                            </ListItem>
                            <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                                <TbBulbFilled style={{ marginRight: "8px", color: "#E5B80B", fontSize: "1.5rem" }} />
                                <ListItemText primary="Innovation" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </Box>
        </>
    )
};

export default AccordianSS;