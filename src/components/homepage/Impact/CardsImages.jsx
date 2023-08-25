import React from 'react';
import { Container, SimpleGrid,Text } from '@chakra-ui/react';
import ImageCard from './ImageCard';


const ImagesCardGrid = ({ images }) => {
  return (
    <div>
    <Text
    sx={{
      fontSize:"lg",
      fontWeight:800,
      textAlign:"center",
      textTransform:"uppercase",
      fontFamily:"montseratti"
    }}
    >
      Impacts
    </Text>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} m={10} spacing={3}>
     
      {images.map((image, index) => (
        <ImageCard key={index} imageSrc={image.src} title={image.title} />
      ))}
    </SimpleGrid>
    <Text as='button' sx={{
      fontSize:"lg",
      p:2,
      mt:-2,
      ml:2,
      textAlign:"center",
      borderRadius:'lg',
      transform:"translate(0.3 ease in out) ",
        
      bg:"grey",
      color:"rgb(0,0,0.5)",
      "_hover":{
        bg:"rgb(0,0,0.8)",
        color:"white",
        cursor:"pointer",
        transform:"translate(0.3 ease in out) scale(1.1)",
      }

    }}>
      Showmore
    </Text>
    </div>
  );
};

export default ImagesCardGrid;
