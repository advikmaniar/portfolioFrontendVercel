import {
    Box,
    Typography,
    ListItem,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { SiScipy, SiTableau, SiOpencv, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiPlotly, SiTensorflow } from "react-icons/si";
import { FaChartPie, FaPython } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha, styled, useTheme } from "@mui/material/styles";

const AccordianDA = ({ expandedPanels, handleChange }) => {
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
                        Data Analytics
                    </Typography>
                    <TbDeviceDesktopAnalytics style={{ marginRight: "8px", color: "grey", fontSize: "1.5rem" }} />
                </Box>

                <Accordion
                    expanded={expandedPanels.includes('panelDA1')}
                    onChange={handleChange('panelDA1')}
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
                        <Typography variant="h7">Data Manipulation</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        padding: "0px",
                        color: theme.palette.mode === "dark" ? "white" : "black",
                    }}
                    >
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaPython style={{ marginRight: "8px", color: "#306998", fontSize: "1.5rem" }} />
                            <ListItemText primary="Python" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiPandas style={{ marginRight: "8px", color: "#130751", fontSize: "1.5rem" }} />
                            <ListItemText primary="Pandas" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiNumpy style={{ marginRight: "8px", color: "#4D76CE", fontSize: "1.5rem" }} />
                            <ListItemText primary="NumPy" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiScipy style={{ marginRight: "8px", color: "#0D56A5", fontSize: "1.5rem" }} />
                            <ListItemText primary="SciPy" />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedPanels.includes('panelDA2')}
                    onChange={handleChange('panelDA2')}
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
                        <Typography variant="h7">Data Visualization</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <FaChartPie style={{ marginRight: "8px", color: "#3C873A", fontSize: "1.5rem" }} />
                            <ListItemText primary="Matplotlib" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiPlotly style={{ marginRight: "8px", color: "#119DFF", fontSize: "1.5rem" }} />
                            <ListItemText primary="Plotly" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiTableau style={{ marginRight: "8px", color: "#255699", fontSize: "1.5rem" }} />
                            <ListItemText primary="Tableau" />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedPanels.includes('panelDA3')}
                    onChange={handleChange('panelDA3')}
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
                        <Typography variant="h7">Machine Learning</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: "0px",
                            color: theme.palette.mode === "dark" ? "white" : "black",
                        }}>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiScikitlearn style={{ marginRight: "8px", color: "#F79939", fontSize: "1.5rem" }} />
                            <ListItemText primary="Scikit-Learn" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiTensorflow style={{ marginRight: "8px", color: "#FFA101", fontSize: "1.5rem" }} />
                            <ListItemText primary="TensorFlow" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiKeras style={{ marginRight: "8px", color: "#CE0002", fontSize: "1.5rem" }} />
                            <ListItemText primary="Keras" />
                        </ListItem>
                        <ListItem sx={{ padding: "0px 10px", marginBottom: 0.5 }}>
                            <SiOpencv style={{ marginRight: "8px", color: "#06FC09", fontSize: "1.5rem" }} />
                            <ListItemText primary="OpenCV" />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    )
};

export default AccordianDA;