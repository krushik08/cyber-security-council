import { Box, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import CancelIcon from '@mui/icons-material/Cancel';

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
export default function TooltipComponent({
  key,
  setSelectedToolTip,
  selectedToolTip,
}) {
  const handleTooltipClose = () => {
    setSelectedToolTip();
  };
  return (
    <HtmlTooltip
      PopperProps={{
        disablePortal: true,
      }}
      onClose={handleTooltipClose}
      open={selectedToolTip === key}
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
            Ut consequat est vitae efficitur gravida. Cras quis diam egestas,
            ultricies mi a, bibendum mauris. Fusce vehicula tellus a purus
            fermentum, vitae ultricies diam venenatis. In sed luctus sem, sed
            placerat orci. Etiam posuere lobortis malesuada. In eu accumsan
            elit. Donec velit quam, condimentum eu felis in, vulputate.
          </Typography>
        </>
      }
    ></HtmlTooltip>
  );
}
