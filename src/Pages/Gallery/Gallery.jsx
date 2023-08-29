import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  useEffect(() => {
    // Fetch images from an API
    // Here we use a mock API that returns random images
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=9"
        );
        setImages(response.data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchImages();
  }, []);

  return (
    <Box maxW="1200px" mx="auto" p="4">
      <Heading as="h1" mb="4" textAlign="center">
        Our Gallery
      </Heading>
      <Text mb="4" textAlign="center">
        See how we are making a difference in Africa.
      </Text>
      {loading && (
        <Text
          sx={{
            mb: "50vw",
          }}
        >
          Loading...
        </Text>
      )}
      {error && <Text color="red.500">{error}</Text>}
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap="4">
        {images.map((image) => (
          <Flex
            key={image.id}
            direction="column"
            bg="white"
            boxShadow="lg"
            borderRadius="md"
          >
            <Image src={image.url} alt={image.title} fit="cover" />
            <Box p="4">
              <Text fontWeight="bold" mb="2">
                {image.title}
              </Text>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis nisl vitae nisi tincidunt aliquet. Morbi euismod lacus sit
                amet augue consequat, id ullamcorper leo mattis.
              </Text>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default GalleryPage;
