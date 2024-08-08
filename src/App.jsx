import { useState } from 'react'
import SkipBox from './components/SkipBox'
import './App.css'
import Landingpage from './pages/Landingpage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App({Single = true , Share=true , CF=true}) {
const [skip,setskip]=useState(false);
  return (
    <>
     {skip &&<SkipBox skip={skip} setskip={setskip}/>}
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Landingpage Single={Single}  Share={Share} CF={CF} skip={skip} setskip={setskip}/> } />
    </Routes>
  </BrowserRouter>,
    </>
  )
}

export default App
