import * as React from "react";
import Section from "@/app/components/Section";
import Card, { CardProps } from "@/app/components/Card";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Box } from "@mui/material";
import profile from "@/app/profile";
import Layout from "@/app/components/Layout";

export default function Skills({
  skills = [],
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Section title="skills">
      <Box display="flex" flexDirection="column" gap={6}>
        {skills.map(({ title, subtitle, subtitleLink, details }, index) => (
          <Card
            key={index}
            title={title}
            subtitle={subtitle}
            subtitleLink={subtitleLink}
            details={details}
          ></Card>
        ))}
      </Box>
    </Section>
  );
}

export const getStaticProps: GetStaticProps<{
  skills: CardProps[];
}> = () => {
  const { skills } = profile;
  return { props: { skills } };
};

Skills.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Skills">{page}</Layout>;
};
