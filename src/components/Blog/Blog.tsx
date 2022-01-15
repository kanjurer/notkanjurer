import { Box, Heading } from '@chakra-ui/react';
import BlobSVG from '../../SVGs/blob.svg';

export default function Blog(): JSX.Element {
  return (
    <Box
      height="600px"
      textAlign="center"
      backgroundImage={`url(${BlobSVG})`}
      bgRepeat="no-repeat"
      backgroundPosition="top"
      padding="90px 10px 0px 10px"
    >
      <Heading fontSize="100px">Coming Soon</Heading>
    </Box>
  );
}
