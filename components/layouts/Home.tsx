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
        backgroundColor: '#CBCBCB',
        width: '1150px',
        height: '850px',
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '3rem',
        overflowX: 'scroll',
      }}
    >
      <div style={{ background: '#E8E8E8', width: '80px' }}>
        <NavBar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Home;
