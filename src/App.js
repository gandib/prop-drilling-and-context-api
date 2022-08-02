import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import GrandPa from './components/Grandpa/Grandpa';
import Father from './components/Father/Father';
import Uncle from './components/Uncle/Uncle';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<GrandPa></GrandPa>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}>
          <Route path=':detail' element={<Uncle></Uncle>}></Route>
        </Route>
        <Route path='/father' element={<Father></Father>}></Route>
        <Route path='/uncle' element={<Uncle></Uncle>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
