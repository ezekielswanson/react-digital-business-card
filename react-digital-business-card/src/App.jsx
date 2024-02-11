import { useState } from 'react'
import './App.css'
import AboutHtml from './components/AboutHtml.jsx';
import InterestHtml from './components/InterestHtml.jsx';
import FooterHtml from './components/FooterHtml.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="main-container">
        <AboutHtml />
        <InterestHtml />
        <FooterHtml />
      </div>
  )
}

export default App;