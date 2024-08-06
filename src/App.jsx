import { useState } from 'react'
import SkipBox from './components/SkipBox'
import './App.css'
import Landingpage from './pages/Landingpage'
function App() {
const [skip,setskip]=useState(false);

  return (
    <>
     {skip &&<SkipBox skip={skip} setskip={setskip}/>}
     <Landingpage skip={skip} setskip={setskip}/>
    </>
  )
}

export default App
