import React, { useState, useEffect, useContext } from "react";
import Flag from './Flag';
import Loader from './Loader';
import { getDriverResults } from './api'
import { Table } from "react-bootstrap"
import { ThemeContext } from "../context/ThemeContext";

const DriverResults = ({ season, driverId }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        getDriverResults(season, driverId)
            .then(data => {
                setData(data.MRData.RaceTable.Races)
                setIsLoading(false)
            })
    }, [driverId, season])

    if (isLoading) {
        return (
            <Loader />
        );
    }

    
    return (
        <div className={"rounded overflow-auto m-1 p-1 flex-grow-1 bg-"+theme.variant}>
            <Table {...theme}>
                <thead>
                    <tr>
                        <th colSpan="5">Formula 1 {season} Results</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-end">Round</th>
                        <th>Grand Prix</th>
                        <th>Team</th>
                        <th className="text-end">Grid</th>
                        <th className="text-end">Position</th>
                    </tr>
                    {data.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td className="text-end">{data.round}</td>
                                <td> <Flag countryName={data.Circuit.Location.country} />{data.Circuit.circuitName}</td>
                                <td>{data.Results[0].Constructor.name}</td>
                                <td className="text-end">{data.Results[0].grid}</td>
                                <td className="text-end">{data.Results[0].position}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </Table>
        </div>

    );
}


export default DriverResults;