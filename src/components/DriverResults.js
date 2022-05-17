import React, { useState, useEffect } from "react";
import Flag from './Flag';
import Loader from './Loader';
import { getDriverResults } from './api'


const DriverResults = ({ season, driverId }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

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
        <table className="table table-sm table-striped table-hover table-dark table-borderless mb-0">
            <thead>
                <tr>
                    <th colSpan="5">Formula 1 {season} Results</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Round</th>
                    <th>Grand Prix</th>
                    <th>Team</th>
                    <th>Grid</th>
                    <th>Position</th>
                </tr>
                {data.map((data, i) => {
                    return (
                        <tr key={i}>
                            <td className="text-right">{data.round}<Flag countryName={data.Circuit.Location.country} /></td>
                            <td> {data.Circuit.circuitName}</td>
                            <td>{data.Results[0].Constructor.name}</td>
                            <td>{data.Results[0].grid}</td>
                            <td className="default">{data.Results[0].position}</td>
                        </tr>
                    );
                })
                }
            </tbody>
        </table>

    );
}


export default DriverResults;