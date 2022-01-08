import { Box, Heading, Text, Flex, Tag, Tooltip } from '@chakra-ui/react';

import data from '../../data.json';
import ExperienceEntry from './ExperienceEntry';
import WavesSVG from '../../SVGs/waves.svg';

export default function Experience(): JSX.Element {
  return (
    <Flex
      flexWrap="wrap"
      m={2}
      backgroundImage={`url(${WavesSVG})`}
      bgRepeat="no-repeat"
      backgroundPosition="top"
      paddingTop="90px"
    >
      <Box>
        <Heading>Work Experience</Heading>
        <Box>
          <Text fontWeight="bold">Relevant</Text>
          {data.experiences.relevantExperiences.map((exp) => (
            <ExperienceEntry experience={exp} tagColor={randomColor()} />
          ))}
        </Box>
        <br />
        <Box>
          <Text fontWeight="bold">Other Experience</Text>
          {data.experiences.otherExperiences.map((exp) => (
            <ExperienceEntry experience={exp} tagColor={randomColor()} />
          ))}
        </Box>
      </Box>

      <Box>
        <Heading>Coursework</Heading>
        <Flex direction="column">
          {data.coursework.map((course) => (
            <Tooltip hasArrow label={course.courseDescription}>
              <Tag w="300px" h="50px" colorScheme={randomColorScheme()} m={1}>
                {course.courseName}
              </Tag>
            </Tooltip>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

function randomColor(): string {
  const colors: Array<string> = ['pink', 'green', 'red', 'orange', 'purple'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomColorScheme(): string {
  const colors: Array<string> = [
    'blackAlpha',
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
    'linkedin',
    'facebook',
    'messenger',
    'whatsapp',
    'twitter',
    'telegram',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
