import './Footer.css';
import { Flex, Text, Heading, Link, Button, Box } from '@chakra-ui/react';
import { FaChessKnight, FaCoffee, FaList } from 'react-icons/fa';
import data from '../../data.json';
import { SiFreelancer, SiUpwork } from 'react-icons/si';

export default function Footer(): JSX.Element {
  return (
    <Box
      className="footer"
      display="flex"
      padding="40px"
      flexWrap="wrap"
      justifyContent="space-around"
    >
      <Flex flexDirection="column" textAlign="center">
        <Heading>Contact Me:</Heading>
        {Object.keys(data.socials).map((key) => (
          <Text>
            <Link target="_blank" href={data.socials[key as keyof ISocials]}>
              {key}
            </Link>
          </Text>
        ))}
      </Flex>
      <Flex flexDirection="column" justifyContent="space-evenly">
        <Link
          target="_blank"
          href="https://www.buymeacoffee.com/kanjurer"
          m={2}
        >
          <Button leftIcon={<FaCoffee />} colorScheme="red" variant="solid">
            Buy Me A Coffee
          </Button>
        </Link>

        <Link
          target="_blank"
          href="https://www.freelancer.com/u/kanavbhardwaj"
          m={2}
        >
          <Button
            leftIcon={<SiFreelancer />}
            colorScheme="blue"
            variant="solid"
          >
            Freelancer.com
          </Button>
        </Link>
        <Link
          target="_blank"
          href="https://www.upwork.com/freelancers/~0162dc9450bb9dc830"
          m={2}
        >
          <Button leftIcon={<SiUpwork />} colorScheme="green" variant="solid">
            Upwork.com
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

interface ISocials {
  gitHub: string;
  linkedIn: string;
  facebook: string;
  instagram: string;
  twitter: string;
  reddit: string;
  stackOverflow: string;
}
