import { useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  AlertIcon,
} from '@chakra-ui/react';

import WavesOpacitySVG from '../../SVGs/wavesOpacity.svg';

export default function Contact(): JSX.Element {
  const [alert, setAlert] = useState<boolean>(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAlert(true);
  };
  const handleCloseAlert = () => {
    setAlert(false);
  };
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
        <form onSubmit={handleSubmit}>
          <Alert hidden={!alert} status="success">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription display="block">
                Thank you for your message! I will respond you back in 48 hours
                :D
              </AlertDescription>
            </Box>
            <CloseButton
              onClick={handleCloseAlert}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
          <FormControl>
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <Input id="name" type="text" isRequired />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Your Email address</FormLabel>
            <Input id="email" type="email" isRequired />
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
