import './App.css';
import NavContactee from './components/NavContactee';
import Add from './components/Add';
import Home from './components/Home';
import ListContactee from './components/ListContactee';
import Update  from './components/Update';
import {Routes,Route} from 'react-router-dom';





function App() {
  return (
    <div className="App">
     <NavContactee/>
     <Routes>
       <Route path='/'  element ={<Home/>}/>
       <Route path='/contactees'  element ={<ListContactee/>}/>
       <Route path='/addContactees'  element ={<Add/>}/>
       <Route path='/update/:id'  element ={<Update/>}/>
     </Routes>
    </div>
  );
}

export default App;
