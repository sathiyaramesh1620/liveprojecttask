import React from 'react'
 import Tables from './Components/Table'
  import Photo from './Components/Photo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
 import Album from './Components/Album'
 import Usersdata from './Components/Usersdata'
 import CityWeather from './Components/CityWeather'
import SearchImage from './Components/SearchImage'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/table" element={<Tables/>}/>
      <Route path="/photo" element={<Photo/>}/>
      <Route path="/album" element={<Album/>}/>
      <Route path="/crud" element={<Usersdata/>}/>
      <Route path="/weather" element={<CityWeather/>}/>
      <Route path="/searchimage" element={<SearchImage/>}/>

      

    </Routes>
    </BrowserRouter>
  )
}

export default App