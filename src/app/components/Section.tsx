import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

type SectionProps = {
  title: string;
};

const Section = ({
  children,
  title,
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <Container maxWidth="sm" sx={{ py: 7 }}>
      <Typography variant="h5" component="h2" gutterBottom textAlign="center">
        {title.toUpperCase()}
      </Typography>
      <Box mt={2} component="div" textAlign="justify">
        {children}
      </Box>
    </Container>
  );
};

export default Section;
