import {
  Badge,
  Box,
  Flex,
  Grid,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { BsCheck } from 'react-icons/bs';

export default function Experience({
  experience,
  tagColor,
}: ExperienceEntryProps): JSX.Element {
  return (
    <Box borderLeft={'10px solid ' + tagColor} p={2} m={2} mb={10}>
      <Text fontSize="2xl">{experience.jobTitle}</Text>
      <Box>
        <Flex>
          <Badge variant="subtle" mr="5" colorScheme="orange">
            {experience.jobCompany}
          </Badge>
          <Badge variant="outline" colorScheme="cyan">
            {experience.jobDuration}
          </Badge>
        </Flex>
        <List>
          {experience.learnings.map((e) => (
            <ListItem>
              <ListIcon as={BsCheck} color="green.500" />
              {e}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

interface ExperienceEntryProps {
  experience: {
    jobTitle: string;
    learnings: Array<string>;
    jobCompany: string;
    jobDuration: string;
  };
  tagColor: string;
}
