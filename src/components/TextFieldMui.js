import React from 'react'
import {Stack, TextField, InputAdornment} from '@mui/material'
import { useState } from 'react'

export const TextFieldMui = () => {
const [value,setValue] =useState('')

  return (
   <Stack spacing={4} marginTop={5}>
<Stack direction='row' spacing={2}>
  <TextField label='Name' variant='outlined'/>
  <TextField label='Name' variant='filled'/>
  <TextField label='Name' variant='standard'/>
</Stack>
<Stack direction='row' spacing={2}>
  <TextField label='Small secondary' size='small' color='secondary'/>
  <TextField label='Form input' required  size='small'/>
  <TextField label='password' type='password' required size='small' value={value} onChange={e=>setValue(e.target.value)} 
  error ={!value} helperText={!value?'Required':'Do not share your password with anyone'}/>
  <TextField label='Read only' InputProps={{readOnly: true}} size='small'/>
</Stack>
<Stack direction='row' spacing={2}>
<TextField label='Amount'  size='small' InputProps={{
  startAdornment:<InputAdornment position='start'>$</InputAdornment>}}/>
  <TextField label='Wight'  size='small' InputProps={{
  endAdornment:<InputAdornment position='end'>Kg</InputAdornment>}}/>
</Stack>
   </Stack>
  )
}
