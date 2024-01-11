
import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Homepage from './pages/Homepage';
import { Chatpage } from './pages/Chatpage';
import ChatProvider from './Context/ChatProvider';
function App() {
  return (
  <BrowserRouter>
  <ChatProvider>
  <div className="App">
        <Routes>
        <Route path='/' element={<Homepage/>} exact></Route>
        <Route path='/chats' element={<Chatpage/>}></Route>
        </Routes>
        
      </div>
  </ChatProvider>
      
  
  </BrowserRouter>

  );
}

export default App;
