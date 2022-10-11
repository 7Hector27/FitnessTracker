import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const getCookiedata = async () => {
    const x = await axios.get('/api/user/getUser');
    console.log(x.data);
  };
  useEffect(() => {
    getCookiedata();
  }, []);
  const [data, setData] = useState<string>('hello');
  return <div>{data}</div>;
};

export default Home;
