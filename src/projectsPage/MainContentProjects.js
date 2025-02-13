import * as React from "react"
import { Button, Typography, Box, Container, } from '@mui/material';
import SoftwareProjects from "./SoftwareProjects";
import DataProjects from "./DataProjects";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";


export default function MainContentProjects() {

  const [showDataProjects, setShowDataProjects] = React.useState(false);

  const handleButtonClick = () => {
    setShowDataProjects(true);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 1 },
        p: { xs: "30px 10px", sm: "0px 20px 0px 20px" },
        alignItems: "left",
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        borderRadius: '10px',
        p: '10px',
        opacity: 0.9,
        boxShadow: 3,
        width: 'space-between',
        backgroundColor: 'background.paper',
      }}>
        <Typography variant="h1" component="div"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            textAlign: 'center',
            width: 'fit-content',
            fontFamily: 'monospace',
          }}
        >
          <span style={{ animation: 'pulse 5s infinite, zoomIn 2s 1' }}>&lt;/Portfolio📄&gt;</span>
          
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            marginLeft: { xs: 0, sm: 'auto' },
            marginTop: { xs: 2, sm: 0 },
            fontWeight: 'bold',
            fontSize: '1rem',
            textTransform: 'none',
          }}
          startIcon={showDataProjects ? <IoChevronBackOutline /> : null}
          endIcon={!showDataProjects ? <IoChevronForwardOutline /> : null}
          onClick={() => setShowDataProjects(!showDataProjects)}
        >
          {showDataProjects ? "Back to Apps" : "Data Projects"}
        </Button>
      </Box>
      <Box sx={{
        flex: { xs: 1, sm: 5 },
        width: "100%"
      }}>
        {showDataProjects ? <DataProjects /> : <SoftwareProjects />}
      </Box>
      <style>
        {`
        @keyframes rubberBand {
            0% { transform: scale(1); }
            30% { transform: scale(1.25, 0.75); }
            40% { transform: scale(0.75, 1.25); }
            50% { transform: scale(1.15, 0.85); }
            65% { transform: scale(0.95, 1.05); }
            75% { transform: scale(1.05, 0.95); }
            100% { transform: scale(1); }
          }
          @keyframes zoomIn {
            0% { transform: scale(0); }
            100% { transform: scale(1); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          span {
            display: inline-block;
          }
        `}
      </style>
    </Container>
  );
}
