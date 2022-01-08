import {
  Box,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import ProjectModal from './ProjectModal';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function Project({ project }: ProjectProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <LinkBox w="400px" p="5" m="5" borderWidth="1px" rounded="md">
      <ProjectModal
        project={project}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
      <Image src={'projectImages/' + project.name + '.png'} />

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
