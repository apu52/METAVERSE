import React,{useState, useEffect} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';



import { fetchData, excerciseOptions } from '../utils/fetchExcerciseData';

const SearchExercise = ({setExercise}) => {

   const [searchTerm, setSearchTerm] = useState('');
  

   const handleClick = async () =>  {
    console.log(searchTerm)
     if(searchTerm)
     {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);

      const searchExcercises = exercisesData.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm) ||
        item.bodyPart.toLocaleLowerCase().includes(searchTerm) ||
        item.equipment.toLocaleLowerCase().includes(searchTerm) ||
        item.target.toLocaleLowerCase().includes(searchTerm)

      );  
      
      setExercise(searchExcercises);
     
      setSearchTerm('');
      
     }

   
   }

  
  return (
     <Stack alignItems="center" justifyContent="center" mt="37px"
      p="20px" >

            <Typography fontWeight={700} sx={{
              fontSize :{lg:'44px', xs:'30px' }
            }} mb="50px" textAlign="center" >
              Awesome Exercises You <br/> Should Know
            </Typography>

            <Box position="relative" mb="72px" >
                <TextField
                  sx={{input:{
                    fontWeight:'700', border:'none',borderRadius:'4px'
                  },
                  width: {lg : '800px' , xs:'350px'},
                  backgroundColor:'#fff',
                  borderRadius:'40px'
                  }}
                  height="76px"
                  value={searchTerm}
                  onChange={(e) =>{setSearchTerm(e.target.value.toLocaleLowerCase())}}
                  placeholder="Search Exercise"
                  type="text"
                />

                <Button 
                className='search-btn'
                sx={{
                  bgcolor: '#FF2625',
                  color: '#fff',
                  textTransform: 'none',
                  width:{lg: '175px', xs:'80px'},
                  fontSize:{lg:'20px', xs:'14px' },
                  height: '56px',
                  position: 'absolute',
                  right:'0'
                }}
                onClick={handleClick}
                >
                  Search
                </Button>

            </Box>

     </Stack>
  )
}

export default SearchExercise
