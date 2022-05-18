import React, { useEffect, useState } from "react";
import Flag from './Flag';
import Loader from './Loader';
import { Table } from "react-bootstrap"

const Results = ({ season, round }) => {
    /* constructor() {
        super();
        this.state = {
            results: [],
            isLoading: true

        }
    } */

    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        var url = `https://ergast.com/api/f1/${season}/${round}/results.json`;
        fetch(url)
            .then(response => response.json())
            .then(results => {
                setResults(results.MRData.RaceTable.Races[0].Results)
                setIsLoading(false)
            });

    })


    if (isLoading) {
        return (
            <Loader />
        )
    }


    var result = results.map((result, i) => {
        var time = (result.status === "Finished") ? (result.Time && result.Time.time) : result.status;
        return (<tr key={i}>
            <td>{result.position}</td>
            <td> <Flag nationality={result.Driver.nationality} />{result.Driver.givenName} {result.Driver.familyName}</td>
            <td>{result.Constructor.name}</td>
            <td>{time}</td>
            <td>{result.points}</td>
        </tr>)

    })
    const tableProps = {
        striped: true,
        borderless: false,
        hover: true,
        size: 'sm',
        variant: 'dark'
    }
    return (
        <div className="rounded tableDiv m-1 flex-fill bg-dark">
            <Table {...tableProps}>
                <thead>
                    <tr>
                        <th colSpan="5">Race results</th>

                    </tr>
                    <tr>
                        <th>Pos</th>
                        <th>Driver</th>
                        <th>Team</th>
                        <th>Result</th>
                        <th>Points</th>
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