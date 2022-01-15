import './Home.css';
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
  HStack,
  Link,
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
  FaTwitter,
  FaReddit,
  FaStackOverflow,
  FaChessKnight,
  FaList,
} from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import {
  SiMongodb,
  SiMysql,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
  SiNodemon,
} from 'react-icons/si';
import { ReactComponent as DalSVG } from '../../SVGs/dal-logo.svg';
import ArrowSVG from '../../SVGs/arrow.svg';
import data from '../../data.json';
import HoverToTextButton from '../../HoverToTextButton/HoverToTextButton';

export default function Home(): JSX.Element {
  return (
    <Box>
      <Box>
        <Image src="me.jpg" alt="Kanav Bhardwaj" />
        <Heading fontSize="15vw" fontFamily="arial black" className="heading">
          This is me!
        </Heading>
        <VStack className="vStack" w={200}>
          <Socials />
        </VStack>
      </Box>
      <HStack className="hStack" spacing="auto" overflow="hidden">
        <Socials />
      </HStack>
      <br />
      <Box w="80%" m="auto">
        <Box
          p="10"
          backgroundImage={`url(${ArrowSVG})`}
          bgRepeat="no-repeat"
          textAlign="center"
        >
          <Heading fontSize="36px" fontFamily="arial black">
            About
          </Heading>
          <Text>Howdie! I am Kanav, and I do stuff</Text>
        </Box>
        <Box
          p="10"
          backgroundImage={`url(${ArrowSVG})`}
          bgRepeat="no-repeat"
          textAlign="center"
        >
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
        <Box
          p="10"
          backgroundImage={`url(${ArrowSVG})`}
          bgRepeat="no-repeat"
          backgroundPosition=""
          textAlign="center"
        >
          <Heading fontSize="36px" fontFamily="arial black">
            What I have been doing?
          </Heading>
          <Flex justifyContent="center" flexWrap="wrap">
            <Box p="5">
              <Text fontSize="3xl">Tools</Text>
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
              <Text fontSize="3xl">Languages</Text>
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
              <Text fontSize="3xl">Databases</Text>
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
              <Text fontSize="3xl">Frameworks</Text>
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
                <ListItem>
                  <ListIcon as={SiNodemon} />
                  ExpressJS
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
        <Box
          p="10"
          backgroundImage={`url(${ArrowSVG})`}
          bgRepeat="no-repeat"
          textAlign="center"
        >
          <Heading fontSize="36px" fontFamily="arial black">
            Soft Skills
          </Heading>
          <Flex flexWrap="wrap" justifyContent="center">
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
        <Box
          p="10"
          backgroundImage={`url(${ArrowSVG})`}
          bgRepeat="no-repeat"
          textAlign="center"
        >
          <Heading fontSize="36px" fontFamily="arial black">
            Other Stuff
          </Heading>
          I watch anime in my free time, learn chess, and play fingerstyle
          guitar, stalk me!
          <br />
          <br />
          <Link target="_blank" href="https://lichess.org/@/kanjurer" m={2}>
            <Button
              leftIcon={<FaChessKnight />}
              colorScheme="teal"
              variant="solid"
            >
              Play Chess With Me
            </Button>
          </Link>
          <br />
          <br />
          <Link
            target="_blank"
            href="https://myanimelist.net/profile/kanjurer"
            m={2}
          >
            <Button
              leftIcon={<FaList />}
              colorScheme="telegram"
              variant="solid"
            >
              MyAnimeList
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

function Socials(): JSX.Element {
  return (
    <>
      <Link target="_blank" href={data.socials.gitHub}>
        <HoverToTextButton
          color="black"
          minWidth="5vw"
          height="5vw"
          p="-1"
          text="Git Hub"
          icon={<FaGithub />}
        />
      </Link>
      <Link target="_blank" href={data.socials.stackOverflow}>
        <HoverToTextButton
          colorScheme="orange"
          minWidth="5vw"
          height="5vw"
          p="-1"
          icon={<FaStackOverflow />}
          text="Stack Overflow"
        />
      </Link>
      <Link target="_blank" href={data.socials.linkedIn}>
        <HoverToTextButton
          colorScheme="linkedin"
          minWidth="5vw"
          height="5vw"
          p="-1"
          icon={<FaLinkedin />}
          text=" LinkedIn"
        />
      </Link>
      <Link target="_blank" href={data.socials.facebook}>
        <HoverToTextButton
          colorScheme="facebook"
          minWidth="5vw"
          height="5vw"
          p="-1"
          icon={<FaFacebook />}
          text="Facebook"
        />
      </Link>
      <Link target="_blank" href={data.socials.twitter}>
        <HoverToTextButton
          colorScheme="twitter"
          minWidth="5vw"
          height="5vw"
          p="-1"
          icon={<FaTwitter />}
          text="Twitter"
        />
      </Link>
      <Link target="_blank" href={data.socials.reddit}>
        <HoverToTextButton
          colorScheme="red"
          minWidth="5vw"
          height="5vw"
          p="-1"
          icon={<FaReddit />}
          text="Reddit"
        />
      </Link>
      <Link target="_blank" href={data.socials.instagram}>
        <HoverToTextButton
          colorScheme="pink"
          minWidth="5vw"
          height="5vw"
          p="-1"
          icon={<FaInstagram />}
          text="Instagram"
        />
      </Link>
    </>
  );
}
