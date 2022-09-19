import {Button,Dialog,DialogTitle,DialogContent,DialogActions, DialogContentText,Box } from '@mui/material'
import { useState } from 'react'

export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Box mt={2}>
        <Button variant='contained' onClick={()=>setOpen(true)}>Open Dialog</Button>
<Dialog open={open} onClose={()=>setOpen(false)}
aria-labelledby='dialog-title' aria-describedby='dialog-description'>
    <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
    <DialogContent>
        <DialogContentText id='dialog-description'>Are sure you want to submitthe test?you will not be able to edit after submitting</DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={()=>setOpen(false)}>Cancel</Button>
        <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
    </DialogActions>
</Dialog></Box>

    </>
  )
}
