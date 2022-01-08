import { Box } from '@chakra-ui/react';
import Project from './Project';
import data from '../../data.json';

export default function Projects(): JSX.Element {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-around">
      {data.projects.map((project) => (
        <Project project={project} />
      ))}
    </Box>
  );
}
