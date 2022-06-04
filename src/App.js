import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Drivers from './components/Drivers'
import Teams from './components/teams';
import Races from './components/Races';
import NavBar from './components/NavBar';
import RaceDetails from './components/RaceDetails';
import TeamDetails from './components/TeamDetails';
import DriverDetails from './components/DriverDetails';
import Mng404 from './components/Mng404';
import Header from './components/Header';
import Footer from './components/footer.js';
import Home from './components/Home';
import { ThemeContext } from "./context/ThemeContext";

const App = () => {

    const [season, setSeason] = useState("current")
    const [currentSeason, setCurrentSeason] = useState("current")
    const [theme, setTheme] = useState({
        
            striped: true,
            borderless: true,
            hover: true,
            size: 'sm',
            variant: 'dark'
    })
    useEffect(() => {
        var url = "https://ergast.com/api/f1/current/last/seasons.json"
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setSeason(data.MRData.SeasonTable.season)
                setCurrentSeason(data.MRData.SeasonTable.season)
            })
    }, [])

    const updateSeason = (year) => {
        setSeason(year);
    }
      
    return (

        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className="bg-secondary d-md-flex flex-md-row align-items-strech container-fluid p-1 h-100">
                <NavBar />
                <div className="flex-fill ">
                    <Header
                        updateSeason={updateSeason}
                        season={season}
                        currentSeason={currentSeason}
                    />
                    <div className="main">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='drivers' element={<Drivers season={season} />} />
                            <Route path="drivers/:driver" element={<DriverDetails />} />
                            <Route path='/teams' element={<Teams season={season} />} />
                            <Route path='/races' element={<Races season={season} />} />
                            <Route path='/races/:race' element={<RaceDetails />} />
                            <Route path='/teams/:team' element={<TeamDetails />} />
                            <Route element={Mng404} />
                        </Routes>
                    </div>
                    <Footer></Footer>

                </div>
            </div>
        </ThemeContext.Provider>
    );

}


export default App;