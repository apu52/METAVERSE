import React from 'react';
import {Stack, Typography, Button} from '@mui/material';

import BodyImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({excerciseDetail}) => {

  const {bodyPart, equipment, gifUrl, name, target } = excerciseDetail;

  const extraDetail = [
    {
      icon: BodyImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{flexDirection:{lg: 'row'}, p:'20px', alignItems:'center', marginTop:'30px'
     }}>
     <img src={gifUrl} alt="gif" className='detail-image' />
      <Stack sx={{gap: {lg: '35px', xs:'20px'}}} >
        <Typography variant='h3' textTransform="capitalize" >
          {name}
        </Typography>
        <Typography variant='h6' >
        Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item) =>(
          <Stack sx={{marginTop:{lg:'10px', xs:'25px'}}} direction="row" alignItems="center" gap="24px" key={item.name} >
            <Button sx={{background:'#fff2db', width:'100px', height:'100px', borderRadius:'50%' }} >
            <img src={item.icon} alt={bodyPart} style={{
              width:'50px', height:'50px' 
            }} />

           </Button>
           <Typography variant='h5' textTransform="capitalize" >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail
