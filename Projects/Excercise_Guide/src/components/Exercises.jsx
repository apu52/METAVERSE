import React,{useState, useEffect} from 'react'
import { Pagination } from '@mui/material'
import { Box, Typography, Stack} from '@mui/material';
import { excerciseOptions, fetchData } from '../utils/fetchExcerciseData';

import ExerciseCard from './ExerciseCard';


const Exercises = ({exercise, setExercise}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercise.slice(indexOfFirstExercise, indexOfLastExercise)
  const paginate = (e, val) =>{
    setCurrentPage(val);

    window.scrollTo({top: 1800, behavior:'smooth'})
  } 




  return (
     <Box id="excercise" sm={{mt :{lg: '110px'}}}
     mt="50px"
     p="20px"
     >
        <Typography variant='h3' mb="46px" >
            Showing Results
        </Typography>
        <Stack direction="row" sx={{gap:{lg: '110px', xs:'50px'}}}
        flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) =>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
        </Stack>
        <Stack mt="100px" alignItems="center" >
          {exercise.length > 9 &&
          
          <Pagination
           color='standard'
           shape='rounded'
          count={Math.ceil(exercise.length / exercisesPerPage)}
          page={currentPage}
          size="large"
          onChange={paginate}
          />
          
          }
        </Stack>
         
     </Box>
  )
}

export default Exercises
