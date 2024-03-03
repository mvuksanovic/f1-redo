import { useContext, useEffect, useState } from 'react';
import Flag from './Flag';
import { Table } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
const Qualifiers = ({season, round}) => {
    
    const [data, setData] = useState([])
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        var url = `https://ergast.com/api/f1/${season}/${round}/qualifying.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => (data.MRData.RaceTable.Races[0] && setData(data.MRData.RaceTable.Races[0].QualifyingResults)));
    }, [season, round])

        if(!data.length){
            return ("")
        }
        var result = data.map((data, i) => {
            var bestTime = [data.Q1, data.Q2, data.Q3].sort()[0];
            return (
                <tr key={i}>
                    <td className="text-end">{data.position}</td>
                    <td><Flag nationality={data.Driver.nationality} /> {data.Driver.givenName} {data.Driver.familyName}</td>
                    <td>{data.Constructor.name}</td>
                    <td className="text-end">{bestTime}</td>
                </tr>
            );
        })

        return (
            <div className={"rounded tableDiv m-1 flex-fill bg-"+theme.variant}>
            <Table {...theme}>
                <thead>
                    <tr>
                        <th colSpan="4">Qualifying Results</th>
                    </tr>
                    <tr>
                        <th className="text-end">Pos</th>
                        <th>Driver</th>
                        <th>Team</th>
                        <th className="text-end">Best Time</th>
                    </tr>

                </thead>
                <tbody>
                    {result}
                </tbody>
            </Table>
        </div>
        );
    

}
export default Qualifiers;