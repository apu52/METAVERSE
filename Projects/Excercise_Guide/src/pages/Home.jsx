import React,{useState} from 'react';
import { Box } from '@mui/system';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
import Exercises from '../components/Exercises';


const Home = () => {

  const [exercise, setExercise] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise exercise={exercise} setExercise={setExercise} />
      {console.log(exercise)}
      <Exercises exercise={exercise} setExercise={setExercise} /> 
    </Box>
  )
}

export default Home
