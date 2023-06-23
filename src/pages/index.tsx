import * as React from "react";
import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import Layout from "@/app/components/Layout";

export default function Home() {
  return (
    <Section title="About Me">
      <p>
        I am a Software Engineer at SquareTrade, Inc. I work in the co-branding
        team and I have lead several projects to completion, namely, Telenor,
        Softbank, Walmart, and Staples. I work in a critical part of codebase to
        refactor and scale the project to support different merchants and their
        specific branding needs. I also mentor junior developers by teaching
        Angular concepts, reviewing code, and providing feedback.
      </p>
      <p>
        Outside of work, I enjoy playing sports. I am a member of a local
        running club. I play soccer and tennis regularly. I also play Trivia
        with my friends on a weekly basis.
      </p>
      <p>
        Moreover, I give back to the community via volunteering. I organize a
        Meetup group called{" "}
        <Link href="https://tampavolunteers.com/?utm_source=Portfolio&utm_medium=about" color="secondary">
          Tampa Volunteers
        </Link>{" "}
        to share non-profit organizations I volunteer at with other members of
        the community. I hold 3-4 monthly events and I coordinate between the
        event organizers and local volunteers.
      </p>
    </Section>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Zabi Babar">{page}</Layout>;
};
