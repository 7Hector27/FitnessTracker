import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../redux/reduxHooks';
import { setOptionUrl } from '../redux/workouts/workoutSlice';
const WorkoutsPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        onClick={() => {
          router.push('/WorkoutOptions'),
            dispatch(
              setOptionUrl(
                'https://exercisedb.p.rapidapi.com/exercises/targetList'
              )
            );
        }}
      >
        By Targeted Muscle
      </div>
      <div
        onClick={() => {
          router.push('/WorkoutOptions'),
            dispatch(
              setOptionUrl(
                'https://exercisedb.p.rapidapi.com/exercises/equipmentList'
              )
            );
        }}
      >
        By Equipment
      </div>
      <div
        onClick={() => {
          router.push('/WorkoutOptions'),
            dispatch(
              setOptionUrl(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
              )
            );
        }}
      >
        By Body Part
      </div>
      <div>All Workouts</div>
    </>
  );
};

export default WorkoutsPage;
