import React from 'react';
import { Box, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg: '212px', xs:'70px'},
        ml:{ sm:'50px'}
    }} position="relative" p="20px" >
     <Typography color="#FF2625"
      fontSize="26px"
      fontWeight = "600"
     >
        Fitness Club
     </Typography>
     <Typography
      fontSize="44px"
      sx={{ fontSize :{lg: '44px', xs:'40px' }}}
      mb="23px"
      mt="30px"
     >
       Sweat, Smile <br/> and Repeat
     </Typography>
     <Typography fontSize="22px" lineHeight="35px" mb={4} >
        Check out the most effective Exercises 
     </Typography>
     <Button sx={{padding:'12px'}} color="error" href='#exercises' variant="contained">Explore Exercises</Button>
     <Typography
     fontWeight={700}
     color="#ff2625"
     sx={{
        opacity:0.1,
        display:{lg:'block', xs:'none'}
     }}
     fontSize="200px"
     >
        Exercise
     </Typography>
     <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
