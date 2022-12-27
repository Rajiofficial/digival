import './App.css';
import Home from './component/Home';
import  {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signin from './component/signin';
import Edit from './component/edit';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/' element={<Signin/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
