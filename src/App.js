import './App.css';
import { TourCard } from './components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Navbar from './components/Navbar';
import MuiTypography from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { TextFieldMui } from './components/TextFieldMui';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckBox } from './components/MuiCheckBox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRating } from './components/MuiRating';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiLayout } from './components/MuiLayout';
import { CardMui } from './components/CardMui';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiImageList } from './components/MuiImageList';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiLink } from './components/MuiLink';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiSpeeddial } from './components/MuiSpeeddial';
import { MuiBottomnavigation } from './components/MuiBottomnavigation';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiList } from './components/MuiList';
import { MuiChip } from './components/MuiChip';
import { MuiTable } from './components/MuiTable';
import { MuiAlert } from './components/MuiAlert';
import { MuiDialog } from './components/MuiDialog';
import { MuiProgess } from './components/MuiProgess';
import { MuiSkelton } from './components/MuiSkelton';
import { MuiLoadingbutton } from './components/MuiLoadingbutton';
import { Muitabs } from './components/Muitabs';
import { MuiTimeline } from './components/MuiTimeline';



function App() {
  return (
    <div className="App">
    <MuiNavbar/>
    {/* <Navbar/> */}
    <Container sx={{marginY:5}}>
  {/* <Grid container spacing={5}>
    <TourCard/>
    <TourCard/>
    <TourCard/>
    <TourCard/>
  </Grid> */}
  <MuiTypography/>
  <MuiButton/>
<TextFieldMui/>
<MuiSelect/>
<MuiRadioButton/>
<MuiCheckBox/>
<MuiSwitch/>
<MuiRating/>
<MuiAutocomplete/>
<MuiLayout/>
<CardMui/>
<MuiAccordion/>
<MuiImageList/>
<MuiLink/>
<MuiBreadcrumbs/>
<MuiDrawer/>
<MuiSpeeddial/>
<MuiBottomnavigation/>
<MuiAvatar/>
<MuiBadge/>
<MuiList/>
<MuiChip/>
<MuiTable/>
<MuiAlert/>
<MuiDialog/>
<MuiProgess/>
<MuiSkelton/>
<MuiLoadingbutton/>
<Muitabs/>
<MuiTimeline/>
  </Container>
    </div>
  );
}

export default App;
