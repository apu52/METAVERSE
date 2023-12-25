import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const ExerciseVideo = ({videoDetail, name}) => {
  console.log(videoDetail)
  return (
    <Box sx={{marginTop:{lg: '200px', xs:'20px'}}} p="20px">
      <Typography variant='h3' mb="33px" >
          Watch <span style={{color: '#ff2625', textTransform:'capitalize' }} >{name}</span> excercise videos
      </Typography>
      <Stack justifyContent="center" flexWrap="wrap" alignItems="center"
      sx={{flexDirection:{lg: 'row'}, gap:{lg: '70px', xs: '0'}}}
      >
        
          {videoDetail?.slice(0,6).map((item, index) =>(
            <a href={`https://www.youtube.com/watch?=v${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel='noreferrer'
            >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color="#000" >
                  {item.video.title}
              </Typography>
              <Typography variant='h6' color="#000" >
                  {item.video.channelName}
              </Typography>
            </Box>
            </a>
            )) }
      </Stack>
      
    </Box>
  )
}

export default ExerciseVideo
