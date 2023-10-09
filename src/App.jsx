import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import AllCountryCards from './components/CountryCards/AllCountryCards'
import CountryDetail from './components/CountryDetails/CountryDetails'

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
