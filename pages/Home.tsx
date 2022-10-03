import React, { useState } from 'react';

const Home = () => {
  const [data, setData] = useState<string>('hello');
  return <div>{data}</div>;
};

export default Home;
