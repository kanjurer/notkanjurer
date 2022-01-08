import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaShare,
  FaTwitter,
} from 'react-icons/fa';

export default function Contact(): JSX.Element {
  return (
    <Box marginTop="50px">
      <Heading>Reach Out To Me!</Heading>
      <Box>
        <Box w="50%" ml={10}>
          <Text fontSize="4xl">My Socials</Text>
          <HStack>
            <Button colorScheme="facebook" size="lg" p="-1">
              <FaFacebook />
            </Button>
            <Button colorScheme="twitter" size="lg" p="-1">
              <FaTwitter />
            </Button>
            <Button colorScheme="pink" size="lg" p="-1">
              <FaInstagram />
            </Button>
            <Button colorScheme="linkedin" size="lg" p="-1">
              <FaLinkedin />
            </Button>
          </HStack>
        </Box>
        <Box
          style={{
            position: 'absolute',
            right: '10%',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            zIndex: '100',
            borderRadius: '20px',
          }}
        >
          <Heading fontSize="72px">OR</Heading>
        </Box>
        <br /> <br /> <Divider />
        <Box w="50%" m={10}>
          <Text fontSize="4xl">Leave a Message!</Text>
          <Box w="50%" m="2">
            <form>
              <FormControl>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <Input id="name" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Your Email address</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea id="message" type="text" />
              </FormControl>
              <Button colorScheme="teal" size="lg">
                Send
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
