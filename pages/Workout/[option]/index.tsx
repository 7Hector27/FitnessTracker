import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import useFetchWorkoutData from '../../../Hooks/CustomHooks/useFetchWorkoutData';

const WorkoutOptions = () => {
  const router = useRouter();
  const url = router.query.option;
  const { workoutData } = useFetchWorkoutData();

  useEffect(() => {
    console.log(window.location.pathname);
  }, []);

  return (
    <>
      <div>hi</div>

      <div>
        {workoutData?.map((option) => (
          <button
            onClick={() => {
              router.push(
                `/Workout/${url?.slice(0, url?.length - 4)}/${option}`
              );
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default WorkoutOptions;
