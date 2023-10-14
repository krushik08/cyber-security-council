import React from 'react';

import CSCLogo from '../../assets/CYBER-SECURITY-COUNCIL-LOGO-1.png';
import { Box, Stack, Typography, styled } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import cpxLogo from '../../assets/cpx-logo.png';
import cyberRangeLogo from '../../assets/cyberange-logo-v4 copy.png';

import { animations } from 'react-animation';
import 'react-animation/dist/keyframes.css';

const Home = ({ currentPage, setCurrentPage }) => {
  const MainWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 9),
    animation: animations.fadeIn,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  }));

  const PageWrapper = styled(Box)(({ theme }) => ({
    minHeight: 'calc(100vh - 66px - 60px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      minHeight: '90vh',
    },
  }));

  const MainLogo = styled(Box)(({ theme }) => ({
    height: '170px',

    [theme.breakpoints.down('md')]: {
      height: '100px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
  }));

  return (
    <MainWrapper>
      <PageWrapper>
        <MainLogo component="img" src={CSCLogo} />

        <Stack direction="column" alignItems="center" m={'auto'} gap={2}>
          <Typography
            sx={{ fontSize: '35px', fontWeight: 'bold', color: '#FFF' }}
          >
            Burj Khalifa
          </Typography>

          <Box
            sx={{
              background: '#FAD02C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              padding: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentPage('two')}
            className="blob"
          >
            {' '}
            <ArrowRightAltIcon
              sx={{
                fontSize: '70px',
                color: '#000',
              }}
            />{' '}
          </Box>
        </Stack>
      </PageWrapper>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box component="img" src={cpxLogo} height="46px" />
        <Box component="img" src={cyberRangeLogo} height="50px" />
      </Box>
    </MainWrapper>
  );
};

export default Home;
