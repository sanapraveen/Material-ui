import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia,Grid} from '@mui/material'

export const CardMui = () => {
  return (
    <Grid container spacing={12} marginTop={2}>
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box width='300px'>
    <Card>
    {/* <CardMedia component='img' height='140px' image='https://images.unsplash.com/photo-1663104192417-6804188a9a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/> */}
        <CardContent>
            <Typography variant='h5' component='div' gutterBottom>Lorem Ipsum </Typography>
            <Typography variant='body2' component='text.secondary'> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </Box></Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box width='300px'>
    <Card>
    <CardMedia component='img' height='140px' image='https://images.unsplash.com/photo-1663104192417-6804188a9a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
        <CardContent>
            <Typography variant='h5' component='div' gutterBottom>Lorem Ipsum </Typography>
            <Typography variant='body2' component='text.secondary'> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </Box></Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box width='300px'>
    <Card>
    <CardMedia component='img' height='140px' image='https://images.unsplash.com/photo-1663104192417-6804188a9a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
        <CardContent>
            <Typography variant='h5' component='div' gutterBottom>Lorem Ipsum </Typography>
            <Typography variant='body2' component='text.secondary'> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </Box></Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box width='300px'>
    <Card>
    <CardMedia component='img' height='140px' image='https://images.unsplash.com/photo-1663104192417-6804188a9a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
        <CardContent>
            <Typography variant='h5' component='div' gutterBottom>Lorem Ipsum </Typography>
            <Typography variant='body2' component='text.secondary'> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
    </Card>
    </Box></Grid>
    </Grid>
  )
}
