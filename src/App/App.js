import {React} from '../imports/reactimports';

//Import Pages
import {AboutUs, ContactUs, OurWork, MovieDetail, ErrorPage} from '../imports/pageimports';

//Router
import {Route, Routes, useLocation} from 'react-router-dom'
//Global Style
import GlobalStyle from '../components/GlobalStyle/globalStyle';
import Nav from '../components/Nav/Nav';
import { About } from '../styles';

//Import Animation
import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation();
  
  return (
    <div className="App"> 

      <GlobalStyle/>
      <Nav/>

      <AnimatePresence exitBeforeEnter>

      <Routes location={location} key={location.pathname}>
        
        <Route path='/' exact element={<AboutUs/>}>
          {/* Render Out AboutUs */}
        </Route>

        <Route path='/work' exact element={<OurWork/>}>
          {/* Render Out OurWork */}
        </Route>

        <Route path='/work/:id' element={<MovieDetail/>}>
            {/* Render Out MovieDetail */}
        </Route>

        <Route path='/contact' element={<ContactUs/>}>
          {/* Render Out ContactUs */}
        </Route>

        {/* Redirect always needs to be the last Route */}
        <Route path='*' element={<AboutUs/>}>
          {/* Render Out ErrorPage or redirect to Homepage */}
        </Route>

      </Routes>

      </AnimatePresence>

    </div>
  );
}

export default App;
