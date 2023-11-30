import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home.jsx'
const App = () => {
  return (
    <>

    <Navbar/>
    <Routes>
<Route path="/" element={<Home/>}/>


    </Routes>
    </>
  )
}

export default App