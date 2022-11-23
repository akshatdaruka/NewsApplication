// import './App.css';
// import Navbar from './components/Navbar'
// import Textarea from './components/Textarea';
// import React, {useState} from 'react';

// function App() {
//   const [mode, setMode] = useState({color:'black', bgColor:'white'});
//     const [modeText, setModeText] = useState('Enable Dark Mode');

//     const modeChangeClick = ()=>{
//         if(mode.color==='white'){
//             setMode({color:'black', bgColor:'white'});
//             setModeText('Enable Dark Mode')
//         }else{
//             setMode({color:'white', bgColor:'black'});
//             setModeText('Disable Dark Mode')
//         }
//     }
//   return (
//     <>
//     <Navbar titleText="Activity Log Analyzer" homeText="Home" aboutText="About Us" propmode= {mode} propmodeText = {modeText} propmodeChangeClick ={modeChangeClick} propsetMode={setMode} propsetModeText= {setModeText} />
//     <Textarea defaultText="Text Utils" propmode= {mode} propmodeText = {modeText} propsetMode={setMode} propsetModeText= {setModeText}/>
//     </>
//   );
// }

// export default App;

import React, { Component } from 'react'
import News from './components/News';
import NewsNavBar from './components/NewsNavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NewsNavBar />
          <Routes>
          <Route exact path="/" element={<News key="general" pageSize="6" category="general" apiKey="da395a1acff04cb18c9460fcf6fb89b2" country="in" />}></Route>
          <Route exact path="/business" element={<News key="business" pageSize="6" category="business" apiKey="da395a1acff04cb18c9460fcf6fb89b2" country="in" />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize="6" category="entertainment" apiKey="da395a1acff04cb18c9460fcf6fb89b2" country="in" />}></Route>
          <Route exact path="/general" element={<News key="general" pageSize="6" category="general" apiKey="da395a1acff04cb18c9460fcf6fb89b2" country="in" />}></Route>
          <Route exact path="/health" element={<News key="health" pageSize="6" category="health" apiKey="da395a1acff04cb18c9460fcf6fb89b2" country="in" />}></Route>
          <Route exact path="/science" element={<News key="science" pageSize="6" category="science" apiKey="da395a1acff04cb18c9460fcf6fb89b2" country="in" />}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize="6" category="sports" apiKey="da395a1acff04cb18c9460fcf6fb89b2" country="in" />}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize="6" category="technology" apiKey="da395a1acff04cb18c9460fcf6fb89b2" country="in" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App


