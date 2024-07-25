import Header from './components/Header';
import Footer from './components/Footer';
import LaunchList from './components/LauchList';
import './App.css';
import Hero from './components/Hero';
import { useEffect, useState } from 'react';

function App() {
  const [allLaunches, setAllLaunches] = useState([]);
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [pastLaunches, setPastLaunches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches')
      .then(response => response.json())
      .then(data => { setAllLaunches(data) });

    fetch('https://api.spacexdata.com/v3/launches/past')
      .then(response => response.json())
      .then(data => setPastLaunches(data));

    fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then(response => response.json())
      .then(data => { setUpcomingLaunches(data) });
  }, []);

  const filteredUpcomingLaunches = upcomingLaunches.filter(launch =>
    launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPastLaunches = pastLaunches.filter(launch =>
    launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header 
        allLaunches={allLaunches} 
        upcomingLaunches={upcomingLaunches} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <Hero />
      <LaunchList 
        upcomingLaunches={filteredUpcomingLaunches} 
        pastLaunches={filteredPastLaunches} 
      />
      <Footer />
    </>
  );
}

export default App;
