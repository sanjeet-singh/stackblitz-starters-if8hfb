import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Header from './header';
import EventList from './event-list';
import EventCreation from './event-creation';

function App() {
  return (
    <Router>
      <div className="App">
       <Header></Header>
       <div className='container'>
        <Routes>
          <Route exact path='/' element={< EventList />}></Route>
          <Route exact path='/event-list' element={< EventList />}></Route>
          <Route exact path='/event-creation' element={< EventCreation />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
