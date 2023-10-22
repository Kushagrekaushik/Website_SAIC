import { Fragment } from 'react';
import './App.css';
import Alumni from './Pages/Alumni';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Achievements from './Pages/Achievements';
import Exordium from './Components/Gallery/Exordium/Exordium';
import Scribble from './Components/Gallery/Scribble/Scribble';
import Troubleshoot from './Components/Gallery/Troubleshoot/Troubleshoot';
import Gls from './Components/Gallery/Gls/Gls';
import Convocation from './Components/Gallery/Convocation/Convocation';
import Artemis from './Components/Gallery/Artemis/Artemis';
import Farewell from './Components/Gallery/Farewell/Farewell';
import AlumniMeet from './Pages/AlumniMeets';
import Contact from './Pages/Contact';
import Event from './Pages/Event';
import Reunion from './Pages/Reunion';
import AlmaConnect from './Pages/AlmaConnet';
import AlumniCards from './Components/Cards/AlumniCards';
import AlumniCardsMain from './Pages/AlumniCardsMain';
import Home from "./Components/whysaic";
import Sponsors from "./Components/sponors";
import Team from './Components/Team';
const routes=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route  path='/Alumni' element={<Alumni/>}/>
    <Route  path='/Achievements' element={<Achievements/>}/>
    <Route  path='/Meets' element={<AlumniMeet/>}/>
    <Route  path='/AlumniCards' element={<AlumniCards/>}/>
    <Route  path='/Exordium' element={<Exordium/>}/>
    <Route  path='/Troubleshoot' element={<Troubleshoot/>}/>
    <Route  path='/Scribble' element={<Scribble/>}/>
    <Route  path='/Farewell' element={<Farewell/>}/>
    <Route  path='/Gls' element={<Gls/>}/>
    <Route  path='/Convocation' element={<Convocation/>}/>
    <Route  path='/Artemis' element={<Artemis/>}/>
    <Route  path='/Alumni' element={<Alumni/>}/>
    <Route  path='/Reunion' element={<Reunion/>}/>
    <Route  path='/Achievements' element={<Achievements/>}/>
    <Route  path='/AlmaConnect' element={<AlmaConnect/>}/>
    <Route  path='/Contact' element={<Contact/>}/>
    <Route  path='/event' element={<Event/>}/>
    <Route  path='/Exordium' element={<Exordium/>}/>
    <Route  path='/AlumniCardsMain' element={<AlumniCardsMain/>}/>
    <Route  path='/Home' element={<Home/>}/>
    <Route  path='/Sponsor' element={<Sponsors/>}/>
    <Route  path='/Team' element={<Team/>}/>

  </Route>
))
function App() {
  return (
    <Fragment>
      <RouterProvider router={routes}/>
    </Fragment>
  );
}

export default App;
