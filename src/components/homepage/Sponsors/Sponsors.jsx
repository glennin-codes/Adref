import React from 'react'
import SponsorCard from './SponsorCard'
import { Box } from '@chakra-ui/react';
const Sponsors = () => {
  return (
    <Box className='sponsor-container'>
      <h2>Some Of Our Sponsors</h2>
      <SponsorCard/>
    </Box>
  )
}

export default Sponsors