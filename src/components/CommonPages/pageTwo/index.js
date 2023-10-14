import React, { useEffect } from 'react';

import CSCLogo from '../../../assets/CYBER-SECURITY-COUNCIL-LOGO-1.png';
import { Box, Grid, Stack, Typography, styled } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import cpxLogo from '../../../assets/cpx-logo.png';
import cyberRangeLogo from '../../../assets/cyberange-logo-v4 copy.png';
import ArrowIcon from '../../../assets/arrow.png';
import MuteIcon from '../../../assets/volume-up.png';
import PlayButton from '../../../assets/mute.png';
import BurjImage from '../../../assets/BurjKhalifa.jpg';
import { animations } from 'react-animation';
import content from '../../../constent';
import 'react-animation/dist/keyframes.css';
import { useLocation } from 'react-router-dom';

const PageTwo = ({
  currentPage,
  setCurrentPage,
  plyAudioFuc,
  pauseAudioFuc,
  isPlayAudio,
  setIsPlayAudio,
}) => {
  const location = useLocation();
  // useEffect(() => {
  //   // plyAudioFuc();
  // }, []);
  const MainWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '98vh',
    padding: theme.spacing(0, 5),
    animation: animations.fadeIn,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 4),
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
    // background: '#fff',
    display: 'flex',
    // width: '36px',
    // height: '26px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '1px solid transparent',
    cursor: 'pointer',
  }));

  const IconLeft = styled(Box)(({ theme }) => ({
    height: '50px',
    rotate: '180deg',

    [theme.breakpoints.down('md')]: {
      height: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '35px',
    },
  }));

  const IconRight = styled(Box)(({ theme }) => ({
    height: '50px',

    [theme.breakpoints.down('md')]: {
      height: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '35px',
    },
  }));

  const IconAction = styled(Box)(({ theme }) => ({
    height: '50px',

    [theme.breakpoints.down('md')]: {
      height: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '35px',
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
            {/* <ButtonWrapper>
              {isPlayAudio ? (
                <IconAction
                  component="img"
                  src={PlayButton}
                  onClick={() => {
                    plyAudioFuc();
                    setIsPlayAudio(false);
                  }}
                />
              ) : (
                <IconAction
                  component="img"
                  src={MuteIcon}
                  onClick={() => {
                    pauseAudioFuc();
                    setIsPlayAudio(true);
                  }}
                />
              )}
            </ButtonWrapper> */}

            <ButtonWrapper onClick={() => setCurrentPage('one')}>
              {' '}
              <IconLeft component="img" src={ArrowIcon} />{' '}
            </ButtonWrapper>

            <ButtonWrapper onClick={() => setCurrentPage('three')}>
              {' '}
              <IconRight component="img" src={ArrowIcon} />
            </ButtonWrapper>
          </Stack>
        </Box>

        <Box mt={10} mb={4} sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item md={6} xs={12} sx={{ animation: animations.fadeIn }}>
              <Stack direction="column" spacing={1.5}>
                <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>
                  {content[location?.pathname]?.name}
                </Typography>
                <Typography
                  className="textContent"
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    textAlign: 'justify',
                  }}
                >
                  Sector: {content[location?.pathname]?.section}
                  <ol>
                    {content[location?.pathname]?.attacks?.length &&
                      content[location?.pathname]?.attacks.map((item) => (
                        <>
                          <li>{item}</li>
                          <br />
                        </>
                      ))}
                  </ol>
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
            marginTop: '45px',
          }}
        >
          <Box component="img" src={cpxLogo} height="30px" />
          <Box component="img" src={cyberRangeLogo} height="30px" />
        </Box>
      </MainWrapper>
    </>
  );
};

export default PageTwo;
