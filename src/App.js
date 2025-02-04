import { HashRouter as Router , Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage';
import './Styling/global.css'
import Homepage from './Components/Homepage'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {<WelcomePage/>}></Route>
          <Route path = '/homepage' element = {<Homepage/>}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
