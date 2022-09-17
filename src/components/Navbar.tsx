import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: '122px', xs: '40px' }, marginTop: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      px="20px"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>
        <img src={Logo} alt="Logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/">Home</Link>
        <Link to="/exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
