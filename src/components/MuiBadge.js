import {Stack, Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row' mt={2}>
<Badge badgeContent={5} color='primary'> <MailIcon/> </Badge>
<Badge variant='dot' color='primary'> <MailIcon/> </Badge>
<Badge badgeContent={0} color='primary' showZero> <MailIcon/> </Badge>
    </Stack>
  )
}
