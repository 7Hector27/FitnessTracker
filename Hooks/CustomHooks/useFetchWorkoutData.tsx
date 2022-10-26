import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// https://exercisedb.p.rapidapi.com/exercises/bodyPartList
// https://exercisedb.p.rapidapi.com/exercises/bodyPart/%7BbodyPart%7D

// https://exercisedb.p.rapidapi.com/exercises/targetList
// https://exercisedb.p.rapidapi.com/exercises/target/%7Btarget%7D

// https://exercisedb.p.rapidapi.com/exercises/equipment/%7Btype%7D
// https://exercisedb.p.rapidapi.com/exercises/equipmentList

const useFetchWorkoutData = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const router = useRouter();
  const fetchData = async () => {
    if (router.query.targetedGroup) {
      const url = `https://exercisedb.p.rapidapi.com/exercises/${router.query.option}/${router.query.targetedGroup}`;
      const response = await axios.get(url, {
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY as string,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });
      setWorkoutData(response.data);
    } else {
      const url = `https://exercisedb.p.rapidapi.com/exercises/${router.query.option}`;
      const response = await axios.get(url, {
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY as string,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });
      console.log(response.data);
      setWorkoutData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { workoutData };
};

export default useFetchWorkoutData;
