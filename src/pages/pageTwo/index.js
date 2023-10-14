import React from 'react';

import CSCLogo from '../../assets/CYBER-SECURITY-COUNCIL-LOGO-1.png';
import { Box, Grid, Stack, Typography, styled } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import cpxLogo from '../../assets/cpx-logo.png';
import cyberRangeLogo from '../../assets/cyberange-logo-v4 copy.png';

import BurjImage from '../../assets/BurjKhalifa.jpg';
import { animations } from 'react-animation';
import 'react-animation/dist/keyframes.css';

const PageTwo = ({ currentPage, setCurrentPage }) => {
  const MainWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 9),
    animation: animations.fadeIn,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  }));

  const MainLogo = styled(Box)(({ theme }) => ({
    height: '82px',

    [theme.breakpoints.down('md')]: {
      height: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '50px',
    },
  }));

  const ButtonWrapper = styled(Box)(({ theme }) => ({
    background: '#FAD02C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: '4px',
    cursor: 'pointer',
  }));

  const IconLeft = styled(ArrowRightAltIcon)(({ theme }) => ({
    fontSize: '50px',
    color: '#000',
    rotate: '180deg',

    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '35px',
    },
  }));

  const IconRight = styled(ArrowRightAltIcon)(({ theme }) => ({
    fontSize: '50px',
    color: '#000',

    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '35px',
    },
  }));

  return (
    <>
      <MainWrapper>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <MainLogo component="img" src={CSCLogo} />

          <Stack direction="row" alignItems="center" gap={2}>
            <ButtonWrapper onClick={() => setCurrentPage('one')}>
              {' '}
              <IconLeft />{' '}
            </ButtonWrapper>

            <ButtonWrapper onClick={() => setCurrentPage('three')}>
              {' '}
              <IconRight />{' '}
            </ButtonWrapper>
          </Stack>
        </Box>

        <Box mt={10} mb={4}>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12} sx={{ animation: animations.fadeIn }}>
              <Stack direction="column" spacing={1.5}>
                <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>
                  Burj Khalifa
                </Typography>
                <Typography sx={{ fontSize: '18px', fontWeight: 'normal' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  iaculis leo vel ex scelerisque, nec fringilla dolor euismod.
                  Phasellus suscipit ornare sem, ac faucibus nisi dignissim
                  fringilla. Proin tempus faucibus tellus, in varius risus
                  dapibus et. Mauris aliquam, diam ut tempor varius, arcu felis
                  iaculis erat, non semper eros nunc in justo. Donec pretium
                  sapien tempus imperdiet venenatis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Morbi iaculis leo vel ex
                  scelerisque, nec fringilla dolor euismod. Phasellus suscipit
                  ornare sem, ac faucibus nisi dignissim fringilla. Proin tempus
                  faucibus tellus, in varius risus dapibus et. Mauris aliquam,
                  diam ut tempor varius, arcu felis iaculis erat, non semper
                  eros nunc in justo. Donec pretium sapien tempus imperdiet
                  venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi iaculis leo vel ex scelerisque, nec fringilla
                  dolor euismod. Phasellus suscipit ornare sem, ac faucibus nisi
                  dignissim fringilla. Proin tempus faucibus tellus, in varius
                  risus dapibus et. Mauris aliquam, diam ut tempor varius, arcu
                  felis iaculis erat, non semper eros nunc in justo. Donec
                  pretium sapien tempus imperdiet venenatis. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Morbi iaculis leo vel
                  ex scelerisque, nec fringilla dolor euismod. Phasellus
                  suscipit ornare sem, ac faucibus nisi dignissim fringilla.
                  Proin tempus faucibus tellus, in varius risus dapibus et.
                  Mauris aliquam, diam ut tempor varius, arcu felis iaculis
                  erat, non semper eros nunc in justo. Donec pretium sapien
                  tempus imperdiet venenatis.
                </Typography>
              </Stack>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box>
                <Box
                  component="img"
                  src={BurjImage}
                  width="100%"
                  sx={{
                    borderRadius: '12px',
                    animation: animations.popIn,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: ' 80px',
          }}
        >
          <Box component="img" src={cpxLogo} height="46px" />
          <Box component="img" src={cyberRangeLogo} height="50px" />
        </Box>
      </MainWrapper>
    </>
  );
};

export default PageTwo;
