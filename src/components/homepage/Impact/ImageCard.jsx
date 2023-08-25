import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const ImageCard = ({ imageSrc, title }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      h="md"
      cursor='pointer'
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }} // Apply this style when hovered
    >
      <Image src={imageSrc} alt={title} height="100%" objectFit="cover" />
      <Box
        textTransform="uppercase"
        position="absolute"
        top="80%"
        width="100%"
        left=" 50%"
        transform="translate(-50%, -50%)"
        color="white"
        textAlign="center"
      >
        <Text 
        color='whiteAlpha.800'
        fontSize='lg'
         p={2}
        fontFamily='san-serif'
        borderEndEndRadius='25px'
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default ImageCard;
