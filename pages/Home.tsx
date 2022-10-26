import React, { useState, useEffect } from 'react';
import axios from 'axios';
import workoutSlice from '../redux/workouts/workoutSlice';
// colors
//  #4762F1   - blue purple
//  #CBCBCB   - darkgrey1 background
//  #14193E   - dark1
//  #1F222A   - dark2
//  #CECECE   - darkgrey2
const Home = () => {
  const [userData, setUserData] = useState<any>('hi');

  const [todaysWorkouts, setTodaysWorkouts] = useState<any>();
  const [active, setActive] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const today = new Date().toDateString();

  const getUserData = async () => {
    const user = await axios.get('/api/user/getUser');

    setUserData(user.data);
    setTodaysWorkouts(
      user.data.workoutSchedule?.filter(
        (day: any) => day.dayoftheweek.slice(0, 3) == today.slice(0, 3)
      )
    );
    setLoading(false);
  };

  // const addWorkout = async () => {
  //   const newWorkouts = todaysWorkouts[0].workouts.map((workout: any) => {
  //     delete workout['id'];
  //     delete workout['dayId'];
  //     return workout;
  //   });

  //   const workouts = [
  //     ...newWorkouts,
  //     {
  //       bodyPart: 'waist',
  //       equipment: 'body weight',
  //       gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
  //       name: '3/4 sit-up',
  //       target: 'abs',
  //     },
  //   ];
  //   await axios.post('/api/user/addWorkout', {
  //     id: todaysWorkouts[0].id,
  //     newWorkouts: workouts,
  //   });
  //   console.log(todaysWorkouts[0].id);
  //   console.log(...workouts);
  // };

  const removeWorkout = async (workoutId: any) => {
    const delUser = await axios.delete('/api/user/removeWorkout', {
      data: {
        id: workoutId,
      },
    });
  };

  useEffect(() => {
    getUserData();

    console.log(userData);
    console.log(todaysWorkouts);
  }, []);
  if (loading === true) {
    return <div>...Loading</div>;
  } else {
    return (
      <>
        <div
          style={{
            backgroundColor: '#4762F1',
            width: '1070px',
            height: '15rem',
            display: 'flex',
            color: 'white',
          }}
        >
          <div
            style={{
              backgroundColor: '#4762F1',
              width: '48rem',
              height: '15rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <h2 style={{ marginTop: '60px' }}>
              🌞 Welcome back {userData.firstName}
            </h2>
            <h4>This is today's workout</h4>
          </div>
          <div
            style={{
              backgroundColor: '#14193E',
              width: '85rem',
              height: '15rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <h2 style={{ marginTop: '60px' }}>Track your Daily Activity</h2>
            <h4> Contary to popular belief, Lorem ipsumsimply random text</h4>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#1F222A',
            color: 'white',
            height: '610px',
            display: 'flex',
          }}
        >
          <div
            style={{ height: '610px', width: '400px', backgroundColor: 'red' }}
          >
            Todays workouts
          </div>
          <div
            style={{
              height: '610px',
              width: '400px',
              backgroundColor: '#D8D9E2',
              color: 'Black',
            }}
          >
            <h3>Todays workouts</h3>
            <button
              style={
                active === 0 ? { pointerEvents: 'none', opacity: '0.5' } : {}
              }
              onClick={() => setActive(active - 1)}
            >{`<`}</button>
            {todaysWorkouts[0].workouts.map((workout: any, idx: number) => {
              return (
                <div
                  style={
                    active !== idx ? { display: 'none', opacity: '0.5' } : {}
                  }
                >
                  <h2>{workout.name}</h2>
                  <img src={workout.gifUrl}></img>
                  {workout.bodyPart}
                  {workout.equipment}
                  {workout?.reps}
                  {workout?.sets}
                  {workout.target}
                  {workout?.time}
                </div>
              );
            })}
            <button
              style={
                active === todaysWorkouts[0].workouts.length - 1
                  ? { pointerEvents: 'none' }
                  : {}
              }
              onClick={() => setActive(active + 1)}
            >{`>`}</button>
          </div>
          <div
            style={{
              height: '610px',
              width: '270px',
              backgroundColor: 'blue',
              color: '#A0A0A0',
            }}
          >
            Todays workouts
          </div>
        </div>
      </>
    );
  }
};

export default Home;
