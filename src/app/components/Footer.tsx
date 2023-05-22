import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SocialLinks from "./SocialLinks";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ height: 64, width: "100%" }} bgcolor="primary.main">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            color="primary.contrastText"
            align="center"
          >
            Copyright © Zabi Babar {new Date().getFullYear()}.
          </Typography>
          <SocialLinks></SocialLinks>
        </Toolbar>
      </Container>
    </Box>
  );
}
