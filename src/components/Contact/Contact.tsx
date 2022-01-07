import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  VStack,
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
    <>
      <Heading>Reach Out To Me!</Heading>
      <Box display="flex" justifyContent="space-between">
        <Box backgroundColor="cyan.200" w="50%" h="80vh">
          <Text fontSize="4xl">My Socials</Text>
          <VStack>
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
          </VStack>
        </Box>
        <Heading>OR</Heading>
        <Box backgroundColor="green.300" w="50%" h="80vh">
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
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}
