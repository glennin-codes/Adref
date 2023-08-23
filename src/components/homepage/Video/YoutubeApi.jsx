import React, { useEffect, useState } from "react";
import { Container, Grid, Box, Text } from "@chakra-ui/react";
import axios from "axios";

const YouTubeAPI = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              maxResults: 10,
              key: "AIzaSyCEXtTZiP86G5IMJpHmmEunQV6CVWuPdOI",
              q: "fortunedev",
            },
          }
        );
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if(error){
    console.log(error)
  }
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
   
    <Container>
      <Grid templateColumns={["1fr", "1fr", "1fr", "8fr 4fr"]} gap={3}>
        <Grid item colSpan={[12, 12, 12, 8]}>
          {selectedVideo && (
            <Box bg="white" p={4} boxShadow="md">
              <Text fontSize="xl" fontWeight="bold">
                {selectedVideo.snippet.title}
              </Text>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                title={selectedVideo.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Box>
          )}
        </Grid>

        <Grid item colSpan={[12, 12, 12, 4]}>
          <Box maxHeight={["auto", "auto", "auto", "300px"]} overflowY="auto">
            {videos.map((video) => (
              <Box
                key={video.id.videoId}
                bg="white"
                p={4}
                mb={2}
                cursor="pointer"
                onClick={() => handleVideoSelect(video)}
                boxShadow="md"
              >
                <Text fontSize="lg" fontWeight="bold">
                  {video.snippet.title}
                </Text>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default YouTubeAPI;