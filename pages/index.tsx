import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
const Home: NextPage = () => {
  const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': '8202c91ec4msh478718c92dc8898p1d59bajsn67bebf50055d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response: any) {
      console.log(response.data);
    })
    .catch(function (error: any) {
      console.error(error);
    });
  return <div className={styles.container}>hello</div>;
};

export default Home;
