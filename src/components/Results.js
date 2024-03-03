import React, { useContext, useEffect, useState } from "react";
import Flag from './Flag';
import Loader from './Loader';
import { Table } from "react-bootstrap"
import { ThemeContext } from "../context/ThemeContext";

const Results = ({ season, round }) => {
    
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        var url = `https://ergast.com/api/f1/${season}/${round}/results.json`;
        fetch(url)
            .then(response => response.json())
            .then(results => {
                setResults(results.MRData.RaceTable.Races[0].Results)
                setIsLoading(false)
            });

    }, [season, round])


    if (isLoading) {
        return (
            <Loader />
        )
    }


    var result = results.map((result, i) => {
        var time = (result.status === "Finished") ? (result.Time && result.Time.time) : result.status;
        return (<tr key={i}>
            <td className="text-end">{result.position}</td>
            <td> <Flag nationality={result.Driver.nationality} />{result.Driver.givenName} {result.Driver.familyName}</td>
            <td>{result.Constructor.name}</td>
            <td className="text-end">{time}</td>
            <td className="text-end">{result.points}</td>
        </tr>)

    })
    
    return (
        <div className={"rounded tableDiv m-1 flex-fill bg-"+theme.variant}>
            <Table {...theme}>
                <thead>
                    <tr>
                        <th colSpan="5">Race results</th>

                    </tr>
                    <tr>
                        <th className="text-end">Pos</th>
                        <th>Driver</th>
                        <th>Team</th>
                        <th className="text-end">Result</th>
                        <th className="text-end">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </Table>
        </div>
    );


}
export default Results