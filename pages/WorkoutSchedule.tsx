import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RemoveWorkoutModal from '../components/RemoveWorkoutModal';
const WorkoutSchedule = () => {
  const [userData, setUserData] = useState();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [removeWorkoutId, setRemoveWorkoutId] = useState<string>('');

  const getUserData = async () => {
    const user = await axios.get('/api/user/getUser');

    setUserData(user.data);
  };

  useEffect(() => {
    getUserData();
    console.log(userData);
  }, [showModal]);
  return (
    <div>
      <RemoveWorkoutModal
        show={showModal}
        setShowModal={(bool: boolean) => setShowModal(bool)}
        acceptFunc={() => console.log('accepted')}
        id={removeWorkoutId}
      />

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginTop: '40px',
        }}
      >
        {userData?.workoutSchedule.map((day: any) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '750px',
                border: 'solid 2px black',
                width: '300px',
              }}
            >
              <div
                style={{
                  padding: '10px',
                  fontSize: '24px',
                  marginBottom: '10px',
                  backgroundColor: '#4762F1',
                  color: 'white',
                }}
              >
                {day.dayoftheweek}
              </div>
              <div
                style={{
                  overflowY: 'scroll',
                }}
              >
                {day.workouts?.map((workout: any) => {
                  return (
                    <div
                      style={{
                        height: '440px',
                        margin: '0px 0px 40px 0px',
                        border: 'solid 1px black',
                        borderRadius: '18px',
                      }}
                    >
                      <img
                        src={workout.gifUrl}
                        style={{
                          width: '280px',
                          height: '280px',
                          borderTopLeftRadius: '18px',
                          borderTopRightRadius: '18px',
                        }}
                      />
                      <div
                        style={{
                          backgroundColor: '#1E202D',
                          height: '30px',
                          color: 'white',
                          fontSize: '16px',
                        }}
                      >
                        Workout: {workout.name}
                      </div>

                      <div
                        style={{
                          backgroundColor: '#181A29',
                          height: '30px',
                          color: 'white',
                          fontSize: '16px',
                        }}
                      >
                        Body Part: {workout.bodyPart}
                      </div>
                      <div
                        style={{
                          backgroundColor: '#1E202D',
                          height: '30px',
                          color: 'white',
                          fontSize: '16px',
                        }}
                      >
                        Workout Equipment: {workout.equipment}
                      </div>

                      <div
                        style={{
                          backgroundColor: '#181A29',
                          height: '30px',
                          color: 'white',
                          fontSize: '16px',
                        }}
                      >
                        Target Muscle: {workout.target}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          backgroundColor: '#1E202D',
                          height: '30px',
                          color: 'white',
                          fontSize: '16px',
                        }}
                      >
                        <div>
                          Workout Time:{' '}
                          {workout.time == null ? 0 : workout.time}
                        </div>
                        <div>
                          Sets: {workout.sets == null ? 0 : workout.sets}
                        </div>
                        <div>
                          Reps: {workout.reps == null ? 0 : workout.reps}
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          backgroundColor: '#1E202D',
                          height: '30px',
                          color: 'white',
                          fontSize: '16px',
                        }}
                      >
                        <button
                          style={{ width: '48%', backgroundColor: '#4762F1' }}
                        >
                          Edit
                        </button>
                        <button
                          style={{ width: '48%', backgroundColor: '#4762F1' }}
                          onClick={() => {
                            setRemoveWorkoutId(workout.id), setShowModal(true);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutSchedule;
