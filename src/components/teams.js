import { useContext, useEffect, useState } from "react";
import Loader from './Loader';
import {Link} from 'react-router-dom';
import Flag from './Flag';
import {Table} from 'react-bootstrap'
import { ThemeContext } from "../context/ThemeContext";


const Teams = ({season}) => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    useEffect(() => {
        getConstructorData();
    })
    
    const theme = useContext(ThemeContext)
    
    const getConstructorData = () => {
        var url = `https://ergast.com/api/f1/${season}/constructorStandings.json`;
        fetch(url)
            .then(response => response.json())
            .then(resp => {
                if(resp.MRData.total !== "0"){
                    setData(resp.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
                    setIsLoading(false)}
                    else {
                        setData([])
                        setIsLoading(false)}
            ;
            
        });        
    }

    
        if(isLoading) {
            return (
                <Loader />
            )
        }

        if(!data.length){
            return <div className="d-flex flex-fill tableDiv bg-dark m-1 p-1 rounded text-white">
                <h5>No data for {season}</h5>
                <Loader />
            </div>
        }

        var team = data.map((data, i) => {
            var link= data.Constructor.constructorId           
            return (                                   
                    <tr key={i}>
                        <td className="text-end">{data.position}</td>
                        <td>
                       <Link className="text-decoration-none text-reset" 
                       to={'/teams/' + link}  
                       state= {{
                           data: data,
                           season: season
                       }}
                       >
                      <Flag nationality={data.Constructor.nationality}/> {data.Constructor.name}
                       </Link>
                       </td>
                       
                        <td><a className="text-decoration-none text-reset" href={data.Constructor.url} target="_blank" rel="noreferrer">Details</a></td>
                        <td className="text-end">{data.points}</td>
                    </tr>                
            );                    
        })

        const tableProps = theme.theme
        return(
            <div className={"rounded tableDiv m-1 bg-" + tableProps.variant }>
                  <Table {...tableProps}>
                        <thead>
                            <tr>
                                <th colSpan="5">Constructors Championship Standings {season}</th>                               
                            </tr>
                            <tr>
                                <th className="text-end">Rank</th>
                                <th>Name</th>
                                <th>Details</th>
                                <th className="text-end">Points</th>
                            </tr>
                            
                        </thead> 
                        <tbody>
                            { team }
                        </tbody>        
                </Table>
            </div>
        );
    
}

export default Teams;