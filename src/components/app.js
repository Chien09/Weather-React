import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import WeatherReport from './WeatherReport'
import About from './About'
import NoPage from './NoPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //allowing redirects to page components using React so it doesn't need to request to server

function App(){
    return(
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/weatherreport" element={<WeatherReport/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;
