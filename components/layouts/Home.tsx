import { NextPage } from 'next';
import React from 'react';
import NavBar from '../NavBar';
// This beats the avg props destructuring
interface HomeProps {
  children: JSX.Element;
}
const Home: NextPage<HomeProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',

        backgroundColor: 'lightblue',
        width: '800px',
        height: '800px',
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '3rem',
      }}
    >
      <div style={{ background: 'green', float: 'left' }}>
        <NavBar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Home;
