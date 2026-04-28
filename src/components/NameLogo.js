import React from "react";
import { Button } from "@mui/material";
import Logo from "../assets/logo3.PNG";
import { Link } from "react-router-dom";

export default function NameLogo() {
  return (
    <Button
      component={Link}
      to="/home"
      disableRipple
      sx={{
        p: 0.5,
        minWidth: 0,
        borderRadius: "12px",
        "&:hover": { backgroundColor: "rgba(99,102,241,0.08)" },
        transition: "background-color 0.2s ease",
      }}
    >
      <img
        src={Logo}
        alt="Advik Maniar"
        style={{ height: 52, objectFit: "contain" }}
      />
    </Button>
  );
}
