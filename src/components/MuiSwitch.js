import { Box, FormControlLabel,Switch } from "@mui/material"

export const MuiSwitch = () => {
  return (
    <Box>
        <FormControlLabel label='On' control={<Switch size='medium' color='warning' />}   />
    </Box>
  )
}
