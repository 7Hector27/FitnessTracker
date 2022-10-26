import React, { useState } from 'react';
import axios from 'axios';
const RemoveWorkoutModal = ({
  show,
  setShowModal,
  acceptFunc,
  id,
}: {
  show: boolean;
  setShowModal: any;
  acceptFunc: () => void;
  id: string;
}) => {
  const removeWorkout = async () => {
    const delUser = await axios.delete('/api/user/removeWorkout', {
      data: {
        id: id,
      },
    });
    setShowModal(false);
  };

  return (
    <>
      <div className={`${show ? 'modal modal-display' : 'modal'}`}>
        <div className='modal-content'>
          <button
            style={{ float: 'right' }}
            onClick={() => setShowModal(!show)}
          >
            x
          </button>
          <h3>Modal Content</h3>
          <h4>{id}</h4>
          <div>
            <button onClick={() => removeWorkout()}>Remove</button>
            <button onClick={() => setShowModal(!show)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveWorkoutModal;
