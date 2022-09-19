import React from 'react'
import {Box, TextField, MenuItem} from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
 

  return (
   <Box width='250px' marginTop={5} >
  <TextField label='select country' select fullWidth>
  <MenuItem value='IN'>India</MenuItem>
  <MenuItem value='US'>USA</MenuItem>
  <MenuItem value='AU'>Australia</MenuItem>
  <MenuItem value='NE'>Neyowrk</MenuItem>
   </TextField>
   </Box>
  )
}
