import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Box, Divider } from "@mui/material";

export type CardProps = {
  title: string;
  subtitle?: string;
  subtitleLink?: string;
  details: string[];
  location?: string;
  duration?: string;
};

export default function Card({
  title,
  subtitle,
  subtitleLink,
  details = [],
  location,
  duration,
}: React.PropsWithChildren<CardProps>) {
  return (
    <Box
      borderRadius={1}
      bgcolor="white"
      sx={{
        transition: "0.3s",
        "&:hover": {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        },
      }}
    >
      <Box px={3} py={2}>
        <Typography variant="h6"> {title} </Typography>
        <Typography variant="body2">
          <MuiLink color="secondary" href={subtitleLink}>
            {subtitle}
          </MuiLink>
        </Typography>
      </Box>
      <Divider />
      <Box px={3} py={2}>
        <ul style={{ padding: 0, margin: "0 0 0 20px" }}>
          {details.map((detail, index) => (
            <li key={index}> {detail} </li>
          ))}
        </ul>
      </Box>

      {location || duration ? (
        <>
          <Divider />
          <Box px={3} py={2} display="flex" alignItems="center" gap={1}>
            <Typography variant="caption"> {location} </Typography>|
            <Typography variant="caption"> {duration} </Typography>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}
