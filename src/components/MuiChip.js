import {Stack, Chip,Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

export const MuiChip = () => {
  return (
    <Stack direction='row' spacing={2} mt={2}>
        <Chip label='Chip' color='primary'></Chip>
        <Chip label='Chip' color='primary' icon={<FaceIcon/>}/>
        <Chip label='Chip outlined' color='secondary' variant='outlined' 
            avatar={<Avatar>V</Avatar>}    
        />
        <Chip label='Delete' color='error' onClick={()=>alert('are you sure want to delete')} onDelete={()=>alert('are you sure want to delete')}></Chip>
    </Stack>
  )
}
