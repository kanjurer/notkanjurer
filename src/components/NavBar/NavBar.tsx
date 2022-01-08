import { Flex, Spacer, HStack } from '@chakra-ui/react';

import { Link as RRLink } from 'react-router-dom';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function NavBar(): JSX.Element {
  return (
    <Flex padding="20px">
      <HStack spacing="15px" fontWeight="bold">
        <RRLink to="/home">Home</RRLink>
        <RRLink to="/projects">Projects</RRLink>
        <RRLink to="/experience">Experience</RRLink>
        <RRLink to="/contact">Contact</RRLink>
      </HStack>
      <Spacer />
      <HStack>
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  );
}
