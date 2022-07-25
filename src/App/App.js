import {React} from '../imports/reactimports';

//Import Pages
import {AboutUs} from '../imports/pageimports';

//Global Style
import GlobalStyle from '../components/GlobalStyle/globalStyle';

function App() {
  return (
    <div className="App"> 

      <GlobalStyle/>
      <AboutUs/>

    </div>
  );
}

export default App;
