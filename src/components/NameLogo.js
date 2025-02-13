import * as React from "react";
import {  Button } from "@mui/material";
import Logo from '../assets/logo3.PNG';
import { Link } from "react-router-dom";
import { alpha, useTheme } from "@mui/material/styles";

export default function NameLogo() {

  const theme = useTheme();

  return (
    <Button
      component={Link}
      to='/home'
      sx={{
        padding: 1,
        borderRadius: "20%",
        '&:hover': {
          backgroundColor: "transparent",
        },
      }}
    >
      <img
        src={Logo}
        alt="Logo"
        style={{
          height: "80px",
          objectFit: "contain",
        }}
      />
    </Button>
  );
}
