import  ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails, Typography,Stack } from "@mui/material"

export const MuiAccordion = () => {
  return (
    <Stack marginTop={2}>
<Accordion>
    <AccordionSummary id='panel1' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon/>}>
<Typography>Accordian 1</Typography>
    </AccordionSummary>
    <AccordionDetails>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</AccordionDetails>
</Accordion>
<Accordion>
    <AccordionSummary id='panel2' aria-controls="panel2-content" expandIcon={<ExpandMoreIcon/>}>
<Typography>Accordian 2</Typography>
    </AccordionSummary>
    <AccordionDetails>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</AccordionDetails>
</Accordion>
    </Stack>
  )
}
