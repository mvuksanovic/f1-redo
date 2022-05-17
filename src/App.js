import React from "react";
import { Routes, Route } from "react-router-dom";
import Drivers from './components/Drivers'
import Teams from './components/teams';
import Races from './components/Races';
import NavBar from './components/NavBar';
import RaceDetails from './components/RaceDetails';
import TeamDetails from './components/TeamDetails';
import DriverDetails from './components/DriverDetails';
import Mng404 from './components/Mng404';
import Head from './components/Header';
import Footer from './components/footer.js';
import Home from './components/Home';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            season: "current",
            currentSeason: "current"
        }
        this.updateSeason = this.updateSeason.bind(this);
    }

    componentDidMount() {
        var url = "https://ergast.com/api/f1/current/last/seasons.json"
        fetch(url)
            .then(result => result.json())
            .then(data => {
                this.setState({
                    season: data.MRData.SeasonTable.season,
                    currentSeason: data.MRData.SeasonTable.season
                })
            })
    }
    updateSeason(year) {

        this.setState({ season: year });
    }


    render() {
        var season = this.state.season;
        return (


            <div className="bg-secondary d-md-flex flex-md-row align-items-strech p-1" style={{ height: "100%" }}>
                <NavBar />
                <div className="flex-fill ">
                    <Head
                        updateSeason={this.updateSeason}
                        season={this.state.season}
                        currentSeason={this.state.currentSeason}
                    />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='Drivers' element={<Drivers season={season} />} >

                        </Route>
                        <Route path="Drivers/:driver" element={<DriverDetails />} />
                        <Route path='/Teams' element={<Teams season={season} />} />
                        <Route path='/Races' element={<Races season={season} />} />
                        <Route path='/Races/:race' element={<RaceDetails />} />
                        <Route path='/Teams/:team' element={<TeamDetails/>} />
                        <Route element={Mng404} />
                    </Routes>
                    <Footer></Footer>

                </div>
            </div>

        );
    }
}


export default App;