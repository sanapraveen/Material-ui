// import {Stack, Avatar} from '@mui/material'

// export const MuiAvatar = () => {
//   return (
//     <Stack spacing={4}>
// <Stack direction='row' spacing={1}>
//   <Avatar>AB</Avatar>
//   <Avatar>CD</Avatar>
// </Stack>
//     </Stack>
// }
import {Stack, Avatar, AvatarGroup} from '@mui/material'

export const MuiAvatar = () => {
  return (
  
    <Stack spacing={4} mt={10}>
     <Stack direction='row' spacing={1}>
    <Avatar sx={{bgcolor:'success.light'}}>AB</Avatar>
       <Avatar>CD</Avatar>
       <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>    
     </Stack>
     <Stack direction='row' spacing={1}>
     <AvatarGroup>
       <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
       <Avatar sx={{bgcolor:'success.light'}}>AB</Avatar>
       <Avatar sx={{bgcolor:'success.light'}}>AB</Avatar>
       </AvatarGroup></Stack>
       <Stack direction='row' spacing={1}>
     <AvatarGroup max={3}>
       <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
       <Avatar sx={{bgcolor:'success.light'}}>AB</Avatar>
       <Avatar sx={{bgcolor:'success.light'}}>AB</Avatar>
       <Avatar src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
       </AvatarGroup></Stack>
       <Stack direction='row' spacing={1}>
    <Avatar variant='square' sx={{bgcolor:'success.light', width:50, height:50}}>AB</Avatar>
       <Avatar variant='rounded' sx={{bgcolor:'secondary.light', width:50, height:50}}>CD</Avatar>
      
     </Stack>
        </Stack>
  )
}
