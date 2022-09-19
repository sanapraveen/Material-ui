import React from 'react'
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@mui/material'

export const MuiRadioButton = () => {
  return (
    <Box>
        <FormControl >
            <FormLabel id='job-experience-group-label' marginTop={5}>
                Years of Experience
            </FormLabel>
            <RadioGroup name='job-experience-group' aria-aria-labelledby='job-experience-group-label'>
<FormControlLabel control={<Radio color='secondary' size="small" />} label='0-2' value='0-2'/>
<FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
<FormControlLabel control={<Radio color='success' size="medium" />} label='6-10' value='6-10'/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}
