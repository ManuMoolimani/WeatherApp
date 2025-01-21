import React from 'react';
import { Button } from '@mui/material';

const ReusableButton = ({ label, onClick, ...props }) => {
  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: '#ADEFD1FF',
        color: '#00203FFF',
        padding: '15px',
        width: '200px',
        fontSize:'16px',
        borderRadius:'15px'
      }}
      onClick={onClick}
      {...props} 
    >
      {label}
    </Button>
  );
};

export default ReusableButton;
