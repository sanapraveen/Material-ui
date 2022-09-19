import {Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider} from '@mui/material'
import DownloadDoneRoundedIcon from '@mui/icons-material/DownloadDoneRounded';
export const MuiList = () => {
  return (
    <Box sx={{width:'300px', bgcolor:'#f5ebe0'}} mt={2}>
<List>
    <ListItem disablePadding>
    <ListItemButton>
    <ListItemIcon>
        <DownloadDoneRoundedIcon sx={{color:'#f72585'}}/>
    </ListItemIcon>
        <ListItemText primary="List Item 1" secondary='secondar text'/>
        </ListItemButton>
    </ListItem>
    <Divider/>
    <ListItem disablePadding>
    <ListItemButton>
    <ListItemIcon>
    <ListItemAvatar>
    <Avatar  sx={{bgcolor:'#ffffff'}}>
        <DownloadDoneRoundedIcon sx={{color:'#f72585'}}/></Avatar></ListItemAvatar>
    </ListItemIcon>
        <ListItemText primary="List Item 1"/>
        </ListItemButton>
    </ListItem><Divider/>
    <ListItem disablePadding>
    <ListItemButton>
        <ListItemText primary="List Item 1"/>
        </ListItemButton>
    </ListItem>
</List>
    </Box>
  )
}
