import {
    Box,
    Typography,
    ListItem,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

import { SiRedux, SiRedhatopenshift, SiDialogflow, SiDailydotdev, SiMongodb, SiMysql, SiDjango, SiSpringboot, SiStreamlit } from "react-icons/si";
import { FaJenkins, FaBitbucket, FaGithub, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha, styled, useTheme } from "@mui/material/styles";

const AccordianWD = ({ expandedPanels, handleChange }) => {
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
                {/* Web Development Section */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1
                }}>
                    <Typography variant="h6" sx={{ mb: 0 }}>
                        Web Development
                    </Typography>
                    <SiDailydotdev style={{ marginRight: "8px", color: "grey", fontSize: "1.5rem" }} />
                </Box>

                <Accordion
                    expanded={expandedPanels.includes('panelWD1')}
                    onChange={handleChange('panelWD1')}
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
                        <Typography variant="h7">Frontend</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        padding: "0px",
                        color: theme.palette.mode === "dark" ? "white" : "black",
                    }}>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaHtml5 style={{ marginRight: "8px", color: "#C42C05", fontSize: "1.5rem" }} />
                            <ListItemText primary="HTML5" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaCss3Alt style={{ marginRight: "8px", color: "#006EBB", fontSize: "1.5rem" }} />
                            <ListItemText primary="CSS3" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <IoLogoJavascript style={{ marginRight: "8px", color: "#E1BF05", fontSize: "1.5rem" }} />
                            <ListItemText primary="JavaScript" />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedPanels.includes('panelWD2')}
                    onChange={handleChange('panelWD2')}
                    sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="backend-content"
                        id="backend-header"
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
                        <Typography variant="h7">Backend</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaNode style={{ marginRight: "8px", color: "#3C873A", fontSize: "1.5rem" }} />
                            <ListItemText primary="Node.js" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaJava style={{ marginRight: "8px", color: "#f89820", fontSize: "1.5rem" }} />
                            <ListItemText primary="Java" />
                        </ListItem>

                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedPanels.includes('panelWD3')}
                    onChange={handleChange('panelWD3')}
                    sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="frameworks-content"
                        id="frameworks-header"
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
                        <Typography variant="h7">Frameworks</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaReact style={{ marginRight: "8px", color: "#61DBFB", fontSize: "1.5rem" }} />
                            <ListItemText primary="React.js" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiRedux  style={{ marginRight: "8px", color: "#754eb9", fontSize: "1.5rem" }} />
                            <ListItemText primary="Redux" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiDjango style={{ marginRight: "8px", color: "#2BA977", fontSize: "1.5rem" }} />
                            <ListItemText primary="Django" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiStreamlit style={{ marginRight: "8px", color: "#FF4B4B", fontSize: "1.5rem" }} />
                            <ListItemText primary="StreamLit" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiSpringboot style={{ marginRight: "8px", color: "#6BB13F", fontSize: "1.5rem" }} />
                            <ListItemText primary="SpringBoot" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <TbApi style={{ marginRight: "8px", color: "#0082C6", fontSize: "1.5rem" }} />
                            <ListItemText primary="REST" />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedPanels.includes('panelWD4')}
                    onChange={handleChange('panelWD4')}
                    sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="databases-content"
                        id="databases-header"
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
                        <Typography variant="h7">Databases/Cloud</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiMysql style={{ marginRight: "8px", color: "#61DBFB", fontSize: "1.5rem" }} />
                            <ListItemText primary="MySQL" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiMongodb style={{ marginRight: "8px", color: "#3FA037", fontSize: "1.5rem" }} />
                            <ListItemText primary="MongoDB" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <IoLogoFirebase style={{ marginRight: "8px", color: "#f5820D", fontSize: "1.5rem" }} />
                            <ListItemText primary="Google Firebase" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiDialogflow style={{ marginRight: "8px", color: "#f5820D", fontSize: "1.5rem" }} />
                            <ListItemText primary="Google DialogFlow" />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedPanels.includes('panelWD5')}
                    onChange={handleChange('panelWD5')}
                    sx={{
                        backgroundColor: "transparent",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="versioncontrol-content"
                        id="versioncontrol-header"
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
                        <Typography variant="h7">Version Control</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaGithub style={{ marginRight: "8px", color: "#9A59B5", fontSize: "1.5rem" }} />
                            <ListItemText primary="GitHub" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaBitbucket style={{ marginRight: "8px", color: "#2682FD", fontSize: "1.5rem" }} />
                            <ListItemText primary="BitBucket" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaJenkins style={{ marginRight: "8px", color: "red", fontSize: "1.5rem" }} />
                            <ListItemText primary="Jenkins" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiRedhatopenshift style={{ marginRight: "8px", color: "red", fontSize: "1.5rem" }} />
                            <ListItemText primary="OpenShift" />
                        </ListItem>

                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    )
};

export default AccordianWD;