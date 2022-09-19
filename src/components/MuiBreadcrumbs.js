import {Box, Breadcrumbs,Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadcrumbs = () => {
  return (
    <Box>
    <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' href="#">Home</Link>
        <Link underline='hover' href="#">Catalog</Link>
        <Link underline='hover' href="#">Accesories</Link>
        <Typography>Shoes</Typography>
    </Breadcrumbs>
    <Breadcrumbs aria-label='breadcrumb'  separator={<NavigateNextIcon fontSize='small'/>} >
        <Link underline='hover' href="#">Home</Link>
        <Link underline='hover' href="#">Catalog</Link>
        <Link underline='hover' href="#">Accesories</Link>
        <Typography>Shoes</Typography>
    </Breadcrumbs>
    </Box>
  )
}
