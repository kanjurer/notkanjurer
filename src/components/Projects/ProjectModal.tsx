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
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

export default function ProjectModal(props: ProjectModalProps): JSX.Element {
  const { isOpen, onClose, project } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={'projectImages/' + project.name + '.png'} />
          <br />
          <Text>{project.description}</Text>
          <br />
          <Text fontSize="2xl">What did I do:</Text>
          <List spacing={2}>
            {project.learningOutcomes.map((o) => (
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {o}
              </ListItem>
            ))}
          </List>
          <br />
          <Text fontSize="2xl">Technologies Used:</Text>
          <List display="grid" gridTemplateColumns="200px 200px">
            {project.skills.map((o) => (
              <ListItem>
                <ListIcon as={SettingsIcon} color="orange.500" />
                {o}
              </ListItem>
            ))}
          </List>
          {project.otherLinks.length > 0 && (
            <>
              <Text fontSize="2xl">Additional Link(s):</Text>
              {project.otherLinks.map((e) => (
                <Link href={e} isExternal>
                  {e}
                </Link>
              ))}
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            color="white"
            colorScheme="blackAlpha"
            mr={3}
            leftIcon={<FaGithub />}
          >
            <Link href="https://github.com/kanjurer" isExternal>
              Repository
            </Link>
          </Button>
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
    otherLinks: Array<string>;
  };
}
