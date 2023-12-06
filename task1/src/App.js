import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ButtonPage from './Components/ButtonPage'
import TablePage from './Components/TablePage'
import Navbar1 from './Navbar/Navbar'
const App = () => {

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);
  const [fifth, setFifth] = useState(true);

  return (
    <div>

      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route
            path="/"
            element={
              <ButtonPage
                first={first}
                second={second}
                third={third}
                fourth={fourth}
                fifth={fifth}
                setFirst={setFirst}
                setSecond={setSecond}
                setThird={setThird}
                setFourth={setFourth}
                setFifth={setFifth}
              />
            }
          />
          <Route
            path="table"
            element={
              <TablePage
                first={first}
                second={second}
                third={third}
                fourth={fourth}
                fifth={fifth}
              />
            }
          />
        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default App