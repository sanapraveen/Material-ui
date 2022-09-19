import {Stack, Autocomplete,TextField} from '@mui/material'

const skills =['Html', 'Css', 'Javascript', 'React', 'Nextjs']

export const MuiAutocomplete = () => {
  return (
    <Stack spacing={2} width='250px' marginTop={5}>
<Autocomplete  options={skills} 
    renderInput ={(params)=> <TextField {...params} label='skills'/>}
/>
    </Stack>

  )
}
