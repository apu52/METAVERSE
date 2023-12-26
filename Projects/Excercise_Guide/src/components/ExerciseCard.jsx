import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Stack} from '@mui/material';
import { fontSize } from '@mui/system';

const ExerciseCard = ({ exercise }) => {
  return (
   <Link className='exercise-card' to={`/exercise/${exercise.id}`} >
     <img src={exercise.gifUrl} loading="lazy" alt={exercise.name} />
   <Stack direction="row" >
    <Button sx={{ml:'21px', color:'#fff', background:'#ffa9a9',
      fontSize:"14px", borderRadius:'20px', textTransform:'capitalize'
  }} >
        {exercise.bodyPart}
    </Button>
    <Button sx={{ml:'21px', color:'#fff', fontSize:"14px", borderRadius:'20px', textTransform:'capitalize',
       background:'#fcc757' 
  }} >
        {exercise.target}
    </Button>
   </Stack>
   <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="21px" >
    {exercise.name}
   </Typography>
   </Link>
    

  )
}

export default ExerciseCard
