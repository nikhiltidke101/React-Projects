import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import {useSelector} from 'react-redux';
import { selectSignedIn } from './features/userSlice';
import Blog from './components/Blog';


function App() {
  const isSignedIn = useSelector(selectSignedIn)
  return (
    <div className="App">
      <Navbar/>
      
      {isSignedIn?<Blog/>:<HomePage/>}
    </div>
  );
}

export default App;
