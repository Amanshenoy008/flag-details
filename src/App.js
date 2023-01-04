import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './pages/home'
import Flagd from './pages/flagdetails'
import Error from './pages/error'
  
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/flagdetails/:id' element={<Flagd />} />
      <Route path='/*' element={<Error />} />
    </Routes>

      </div>
      </BrowserRouter>
  );
}

export default App;
