import React from "react";
import Loader from './Loader';
import {Link} from 'react-router-dom';
import Flag from './Flag';
import {Table} from 'react-bootstrap'


class Teams extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: true,
        }

    }

    componentDidMount() {
        this.getConstructorData();
    }


    getConstructorData() {
        var url = `https://ergast.com/api/f1/${this.props.season}/constructorStandings.json`;
        fetch(url)
            .then(response => response.json())
            .then(data =>  {
                data.MRData.StandingsTable.StandingsLists.length && this.setState({
                data: data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
                isLoading: false
             });
            this.setState({isLoading: false})
        });        
    }

    render(){
        if(this.state.isLoading) {
            return (
                <Loader />
            )
        }

        if(!this.state.data.length){
            return <div className="d-flex flex-fill bg-dark m-1 p-1 rounded text-white">
                <h5>No data for {this.props.season}</h5>
                <Loader />
            </div>
        }

        var team = this.state.data.map((data, i) => {
            var link= data.Constructor.constructorId           
            return (                                   
                    <tr key={i}>
                        <td>{data.position}</td>
                        <td>
                       <Link className="text-decoration-none text-reset" 
                       to={'/teams/' + link}  
                       state= {{
                           data: data,
                           season: this.props.season
                       }}
                       >
                      <Flag nationality={data.Constructor.nationality}/> {data.Constructor.name}
                       </Link>
                       </td>
                       
                        <td><a className="text-decoration-none text-reset" href={data.Constructor.url} target="_blank" rel="noreferrer">Details</a></td>
                        <td>{data.points}</td>
                    </tr>                
            );                    
        })
        return(
            <div className="rounded tableDiv bg-dark m-1">
                  <Table striped borderless hover size="sm" variant="dark">
                        <thead>
                            <tr>
                                <th colSpan="5">Constructors Championship Standings {this.props.season}</th>                               
                            </tr>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Details</th>
                                <th>Points</th>
                            </tr>
                            
                        </thead> 
                        <tbody>
                            { team }
                        </tbody>        
                </Table>
            </div>
        );
    }
}

export default Teams;