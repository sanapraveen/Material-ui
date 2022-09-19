import {Stack, CircularProgress, LinearProgress} from '@mui/material'

export const MuiProgess = () => {
  return (
    <>
   <Stack mt={4} spacing={2} direction='row'>
<CircularProgress/>
<CircularProgress color='error'/>
<CircularProgress variant='determinate' value={70}/></Stack>
<Stack spacing={2} mt={2}>
<LinearProgress color="secondary" />
<LinearProgress color="success" />
<LinearProgress color="inherit" variant='determinate' value={70}/>
   </Stack>
  </>
  )
}
