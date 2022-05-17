import React, { useContext, useEffect, useState } from "react";
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Flag from './Flag';
import { Table } from 'react-bootstrap'
import { ThemeContext } from "../context/ThemeContext";


const Races = ({ season }) => {
   
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getRaceData();
    }, [season])

    const theme = useContext(ThemeContext)
    const getRaceData = () => {
        var url = `https://ergast.com/api/f1/${season}/results/1.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data.MRData.RaceTable.Races)
                setIsLoading(false)
            })
    }

    if (isLoading) {
        return (
            <Loader />
        )
    }
    
    var race = data.map((data, i) => {
        var link = data.Circuit.circuitId;
        return (
            <tr key={i}>
                <td className="text-right">{data.round}<Flag countryName={data.Circuit.Location.country} /></td>
                <td>
                    <Link className="text-decoration-none text-reset"
                        to={'/races/' + link}
                        state={{ data: data }}
                    >
                        {data.raceName}
                    </Link>
                </td>
                <td>{data.Circuit.circuitName}</td>
                <td>{data.date}</td>
                <td><Flag nationality={data.Results[0].Driver.nationality} /> {data.Results[0].Driver.familyName}</td>
            </tr>
        );
    })

    
    return (

        <div className={"rounded tableDiv m-1 mb-2 bg-"+ theme.theme}>
            <Table striped borderless hover size="sm" variant={theme.theme}>
                <thead>
                    <tr>
                        <th colSpan="5">Race Calendar - {season}</th>
                    </tr>
                    <tr>
                        <th>Round</th>
                        <th>Grand Prix</th>
                        <th>Circuit</th>
                        <th>Date</th>
                        <th>Winner</th>
                    </tr>

                </thead>
                <tbody>
                    {race}
                </tbody>
            </Table>
        </div>
    )

}

export default Races