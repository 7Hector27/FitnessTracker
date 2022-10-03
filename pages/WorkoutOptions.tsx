import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { setListUrl } from '../redux/workouts/workoutSlice';
const WorkoutOptions = () => {
  const router = useRouter();
  const url = useAppSelector((state) => state.workoutSlice.optionUrl);
  const url2 = useAppSelector((state) => state.workoutSlice.listUrl);

  const dispatch = useAppDispatch();
  const [optionsArray, setOptionsArray] = useState([]);

  // populate options
  const populateOptionsArray = async () => {
    const response = await axios.get(`${url}`, {
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    });
    setOptionsArray(response.data);
    console.log(url);
  };

  //Handler for populating the next page
  const workoutListHandler = async (sortBy: string) => {
    const filterBy = url.substring(url.lastIndexOf('/') + 1, url.length - 4);

    // const response = await axios.get(
    //   ` https://exercisedb.p.rapidapi.com/exercises/${filterBy}/${sortBy}`,
    //   {
    //     headers: {
    //       'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    //     },
    //   }
    // );
    dispatch(
      setListUrl(
        ` https://exercisedb.p.rapidapi.com/exercises/${filterBy}/${sortBy}`
      )
    );
    router.push('/WorkoutList');
  };

  useEffect(() => {
    populateOptionsArray();
    console.log(optionsArray);
  }, []);

  return (
    <>
      <div>{url}</div>

      <div>
        {optionsArray.map((option) => (
          <button onClick={() => workoutListHandler(option)}>{option}</button>
        ))}
      </div>
    </>
  );
};

export default WorkoutOptions;
