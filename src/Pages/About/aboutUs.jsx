import React from 'react';
import { Container, Grid, Text } from '@chakra-ui/react';

const imageStyle = {
  width: '40%',
  marginRight: '16px', // Adjust this value as needed
  
  '@media (max-width: 600px)': {
    width: '100%',
    marginRight: '0',
    marginBottom: '8px', // Adjust this value as needed
  },
};

const contentStyle = {
  textAlign: 'left', // Default for desktop
  
  '@media (max-width: 600px)': {
    textAlign: 'center', // Centered on mobile
  },
};

const AboutUs = () => {
  return (
    <Container paddingY="32px">
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={3}>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <img
            src="path/to/your/image.jpg"
            alt="About Us"
            style={imageStyle}
          />
        </Grid>

        {/* Content */}
        <Grid item xs={12} md={6}>
          <div style={contentStyle}>
            <Text fontSize="2xl" fontWeight="bold" marginBottom="1rem">
              ABOUT US
            </Text>
            <Text fontSize="lg">
              {/* Introduction profile and text */}
              {/* Insert your introduction content here */}
            </Text>

            <Text fontSize="xl" fontWeight="bold" marginBottom="1rem" marginTop="2rem">
              OUR VISION
            </Text>
            <Text fontSize="lg">
              {/* Insert your vision content here */}
            </Text>

            <Text fontSize="xl" fontWeight="bold" marginBottom="1rem" marginTop="2rem">
              OUR MISSION
            </Text>
            <Text fontSize="lg">
              {/* Insert your mission content here */}
            </Text>

            <Text fontSize="xl" fontWeight="bold" marginBottom="1rem" marginTop="2rem">
              OUR CORE VALUES
            </Text>
            <Text fontSize="lg">
              {/* Insert your core values content here */}
            </Text>

            <Text fontSize="xl" fontWeight="bold" marginBottom="1rem" marginTop="2rem">
              ORGANIZATION OBJECTIVES
            </Text>
            <Text fontSize="lg">
              {/* Insert your objectives content here */}
            </Text>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
