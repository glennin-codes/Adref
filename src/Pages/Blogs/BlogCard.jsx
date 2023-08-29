import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Image, Spinner } from '@chakra-ui/react';

// Define the BlogCard component that renders a single blog post
export const BlogCard = ({ blog }) => {
  // Destructure the blog object to get the title, body, and image
  const { title, body, image } = blog;

  // Return the JSX code for the blog card
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      m={4}
    >
      {/* Display the blog image */}
      <Image src={image} alt={title} 
     sx={{
        width: "100%",

     }}
      />

      {/* Display the blog title */}
      <Heading as="h3" size="md" mt={2} mb={2}>
        {title}
      </Heading>

      {/* Display the blog body */}
      <Text noOfLines={4}>{body}</Text>
    </Box>
  );
};
