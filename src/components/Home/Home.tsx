import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  Image,
  Text,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Badge,
} from '@chakra-ui/react';
import {
  FaCss3,
  FaDownload,
  FaFacebook,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaJs,
  FaLinkedin,
  FaPython,
  FaShare,
  FaTwitter,
} from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import {
  SiMongodb,
  SiMysql,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
} from 'react-icons/si';
import { ReactComponent as DalSVG } from '../../dal-logo.svg';

export default function Home(): JSX.Element {
  return (
    <Box>
      <Image src="me.jpg" alt="Kanav Bhardwaj" />
      <Heading
        fontSize="72px"
        fontFamily="arial black"
        style={{ position: 'absolute', top: '300px', left: '100px' }}
      >
        This is me!
      </Heading>
      <VStack style={{ position: 'absolute', top: '300px', right: '100px' }}>
        <Button colorScheme="facebook" size="lg">
          <FaFacebook />
        </Button>
        <Button colorScheme="twitter" size="lg">
          <FaTwitter />
        </Button>
        <Button colorScheme="pink" size="lg">
          <FaInstagram />
        </Button>
        <Button colorScheme="linkedin" size="lg">
          <FaLinkedin />
        </Button>
        <Button color="black" size="lg">
          <FaGithub />
        </Button>
        <Button colorScheme="orange" size="lg">
          <FaShare />
        </Button>
        <Button colorScheme="purple" size="lg">
          <FaDownload />
        </Button>
      </VStack>

      <Box p="10">
        <Heading fontSize="36px" fontFamily="arial black">
          About
        </Heading>
        <Text>
          Your resume is your opportunity to present yourself as the most
          qualified candidate for the position for which you are applying.
          Including an “about me” section in your resume can help you stand out
          as a candidate hiring managers or recruiters want to learn more about,
          which can help you get an interview. In this article, we discuss what
          an “about me” section in a resume entails, the benefits of including
          an “about me” section and examples of how to write one.
        </Text>
      </Box>
      <Box p="10">
        <Heading fontSize="36px" fontFamily="arial black">
          Education
        </Heading>
        <Flex>
          <DalSVG />
          <Text> Bachelors of Computer Science</Text>
          <Spacer />
          <Text color="gray.500">2021 - Present</Text>
        </Flex>
      </Box>
      <Box p="10">
        <Heading fontSize="36px" fontFamily="arial black">
          Technical Skills
        </Heading>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box p="5">
            <Heading>Tools</Heading>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={IoMdSettings} />
                IDEs: VS Code, IntelliJ, PyCharm
              </ListItem>
              <ListItem>
                <ListIcon as={FaGithub} />
                Git, GitHub
              </ListItem>
            </List>
          </Box>
          <Box p="5">
            <Heading>Languages</Heading>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={FaJava} />
                Java
              </ListItem>
              <ListItem>
                <ListIcon as={FaHtml5} />
                HTML
              </ListItem>
              <ListItem>
                <ListIcon as={FaCss3} />
                CSS
              </ListItem>
              <ListItem>
                <ListIcon as={FaJs} />
                JavaScript
              </ListItem>
              <ListItem>
                <ListIcon as={FaPython} />
                Python
              </ListItem>
            </List>
          </Box>
          <Box p="5">
            <Heading>Databases</Heading>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={SiMysql} />
                SQL
              </ListItem>
              <ListItem>
                <ListIcon as={SiMongodb} />
                MongoDB
              </ListItem>
            </List>
          </Box>
          <Box p="5">
            <Heading>Frameworks</Heading>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={SiReact} />
                ReactJS
              </ListItem>
              <ListItem>
                <ListIcon as={SiNodeDotJs} />
                NodeJS
              </ListItem>
              <ListItem>
                <ListIcon as={SiNextDotJs} />
                NextJS
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
      <Box p="10">
        <Heading fontSize="36px" fontFamily="arial black">
          Soft Skills
        </Heading>
        <Flex flexWrap="wrap">
          <Badge variant="solid" colorScheme="telegram" m="3">
            Confidence
          </Badge>
          <Badge variant="solid" colorScheme="orange" m="3">
            Time Management
          </Badge>
          <Badge variant="solid" colorScheme="green" m="3">
            Communication
          </Badge>
          <Badge variant="solid" colorScheme="purple" m="3">
            Team Work
          </Badge>
          <Badge variant="solid" colorScheme="yellow" m="3">
            Flexibility
          </Badge>
        </Flex>
      </Box>
    </Box>
  );
}
