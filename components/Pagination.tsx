import React from 'react';

const Pagination = ({
  currentPosts,
}: {
  currentPosts: {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
  }[];
}) => {
  return (
    <div>
      {currentPosts.map((workout) => (
        <p>{workout.name}</p>
      ))}
    </div>
  );
};

export default Pagination;
