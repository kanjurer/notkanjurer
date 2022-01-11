import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import WavesOpacitySVG from '../../SVGs/wavesOpacity.svg';

export default function Contact(): JSX.Element {
  return (
    <Box
      backgroundImage={`url(${WavesOpacitySVG})`}
      bgRepeat="no-repeat"
      backgroundPosition="top"
      paddingTop="90px"
      margin="0 50px"
    >
      <Text fontSize="4xl">Leave a Message!</Text>
      <Box m="2">
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
          <Button type="submit" colorScheme="teal" size="lg" m={2}>
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
}
