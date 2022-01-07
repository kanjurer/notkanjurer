import {
  Button,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
  Spacer,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';

import {
  CheckCircleIcon,
  SettingsIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';
import Project from './Project';

export default function ProjectModal(props: ProjectModalProps): JSX.Element {
  const { isOpen, onOpen, onClose, project } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src="https://bit.ly/2Z4KKcF" />
          <Text>{project.description}</Text>
          <hr />
          <Flex>
            <List spacing={3}>
              {project.learningOutcomes.map((o) => (
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  {o}
                </ListItem>
              ))}
            </List>
            <Spacer />
            <List spacing={3}>
              {project.skills.map((o) => (
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  {o}
                </ListItem>
              ))}
            </List>
          </Flex>
          <Heading>Links</Heading>
          <Link href="https://github.com/kanjurer" isExternal>
            <FaGithub />
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Lol
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

interface ProjectModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  project: {
    name: string;
    description: string;
    repositoryLink: string;
    skills: Array<string>;
    learningOutcomes: Array<string>;
  };
}
