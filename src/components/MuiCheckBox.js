import {Box,Checkbox, FormControlLabel} from '@mui/material'

export const MuiCheckBox = () => {
  return (
    <Box>
    <Box >
        <FormControlLabel label='I accept terms and conditions' control={<Checkbox/>} />
        <FormControlLabel label='' control={<Checkbox/>} />
    </Box>
    </Box>
  )
}
