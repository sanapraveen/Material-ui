import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoadingbutton = () => {
  return (
    <Stack spacing={2} direction='row' mt={2}>
   <LoadingButton variant='outlined'>Submit</LoadingButton>
   <LoadingButton loading variant='outlined' >Submit</LoadingButton>
   <LoadingButton  variant='outlined' loadingIndicator='loading..'>fetch data</LoadingButton>
   <LoadingButton loading variant='outlined' loadingIndicator='loading..'>Fetch Data</LoadingButton>
   <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>Save</LoadingButton>
   <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>Save</LoadingButton>
    </Stack>
  )
}
