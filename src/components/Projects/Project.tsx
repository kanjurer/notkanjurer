import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import ProjectModal from './ProjectModal';
import {
  CheckCircleIcon,
  SettingsIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

export default function Project({ project }: ProjectProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <LinkBox as="article" maxW="sm" p="5" m="5" borderWidth="1px" rounded="md">
      <ProjectModal
        project={project}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
      <Image src="https://bit.ly/2Z4KKcF" />

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        <LinkOverlay href="#" onClick={onOpen}>
          {project.name}
        </LinkOverlay>
      </Box>

      <Box>
        <Box as="span" color="gray.600" fontSize="sm">
          {project.description}
        </Box>
      </Box>
      <Link href={project.repositoryLink} isExternal>
        Repository
        <ExternalLinkIcon mx="2px" />
      </Link>
    </LinkBox>
  );
}

interface ProjectProps {
  project: {
    name: string;
    description: string;
    repositoryLink: string;
    skills: Array<string>;
    learningOutcomes: Array<string>;
  };
}
