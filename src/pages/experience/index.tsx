import * as React from "react";
import Section from "@/app/components/Section";
import Card, { CardProps } from "@/app/components/Card";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import profile from "@/app/profile";
import { Box } from "@mui/material";
import Layout from "@/app/components/Layout";

export default function Experience({
  experience = [],
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Section title="Work Experience">
      <Box display="flex" flexDirection="column" gap={6}>
        {experience.map(
          (
            { title, subtitle, subtitleLink, details, location, duration },
            index
          ) => (
            <Card
              key={index}
              title={title}
              subtitle={subtitle}
              subtitleLink={subtitleLink}
              details={details}
              location={location}
              duration={duration}
            ></Card>
          )
        )}
      </Box>
    </Section>
  );
}

export const getStaticProps: GetStaticProps<{
  experience: CardProps[];
}> = () => {
  const { experience } = profile;
  return { props: { experience } };
};

Experience.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Experience">{page}</Layout>;
};
