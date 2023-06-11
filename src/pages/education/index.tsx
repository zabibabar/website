import * as React from "react";
import Section from "@/app/components/Section";
import Card, { CardProps } from "@/app/components/Card";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Box } from "@mui/material";
import profile from "@/app/profile";
import Layout from "@/app/components/Layout";

export default function Education({
  education = [],
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Section title="Education">
      <Box display="flex" flexDirection="column" gap={6}>
        {education.map(
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
  education: CardProps[];
}> = () => {
  const { education } = profile;
  return { props: { education } };
};

Education.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Education">{page}</Layout>;
};
