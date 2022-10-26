import React, { useState } from 'react';
import { useRouter } from 'next/router';

const WorkoutsPage = () => {
  const router = useRouter();
  return (
    <div style={{ margin: '100px 100px 100px 250px' }}>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            width: '300px',
            height: '300px',
            backgroundColor: '#14193E',
            color: 'white',
          }}
          onClick={() => {
            router.push('/Workout/targetList');
          }}
        >
          <h1>By Targeted Muscle</h1>
        </div>
        <div
          style={{
            width: '300px',
            height: '300px',
            backgroundColor: '#1F222A',
            color: 'white',
          }}
          onClick={() => {
            router.push('/Workout/equipmentList');
          }}
        >
          <h1>By Equipment</h1>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div
          style={{
            width: '300px',
            height: '300px',
            backgroundColor: '#1F222A',
            color: 'white',
          }}
          onClick={() => {
            router.push('/Workout/bodyPartList');
          }}
        >
          <h1>By Body Part</h1>
        </div>
        <div
          style={{
            width: '300px',
            height: '300px',
            backgroundColor: '#14193E',
            color: 'white',
          }}
        >
          <h1>All Workouts</h1>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsPage;
