import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Box, Text } from '@chakra-ui/react';

const newsData = [
  {
    imageSrc:
      'https://images.pexels.com/photos/17986330/pexels-photo-17986330/free-photo-of-portrait-of-a-man-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/17986330/pexels-photo-17986330/free-photo-of-portrait-of-a-man-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/17986330/pexels-photo-17986330/free-photo-of-portrait-of-a-man-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/17986330/pexels-photo-17986330/free-photo-of-portrait-of-a-man-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/17986330/pexels-photo-17986330/free-photo-of-portrait-of-a-man-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.',
  },

];

const NewsCard = () => {
  return (
    <Splide
      options={{
        pagination: false,
        perPage: 4,
        rewind: true,
        arrows: true,
        width: '100vw',
        breakpoints: {
          1440: {
            perPage: 3,
          },
          640: {
            perPage: 1,
          },
          900: {
            perPage: 2,
          },
        },
      }}
    >
      {newsData.map((news, index) => (
        <SplideSlide key={index}>
          <Box className="news-card">
            <img
              src={news.imageSrc}
              alt={`News ${index + 1}`}
              className="news-image"
            />
            <Text>{news.content}</Text>
          </Box>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default NewsCard;
