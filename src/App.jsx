import { useState } from 'react'
import SkipBox from './components/SkipBox'
import './App.css'
import Landingpage from './pages/Landingpage'
function App({Single = false}) {
const [skip,setskip]=useState(false);

  return (
    <>
     {skip &&<SkipBox skip={skip} setskip={setskip}/>}
     <Landingpage Single={Single} skip={skip} setskip={setskip}/>
    </>
  )
}

export default App
