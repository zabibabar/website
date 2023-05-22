import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Link from "./Link";

export default function SocialLinks() {
  return (
    <Box display="flex" gap={2}>
      <SocialLink
        link="https://www.linkedin.com/in/zabibabar/"
        icon={<LinkedInIcon />}
      ></SocialLink>
      <SocialLink
        link="https://www.github.com/zabibabar/"
        icon={<GitHubIcon />}
      ></SocialLink>
      <SocialLink
        link="mailto:zabiubabar@gmail.com"
        icon={<EmailIcon />}
      ></SocialLink>
    </Box>
  );
}

type SocialLinkProps = {
  link: string;
  icon: JSX.Element;
};

const SocialLink = ({ link, icon }: SocialLinkProps) => {
  return (
    <Link
      sx={{
        height: 40,
        width: 40,
        borderRadius: "50%",
        border: "2px solid ",
        borderColor: "primary.contrastText",
        display: "flex",
        color: "primary.contrastText",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "secondary.contrastText",
          color: "secondary.main",
          borderColor: "secondary.main",
        },
      }}
      href={link}
      target="_blank"
      rel="noopener"
    >
      {icon}
    </Link>
  );
};
