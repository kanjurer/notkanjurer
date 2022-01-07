import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Grid,
  Link,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link as RRLink } from 'react-router-dom';
import data from '../../data.json';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function NavBar(): JSX.Element {
  return (
    <Flex padding={'10px'} boxShadow="0 2px 2px -2px rgba(0,0,0,.2);">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <RRLink to="/">Home</RRLink>
        <RRLink to="projects">Projects</RRLink>
        <RRLink to="experience">Experience</RRLink>
        <RRLink to="contact">Contact</RRLink>
      </Grid>
      <Spacer />
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <Button variant="ghost">
          <Link href={data.gitHub} target="_blank">
            <AiFillGithub />
          </Link>
        </Button>
        <Button variant="ghost">
          <Link href={data.linkedIn} target="_blank">
            <AiFillLinkedin />
          </Link>
        </Button>
        <ColorModeSwitcher />
      </Grid>
    </Flex>
  );
}
