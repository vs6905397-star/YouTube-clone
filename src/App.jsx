import { Route,Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Video from './pages/Videos/Video'
import { useState } from 'react'

const App = () => {

  const [sidebar, setSidebar] = useState(true);


  return (
    <div>
      <NavBar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
