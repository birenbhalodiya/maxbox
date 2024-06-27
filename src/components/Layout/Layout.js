import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';

export default function Layout({ children }) {

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Box component="main" sx={{ flexGrow: 1, overflow: 'auto', width: '-webkit-fill-available', }} >
          <Box sx={{ justifyContent: 'space-between', alignItems: 'center', width: '-webkit-fill-available', backgroundColor: 'primary.main', p: { xs: '10px', sm: '16px' }, position: 'fixed', zIndex: '9999' }}>
            <Header />
          </Box>
          <Box component="main" sx={{ flexGrow: 1, backgroundColor: 'transparent', mt: { xs: '58px', sm: '70px' } }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>

  );
}
