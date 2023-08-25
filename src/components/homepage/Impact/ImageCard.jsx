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
    >
      <Image src={imageSrc} alt={title} 
      height="100%"

  objectFit="cover"

      />
      <Box
    textTransform='uppercase'
        position="absolute"
        top="80%"
        width="100%"
        left=" 50%"
    transform="translate(-50%, -50%)"
       
        color="white"
        textAlign="center"
       
      >
     <Text    bg="rgba(0, 0, 0, 0.5)"  p={2}>{title}</Text>
      </Box>
      
      
    </Box>
  );
};

export default ImageCard;
