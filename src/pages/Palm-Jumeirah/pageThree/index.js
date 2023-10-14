import React, { useState } from 'react';

import CSCLogo from '../../../assets/CYBER-SECURITY-COUNCIL-LOGO-1.png';
import { Box, Grid, Stack, Typography, styled } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import cpxLogo from '../../../assets/cpx-logo.png';
import cyberRangeLogo from '../../../assets/cyberange-logo-v4 copy.png';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BurjImage from '../../../assets/BurjKhalifa.jpg';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import CancelIcon from '@mui/icons-material/Cancel';
import { animations } from 'react-animation';
import 'react-animation/dist/keyframes.css';

import ArrowIcon from '../../../assets/arrow.png';
import MuteIcon from '../../../assets/volume-up.png';
import PlayButton from '../../../assets/mute.png';
import TooltipComponent from '../../../components/tooltip/tooltip';

const PageThree = ({
  currentPage,
  setCurrentPage,
  plyAudioFuc,
  pauseAudioFuc,
  isPlayAudio,
  setIsPlayAudio,
}) => {
  const [selectedToolTip, setSelectedToolTip] = useState();
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setSelectedToolTip();
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const MainWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0, 5),
    display: 'flex',
    flexDirection: 'column',
    height: '98vh',

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
    display: 'flex',
    // background: '#fff',
    // width: '36px',
    // height: '26px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: '4px',
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

  const IconAction = styled(Box)(({ theme }) => ({
    height: '50px',

    [theme.breakpoints.down('md')]: {
      height: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '35px',
    },
  }));

  const PlusButtonOne = styled(Box)(({ theme }) => ({
    width: '100%',
    cursor: 'pointer',
    position: 'absolute',
    top: '23%',
    left: '48%',
  }));
  const PlusButtonTwo = styled(Box)(({ theme }) => ({
    width: '100%',
    cursor: 'pointer',
    position: 'absolute',
    top: '70%',
    left: '43.5%',
  }));
  const PlusButtonThree = styled(Box)(({ theme }) => ({
    width: '100%',
    cursor: 'pointer',
    position: 'absolute',
    top: '75%',
    left: '22%',
  }));
  const PlusButtonFour = styled(Box)(({ theme }) => ({
    width: '100%',
    cursor: 'pointer',
    position: 'absolute',
    top: '80%',
    left: '72%',
  }));

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 300,
      border: '1px solid #dadde9',
      borderRadius: '12px',
      padding: '12px',
    },
  }));

  return (
    <>
      <MainWrapper sx={{ overflowX: 'hidden' }}>
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
            <ButtonWrapper onClick={() => setCurrentPage('two')}>
              {' '}
              <IconLeft component="img" src={ArrowIcon} />{' '}
            </ButtonWrapper>
          </Stack>
        </Box>

        <Box mt={10} mb={4} sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} justifyContent={'center'}>
            <Grid item md={6} xs={12}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={BurjImage}
                  width="100%"
                  sx={{
                    borderRadius: '12px',
                    animation: animations.popIn,
                  }}
                />

                <PlusButtonOne>
                  <HtmlTooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={selectedToolTip === 'one'}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                      <>
                        <Box
                          sx={{
                            backgroundColor: '#fff',
                            position: 'absolute',
                            right: -10,
                            top: 0,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onClick={() => handleTooltipClose()}
                        >
                          <CancelIcon
                            sx={{
                              color: 'grey',
                              fontSize: '32px',
                            }}
                          ></CancelIcon>
                        </Box>
                        <Typography>
                          Ut consequat est vitae efficitur gravida. Cras quis
                          diam egestas, ultricies mi a, bibendum mauris. Fusce
                          vehicula tellus a purus fermentum, vitae ultricies
                          diam venenatis. In sed luctus sem, sed placerat orci.
                          Etiam posuere lobortis malesuada. In eu accumsan elit.
                          Donec velit quam, condimentum eu felis in, vulputate.
                        </Typography>
                      </>
                    }
                  ></HtmlTooltip>
                  <AddCircleIcon
                    className={`${
                      selectedToolTip === 'one' ? 'rotedIcon' : ''
                    }`}
                    sx={{ color: '#FAD02C', fontSize: '44px' }}
                    onClick={() => {
                      setSelectedToolTip(
                        selectedToolTip === 'one' ? '' : 'one'
                      );
                    }}
                  />
                </PlusButtonOne>

                <PlusButtonTwo>
                  <HtmlTooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={selectedToolTip === 'two'}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                      <>
                        <Box
                          sx={{
                            backgroundColor: '#fff',
                            position: 'absolute',
                            right: -10,
                            top: 0,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onClick={() => handleTooltipClose()}
                        >
                          <CancelIcon
                            sx={{
                              color: 'grey',
                              fontSize: '32px',
                            }}
                          ></CancelIcon>
                        </Box>
                        <Typography>
                          Ut consequat est vitae efficitur gravida. Cras quis
                          diam egestas, ultricies mi a, bibendum mauris. Fusce
                          vehicula tellus a purus fermentum, vitae ultricies
                          diam venenatis. In sed luctus sem, sed placerat orci.
                          Etiam posuere lobortis malesuada. In eu accumsan elit.
                          Donec velit quam, condimentum eu felis in, vulputate.
                        </Typography>
                      </>
                    }
                  ></HtmlTooltip>
                  <AddCircleIcon
                    className={`${
                      selectedToolTip === 'two' ? 'rotedIcon' : ''
                    }`}
                    onClick={() => {
                      setSelectedToolTip(
                        selectedToolTip === 'two' ? '' : 'two'
                      );
                    }}
                    sx={{ color: '#FAD02C', fontSize: '44px' }}
                  />
                </PlusButtonTwo>

                <PlusButtonThree>
                  <HtmlTooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={selectedToolTip === 'three'}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                      <>
                        <Box
                          sx={{
                            backgroundColor: '#fff',
                            position: 'absolute',
                            right: -10,
                            top: 0,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onClick={() => handleTooltipClose()}
                        >
                          <CancelIcon
                            sx={{
                              color: 'grey',
                              fontSize: '32px',
                            }}
                          ></CancelIcon>
                        </Box>
                        <Typography>
                          Ut consequat est vitae efficitur gravida. Cras quis
                          diam egestas, ultricies mi a, bibendum mauris. Fusce
                          vehicula tellus a purus fermentum, vitae ultricies
                          diam venenatis. In sed luctus sem, sed placerat orci.
                          Etiam posuere lobortis malesuada. In eu accumsan elit.
                          Donec velit quam, condimentum eu felis in, vulputate.
                        </Typography>
                      </>
                    }
                  ></HtmlTooltip>
                  <AddCircleIcon
                    className={`${
                      selectedToolTip === 'three' ? 'rotedIcon' : ''
                    }`}
                    onClick={() => {
                      setSelectedToolTip(
                        selectedToolTip === 'three' ? '' : 'three'
                      );
                    }}
                    sx={{ color: '#FAD02C', fontSize: '44px' }}
                  />
                </PlusButtonThree>

                <PlusButtonFour>
                  <HtmlTooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={selectedToolTip === 'four'}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                      <>
                        <Box
                          sx={{
                            backgroundColor: '#fff',
                            position: 'absolute',
                            right: -10,
                            top: 0,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onClick={() => handleTooltipClose()}
                        >
                          <CancelIcon
                            sx={{
                              color: 'grey',
                              fontSize: '32px',
                            }}
                          ></CancelIcon>
                        </Box>
                        <Typography>
                          Ut consequat est vitae efficitur gravida. Cras quis
                          diam egestas, ultricies mi a, bibendum mauris. Fusce
                          vehicula tellus a purus fermentum, vitae ultricies
                          diam venenatis. In sed luctus sem, sed placerat orci.
                          Etiam posuere lobortis malesuada. In eu accumsan elit.
                          Donec velit quam, condimentum eu felis in, vulputate.
                        </Typography>
                      </>
                    }
                  ></HtmlTooltip>
                  <AddCircleIcon
                    className={`${
                      selectedToolTip === 'four' ? 'rotedIcon' : ''
                    }`}
                    onClick={() => {
                      setSelectedToolTip(
                        selectedToolTip === 'four' ? '' : 'four'
                      );
                    }}
                    sx={{ color: '#FAD02C', fontSize: '44px' }}
                  />
                </PlusButtonFour>
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

export default PageThree;
