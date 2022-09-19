import React from 'react'
import {Typography} from '@mui/material'

export default function MuiTypography() {
  return (
    <div>
        <Typography variant='h3' textAlign='center' sx={{color: '#ff595e',textDecoration: 'underline' }}>Material UI</Typography>
        <Typography variant='h1' marginTop={5}>H1 heading</Typography>
        <Typography variant='h2'>H2 heading</Typography>
        <Typography variant='h3'>H3 heading</Typography>
        <Typography variant='h4'>H4 heading</Typography>
        <Typography variant='h5'>H5 heading</Typography>
        <Typography variant='h6'>H6 heading</Typography>
        <Typography variant='subtitle1'>Sub title 1</Typography>
        <Typography variant='subtitle2'>Sub title 2</Typography>
        <Typography variant='body1' marginTop={2}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
        <Typography variant='body2' marginTop={2}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
        
    </div>
  )
}
