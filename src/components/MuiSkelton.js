import {Skeleton, Stack} from '@mui/material'

export const MuiSkelton = () => {
  return (
    <Stack spacing={1} width='250px' mt={2}>
    <Skeleton variant='text'/>
    
    <Skeleton variant='circular' width={40} height={40} animation={false}/>
    <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
    </Stack>
  )
}
