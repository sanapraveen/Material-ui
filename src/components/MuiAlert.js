import {Alert, Stack, AlertTitle, Button} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const MuiAlert = () => {
  return (
    <>
    <Stack mt={2} spacing={2} direction='row'>
    <Alert severity='error'>This is an error alert</Alert>
    <Alert severity='warning'>This is an warning alert</Alert>
    <Alert severity='info'>This is an info alert</Alert>
    <Alert severity='success'>This is an success alert</Alert>
    </Stack>
    <Stack mt={2} spacing={2} direction='row'>
    <Alert variant='outlined' severity='error'>This is an error alert</Alert>
    <Alert variant='outlined' severity='warning'>This is an warning alert</Alert>
    <Alert variant='outlined' severity='info'>This is an info alert</Alert>
    <Alert variant='outlined' severity='success'>This is an success alert</Alert>
    </Stack>
    <Stack mt={2} spacing={2} direction='row'>
    <Alert variant='filled' severity='error' onClose={()=> alert('Closed')}>
    <AlertTitle>Error</AlertTitle>
    This is an error alert</Alert>
    <Alert variant='filled' severity='warning'>
    <AlertTitle>Warning</AlertTitle>
    This is an warning alert</Alert>
    <Alert variant='filled' severity='info' action={<Button size='small' color='inherit'>Undo</Button>}>
    <AlertTitle>Info</AlertTitle>
    This is an info alert</Alert>
    <Alert variant='filled' severity='success' icon={<CheckIcon fontSize='inherit'/>}>
    <AlertTitle>Sucess</AlertTitle>
    This is an success alert</Alert>
    </Stack></>
  )
}
