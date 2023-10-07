import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllCountryCards from './components/AllCountryCards'
import CountryDetail from './components/CountryDetail'

const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<AllCountryCards />} />
          <Route path='/countries/:countryName' element={<CountryDetail />} />
        </Routes>
    </div>
  )
}

export default App
