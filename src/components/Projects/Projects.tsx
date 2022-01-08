import { Box, Flex, Grid, Heading, Spacer } from '@chakra-ui/react';

import data from '../../data.json';
import ProjectCarousel from './ProjectCarousel';
import Project from './Project';
import BlocksSVG from '../../SVGs/blocks.svg';

export default function Projects(): JSX.Element {
  return (
    <Box
      m="1"
      textAlign="center"
      backgroundImage={`url(${BlocksSVG})`}
      bgRepeat="no-repeat"
      backgroundPosition="top"
    >
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        alignContent="space-between"
        paddingTop="90px"
      >
        <ProjectCarousel color="coral" text="Featured Projects">
          {data.projects.map((project) => {
            if (project.status === 'featured')
              return <Project project={project} />;
          })}
        </ProjectCarousel>

        <ProjectCarousel color="pink" text="Work Under Progress">
          {data.projects.map((project) => {
            if (project.status === 'current')
              return <Project project={project} />;
          })}
        </ProjectCarousel>
      </Box>
      <br />
      <Heading>Other Projects</Heading>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {data.projects.map((project) => {
          if (project.status === 'others') return <Project project={project} />;
        })}
      </Box>
    </Box>
  );
}
