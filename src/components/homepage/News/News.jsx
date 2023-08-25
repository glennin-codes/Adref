import React from 'react'
import NewsCard from './NewsCard';
import { Box } from '@chakra-ui/react';

const News = () => {
  return (
<Box className="news-container">
  <h2>Latest News</h2>
  <NewsCard/>
</Box>
  )
}

export default News