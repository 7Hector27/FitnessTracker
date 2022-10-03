import axios from 'axios';
import type { NextPage } from 'next';
import Router, { useRouter } from 'next/router';

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
const Home: NextPage = () => {
  const router = useRouter();

  const [upInBoolean, setUpInBoolean] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (!upInBoolean) {
      const u = await axios.post('/api/auth/signin', {
        email: email,
        password: password,
      });
      console.log(u);
      router.push('./Home ');
    } else {
      const u = await axios.post('/api/auth/signup', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      console.log(u);
      router.push('./Home');
    }
  };
  return (
    <>
      <div style={{ margin: '200px', backgroundColor: 'teal', padding: '5px' }}>
        <div style={{ float: 'right' }}>
          <button
            onClick={() => setUpInBoolean(false)}
            style={!upInBoolean ? { border: '3px solid black' } : {}}
          >
            Sign In
          </button>
          <button
            onClick={() => setUpInBoolean(true)}
            style={upInBoolean ? { border: '3px solid black' } : {}}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={submitHandler}>
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                marginBottom: '5px',
                marginTop: '20px',
              }}
            >
              <input
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                style={!upInBoolean ? { display: 'none' } : {}}
              ></input>

              <input
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
                style={!upInBoolean ? { display: 'none' } : {}}
              ></input>
              <input
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button onClick={() => submitHandler}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
