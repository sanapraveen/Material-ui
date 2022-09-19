import React from 'react'
import {Stack,Button,IconButton,ButtonGroup, Typography,ToggleButton, ToggleButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


export const MuiButton = () => {
   
  return (
    
  <Stack spacing={4}>
  <Typography marginTop={5} variant='h4'>Button Variants</Typography>
    <Stack spacing={2} direction='row' >
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
    <Button variant='contained' color='primary'>Primary</Button>
    <Button variant='contained' color='secondary'>Secondary</Button>
    <Button variant='contained' color='error'>Error</Button>
    <Button variant='contained' color='warning'>Warning</Button>
    <Button variant='contained' color='info'>Info</Button>
    <Button variant='contained' color='success'>Success</Button>
    </Stack>
    <Stack dispalay='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>} color='info' disableRipple onClick={()=>alert('text send')}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} color='info' disableElevation>Send</Button>
        <IconButton aria-label='send' color='success' size='small'>
            <SendIcon/>
        </IconButton>
    </Stack>
    
    <Stack direction='row'>
    <ButtonGroup variant='outlined' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
        <Button onClick={()=>alert('left clicked')}>Left</Button>
        <Button >Center</Button>
        <Button >Right</Button></ButtonGroup>
    </Stack>
    <Stack direction='row'>
        <ToggleButtonGroup aria-label='text formatting' size='small' color='error' orientation="vertical">
<ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
<ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
<ToggleButton value='undeline'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    </Stack>
  )
}
