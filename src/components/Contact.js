// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {Divider, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  const {photo, name, phone, email} = data
  return (
    <>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <img
          src={photo}
          alt='gambar'
          width={80}
          height={80}
          sx={{ borderRadius: '50%', marginRight: '40px' }}
        />
        <div sx={{ textAlign: 'left' }}>
          <Typography variant='body1' component='div'>
            {name}
          </Typography>
          <Typography
            variant='subtitle1'
            component='div'
            color='text.secondary'
          >
            {phone}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            {email}
          </Typography>
        </div>
        <Divider sx={{ color: 'red' }} />
      </div>
      <Divider sx={{ marginBottom: '20px' }} />
    </>
  );
};

export default Contact;