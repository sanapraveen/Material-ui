import {Box, Divider, Grid, Stack, Paper} from '@mui/material'

export const MuiLayout = () => {
  return (
    <>
<Paper sx={{padding:'32px', marginTop:'30px'}} elevation={4}>
<Stack sx= {{border:'1px solid'}}
direction='row' spacing={2} divider={<Divider orientation='vertical' fle></Divider> } >
    <Box  sx={{
        backgroundColor:'warning.main',
        color:'white', 
        height:'100px', width:"100px", padding:'20px',
       marginTop:'20px',
        '&:hover':{
            backgroundColor:'warning.light',
        }
    }} >
    MuiLayout</Box>
   <Box display='flex' height='100px' width='100px' bgcolor='error.light' p={2} mt={2}></Box></Stack>

   <Grid container my={4} spacing={2}>
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box bgcolor='primary.light' p={2}>Item 1</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
     <Box bgcolor='primary.light' p={2}>Item 2</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box bgcolor='primary.light' p={2}>Item 3</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box bgcolor='primary.light' p={2}>Item 4</Box>
    </Grid>
   </Grid></Paper>
    </>
  )
}
