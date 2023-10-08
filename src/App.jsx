import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import AllCountryCards from './components/AllCountryCards'
import CountryDetail from './components/CountryDetail'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <AllCountryCards/> } />
          <Route path='/:countryName' element={ <CountryDetail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
