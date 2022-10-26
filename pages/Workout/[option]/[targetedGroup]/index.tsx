import React, { useState, useEffect } from 'react';
import Pagination from '../../../../components/Pagination';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import axios from 'axios';
import { useRouter } from 'next/router';
import useFetchWorkoutData from '../../../../Hooks/CustomHooks/useFetchWorkoutData';

const WorkoutList = () => {
  const router = useRouter();
  const { workoutData } = useFetchWorkoutData();
  Pagination;
  const [postsPerPage, setPostsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = workoutData.slice(indexOfFirstPost, indexOfLastPost);
  const numOfButtons = Array.from(
    Array(Math.floor(workoutData.length / postsPerPage)).keys()
  );

  // const setList = async () => {
  //   const response = await axios.get(workoutListURL, {
  //     headers: {
  //       'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY as string,
  //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  //     },
  //   });
  //   setWorkoutsArray(response.data);
  // };

  useEffect(() => {
    // setList();
  }, []);

  return (
    <div>
      <Pagination currentPosts={currentPosts} />
      {numOfButtons?.map((button, index) => (
        <button
          onClick={() => setCurrentPage(index + 1)}
          style={
            currentPage === index + 1 ? { color: 'red' } : { color: 'black' }
          }
        >
          {button + 1}
        </button>
      ))}
    </div>
  );
};

export default WorkoutList;
