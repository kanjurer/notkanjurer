import { Button, Flex, Spacer, Link, HStack } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link as RRLink } from 'react-router-dom';
import data from '../../data.json';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function NavBar(): JSX.Element {
  return (
    <Flex padding="20px">
      <HStack spacing="12px">
        <RRLink to="/home">Home</RRLink>
        <RRLink to="/projects">Projects</RRLink>
        <RRLink to="/experience">Experience</RRLink>
        <RRLink to="/contact">Contact</RRLink>
      </HStack>
      <Spacer />
      <HStack>
        <Link href={data.gitHub} target="_blank">
          <Button variant="ghost">
            <AiFillGithub />
          </Button>
        </Link>
        <Link href={data.linkedIn} target="_blank">
          <Button variant="ghost">
            <AiFillLinkedin />
          </Button>
        </Link>
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  );
}
