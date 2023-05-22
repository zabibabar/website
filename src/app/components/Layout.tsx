import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { Box, Container, Divider, Link, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledImage = styled(Image)`
  border-radius: 50%;
  margin: 16px;
  border: 2px solid;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box
        sx={[
          (theme) => ({
            background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 35%, ${theme.palette.primary.light} 70%, #F0FBFF 100%);`,
          }),
        ]}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              py: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <StyledImage
              src="/profile.png"
              width={240}
              height={240}
              alt="Picture of the author"
            />
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              color="primary.contrastText"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              ZABI BABAR
            </Typography>
            <SocialLinks></SocialLinks>
            <Divider
              sx={{ my: 2, width: 240, borderColor: "primary.contrastText" }}
            />
            <Typography
              variant="subtitle1"
              component="div"
              gutterBottom
              color="primary.contrastText"
            >
              Fullstack Software Engineer
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              gutterBottom
              color="primary.contrastText"
              textAlign="center"
            >
              Founder / Organizer of{" "}
              <Link href="https://meetu.ps/c/521Cz/H7wgF/a" color="secondary">
                Tampa Volunteers
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ flexGrow: 1, pb: 8 }} bgcolor="#F0FBFF">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
