import React, { useState } from 'react';
import {
    Box,
    Drawer,
    Typography,
    Divider,
    IconButton,
} from "@mui/material";
import { Close as CloseIcon } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";
import AccordianWD from './AccordianWD';
import AccordianDA from './AccordianDA';
import AccordianSS from './AccordianSS';

const SkillsSidebar = ({ open, onClose }) => {

    const [expandedPanels, setExpandedPanels] = useState([
        'panelWD1', 'panelWD2', 'panelWD3', 'panelWD4', 'panelWD5',
        'panelDA1', 'panelDA2', 'panelDA3',
        'panelSS1', 'panelSS2', 'panelSS3']);
    const theme = useTheme();

    const handleChange = (panel) => () => {
        if (expandedPanels.includes(panel)) {
            setExpandedPanels(expandedPanels.filter(p => p !== panel));
        } else {
            setExpandedPanels([...expandedPanels, panel]);
        }
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: 300,
                    opacity: 1,
                    boxShadow: 5,
                    borderRadius: "0px 20px 20px 0px",
                    transition: "opacity 0.3s ease",
                    backgroundColor: "background.paper",
                    p: 1,
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "2px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent",
                    },
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "red",
                    opacity: 0.9,
                    transition: "opacity 0.3s ease",
                    height: "100%",

                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        mb: 0,
                    }}
                >
                    <Typography variant="h6" sx={{ m: 1 }}>Skill Set</Typography>
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
                <Divider sx={{ mb: 2 }} />
                {/* Web Development (WD) */}
                <AccordianWD
                    expandedPanels={expandedPanels}
                    handleChange={handleChange}
                    theme={theme}
                />
                <Divider sx={{ my: 2 }} />
                {/* Data Analytics (DA) */}
                <AccordianDA
                    expandedPanels={expandedPanels}
                    handleChange={handleChange}
                    theme={theme}
                />
                <Divider sx={{ my: 2 }} />
                {/* Soft Skills (SS) */}
                <AccordianSS
                    expandedPanels={expandedPanels}
                    handleChange={handleChange}
                    theme={theme}
                />
            </Box>
        </Drawer>
    );
};

export default SkillsSidebar;
