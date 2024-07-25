import { BrowserRouter as Router, Routes, Route, useFetcher } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer'
import LaunchList from './components/LauchList'
import './App.css';
import Hero from './components/Hero';
import { useEffect, useState } from 'react';

function App() {

  const [AllLaunches, setAllLaunches] = useState([])
  const [upcomingLauches, setUpcomingLaunches] = useState([])
  const [pastLaunches, setPastLaunches] = useState([])

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches').then(response => response.json()).then(data => { setAllLaunches(data) })

    fetch('https://api.spacexdata.com/v3/launches/past').then(response => response.json()).then(data => setPastLaunches(data))

    fetch('https://api.spacexdata.com/v3/launches/upcoming').then(response => response.json()).then(data => { setUpcomingLaunches(data) })

  }, [])
  console.log("Upcomimg launches", upcomingLauches)
  console.log("past launches", pastLaunches)

  return (
    <>

      <Header />
      <Hero />
      <LaunchList upcomingLauches={upcomingLauches} pastLaunches={pastLaunches} />
      {/* <Route to="/" element={<div>Hello</div>} /> */}
      <Footer />

    </>
  );
}

export default App;
