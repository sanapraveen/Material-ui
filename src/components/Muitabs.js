import {Box, Tab} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

export const Muitabs = () => {
  return (
    <Box mt={4}>
   <TabContext>
    <Box sx={{borderBottom:1, borderColor:'divider'}}>
     <TabList aria-label='Tabls-example'>
        <Tab label='Tab One' value='1'/>
        <Tab label='Tab Two' value='2'/>
        <Tab label='Tab Three' value='3'/>
     </TabList>
    </Box>
    <TabPanel value='1'>Panel 1</TabPanel>
    <TabPanel value='2'>Panel 2</TabPanel>
    <TabPanel value='3'>Panel 3</TabPanel>
   </TabContext>
    </Box>
  )
}
