import TeamResults from './TeamResults';
import TeamBio from './TeamBio';
import Loader from './Loader';
import Mng404 from './Mng404'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TeamDetails = () => {
    
    const location = useLocation()
    const [data, setData] = useState([])
    const [raceData, setRaceData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(location, data, raceData, isLoading)


    useEffect(() => {
        if (location.state) {
            if (location.state.data) {
                getConstructor2Data(location.state.data.Constructor.constructorId, location.state.season);
            } else {
                location.state.constructor && getConstructorData(location.state.constructor, location.state.season);
                location.state.constructor && getConstructor2Data(location.state.constructor, location.state.season);
            }
        }
}, [location.state])

    const getConstructorData = (constructor, season) => {
        var url = `https://ergast.com/api/f1/${season}/constructors/${constructor}/constructorStandings.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.MRData.StandingsTable.StandingsLists.length && setData(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
            });
    }

    const getConstructor2Data = (constructor, season) => {
        var url2 = `https://ergast.com/api/f1/${season}/constructors/${constructor}/results.json`;
        fetch(url2)
            .then(response => response.json())
            .then(data => { setRaceData(data.MRData.RaceTable.Races) 
                            setIsLoading(false) });
    }


    
        if (!location.state) {
            return (<Mng404 />)
        };

        if (isLoading) {
            return (
                <Loader />
            );
        }
        if (!(data.length || location.state.data)) {
            return <div className="d-flex flex-fill bg-dark m-1 p-1 rounded text-white">
                <h5>No data for {location.state.season}</h5>
                <Loader />
            </div>
        }

        var linkData = (data.length) ? data[0] : location.state.data;


        return (
            <div className="d-lg-flex flex-lg-row flex-sm-fill">

                <TeamBio props={linkData} />



                <div className="rounded tableDiv m-1 flex-grow-1">

                    <TeamResults props={raceData} />

                </div>
            </div>
        );
    
}

export default TeamDetails;