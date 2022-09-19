import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import {AccessTime} from "@mui/icons-material"
import Rating from '@mui/material/Rating';




export const TourCard = () => {
  return (
    <Grid item xs={3}>
    <Paper elevation={3}>
    <img src="https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className='img'/>
   
    <Box paddingX={2}>
    <Typography variant='subtitle1' component='h2'> The standard Lorem Ipsum </Typography>
    <Box sx={{
display:'flex',
alignItems:'center'
    }}>
    <AccessTime sx={{width:12.5}}></AccessTime>
<Typography variant='body2' compomnent='p' marginLeft={1}>5 Hours</Typography>
    </Box>
    <Box sx={{
display:'flex',
alignItems:'center'
    }} marginTop={3}>
<Rating name="read-only" value={4.5} readOnly precision={0.5} size="small"/>
<Typography variant='body2' compomnent='p' marginLeft={1}>4.5</Typography>
<Typography variant='body2' compomnent='p' marginLeft={1} className='sm-text'> (650 reviews) </Typography>
    </Box>
<Box>
<Typography variant='h6' compomnent='h3' margin={1}> From ₹1200/- </Typography>
</Box>

    </Box>
    </Paper>
    </Grid>
  )
}
