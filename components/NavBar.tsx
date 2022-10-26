import React from 'react';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
const NavBar = () => {
  const pages = [
    { name: 'Home', icon: HomeIcon },
    { name: 'WorkoutsPage', icon: FitnessCenterIcon },
    { name: 'WorkoutSchedule', icon: CalendarMonthIcon },
  ];
  const router = useRouter();

  return (
    <div className='Nav'>
      <ul
        style={{
          listStyle: 'none',
          height: '750px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {pages.map((item: any, index: number) => (
          <li
            onClick={() =>
              router.push(`${window.location.origin}/${item.name}`)
            }
          >
            <item.icon style={{ fontSize: '32px', marginBottom: '44px' }} />
          </li>
        ))}
      </ul>
      <LogoutIcon style={{ fontSize: '32px' }} />
    </div>
  );
};

export default NavBar;
