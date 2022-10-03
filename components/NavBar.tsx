import React, { useState } from 'react';
import Home from '../pages';
import WorkoutSchedule from '../pages/WorkoutSchedule';
import WorkoutsPage from '../pages/WorkoutsPage';
import { useRouter } from 'next/router';

const NavBar = () => {
  const pages = ['Home', 'WorkoutsPage', 'WorkoutSchedule'];
  const router = useRouter();

  return (
    <div className='Nav'>
      <ul
        style={{
          listStyle: 'none',
        }}
      >
        {pages.map((item: string, index: number) => (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: '5px',
              }}
            >
              <li onClick={() => router.push(item)}>{index}</li>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
