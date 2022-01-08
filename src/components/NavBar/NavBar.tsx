import { Flex, Spacer, HStack, Heading } from '@chakra-ui/react';

import { Link as RRLink } from 'react-router-dom';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function NavBar(): JSX.Element {
  return (
    <Flex padding="20px" position="absolute" w="100%">
      <HStack spacing="15px" fontWeight="bold">
        <RRLink to="/">Home</RRLink>
        <RRLink to="/projects">Projects</RRLink>
        <RRLink to="/experience">Experience</RRLink>
        <RRLink to="/contact">Contact</RRLink>
      </HStack>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
}
