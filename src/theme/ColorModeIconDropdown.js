import React, { Fragment, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
import { FaSun, FaMoon } from "react-icons/fa"; 
import Tooltip from "@mui/material/Tooltip";

export default function ColorModeIconDropdown(props) {
  const { mode, systemMode, setMode } = useColorScheme();
  const [checked, setChecked] = useState(() => {
    return localStorage.getItem("theme") === "dark" || true;
  });

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") || "dark";
    setMode(savedMode);
    setChecked(savedMode === "dark");
  }, [setMode]);

  const handleChange = () => {
    const newMode = checked ? "light" : "dark";
    setChecked(!checked);
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  if (!mode) {
    return (
      <Box
        data-screenshot="toggle-mode"
        sx={{
          verticalAlign: "bottom",
          display: "inline-flex",
          width: "2.25rem",
          height: "2.25rem",
          borderRadius: 1,
          border: "1px solid",
          borderColor: "divider",
        }}
      />
    );
  }

  const resolvedMode = systemMode || mode;
  console.log("Color Mode: " + resolvedMode);

  return (
    <Fragment>
      <Tooltip title={checked ? "Dark Mode" : "Light Mode"} arrow>
      <div
        onClick={handleChange}
        style={{
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          width: "60px",
          height: "30px",
          backgroundColor: checked ? "#092e40" : "#fae9b1",
          borderRadius: "30px",
          position: "relative",
          transition: "background-color 0.3s",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "3px",
            left: checked ? "30px" : "3px",
            width: "24px",
            height: "24px",
            backgroundColor:  checked ? "#25afee" : "#f2c138",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: checked ? "white" : "white",
            transition: "left 0.3s ease",
          }}
        >
          {checked ? <FaMoon size={16} /> : <FaSun size={16} />}
        </div>
      </div>
      </Tooltip>
    </Fragment>
  );
}
