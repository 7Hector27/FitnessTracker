import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import axios from 'axios';
interface workoutTemplate {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
const WorkoutList = () => {
  const [workoutsArray, setWorkoutsArray] = useState<workoutTemplate[]>([]);
  const workoutListURL = useAppSelector((state) => state.workoutSlice.listUrl);

  // Pagination
  const [postsPerPage, setPostsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = workoutsArray.slice(indexOfFirstPost, indexOfLastPost);
  const numOfButtons = Array.from(
    Array(Math.floor(workoutsArray.length / postsPerPage)).keys()
  );

  const setList = async () => {
    const response = await axios.get(workoutListURL, {
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    });
    setWorkoutsArray(response.data);
  };

  useEffect(() => {
    setList();
  }, []);

  return (
    <div>
      <Pagination currentPosts={currentPosts} />
      {numOfButtons?.map((button, index) => (
        <button
          onClick={() => setCurrentPage(index + 1)}
          style={currentPage === index ? { color: 'red' } : { color: 'black' }}
        >
          {button + 1}
        </button>
      ))}
    </div>
  );
};

export default WorkoutList;
