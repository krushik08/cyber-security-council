import React from 'react';

import CSCLogo from '../../../assets/CYBER-SECURITY-COUNCIL-LOGO-1.png';
import { Box, Stack, Typography, styled } from '@mui/material';

import cpxLogo from '../../../assets/cpx-logo.png';
import cyberRangeLogo from '../../../assets/cyberange-logo-v4 copy.png';
import ArrowIcon from '../../../assets/arrow.png';

import { animations } from 'react-animation';
import 'react-animation/dist/keyframes.css';
import content from '../../../constent';
import { useLocation } from 'react-router-dom';

const Home = ({ key, currentPage, setCurrentPage }) => {
  const location = useLocation();
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
            sx={{
              fontSize: '35px',
              fontWeight: 'bold !important',
              color: '#FFF',
              textTransform: 'capitalize',
            }}
          >
            {content[location?.pathname]?.name}
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
            <Box component="img" src={ArrowIcon} height="70px" />{' '}
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
        {/* <Box component="img" src={cpxLogo} height="30px" /> */}
        {/* <Box component="img" src={cyberRangeLogo} height="30px" /> */}
      </Box>
    </MainWrapper>
  );
};

export default Home;
