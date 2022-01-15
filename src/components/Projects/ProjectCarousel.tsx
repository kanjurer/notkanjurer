import { Box, Heading, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProjectCarousel(props: any): JSX.Element {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box w="430px" textAlign="center" position="relative">
      <svg
        viewBox="0 0 500 500"
        preserveAspectRatio="xMinYMin meet"
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <path
          d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
          style={{ stroke: 'none', fill: props.color }}
        ></path>
      </svg>
      <Heading fontSize="2xl" mt={5}>
        {props.text}
      </Heading>
      <Carousel
        autoPlay
        swipeable
        draggable
        responsive={responsive}
        infinite
        autoPlaySpeed={5000}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType="desktop"
        itemClass="carousel-item-padding-40-px"
      >
        {props.children}
      </Carousel>
    </Box>
  );
}
