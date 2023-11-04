import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import AllCountryCards from './components/CountryCards/AllCountryCards'
import CountryDetail from './components/CountryDetails/CountryDetails'
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid className='bg-colour'>
      <Container>
        <BrowserRouter>
              <Routes>
                <Route exact path="/" element={ <AllCountryCards/> } />
                <Route path='/:countryName' element={ <CountryDetail />} />
              </Routes>
        </BrowserRouter>
      </Container>
    </Container>
  )
}

export default App
