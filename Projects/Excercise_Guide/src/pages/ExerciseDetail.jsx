
import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';

import {fetchData, excerciseOptions, youtubeOptions } from '../utils/fetchExcerciseData'


const ExerciseDetail = () => {
 
  const [excerciseDetail, setExcerciseDetail] = useState([]);
  const [videoDetail, setVideoDetail] = useState([])
  const { id } = useParams();

  console.log(excerciseDetail);

  useEffect(() =>{
      const fetchExcerciseData = async () =>{
        const excerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const excerciseDetailData = await fetchData(`${excerciseDbUrl}/exercises/exercise/${id}`,excerciseOptions);

        const videoDetailData = await fetchData(`${youtubeSearchUrl}/search?query=${excerciseDetailData.name}`,youtubeOptions)
        

        setVideoDetail(videoDetailData.contents)

        setExcerciseDetail(excerciseDetailData);


       
      }

      fetchExcerciseData();
  },[id])


  return (
    <div>
      <Detail excerciseDetail={excerciseDetail} />
      <ExerciseVideo videoDetail={videoDetail} name={excerciseDetail.name} />
     
     
    </div>
  )
}

export default ExerciseDetail
