import {Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {
  return (
    <Stack spacing={2}>
<Rating  precision={0.5}
size='large'

    icon={<FavoriteIcon color='error'/> }
    emptyIcon={<FavoriteBorderIcon/>}
/>
    </Stack>

  )
}
