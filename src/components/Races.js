import React from "react";
import Loader from './Loader';
import {Link } from 'react-router-dom';
import Flag from './Flag';

class Races extends React.Component {
    constructor() {
        super();

       this.state = {
            data: [],
            isLoading: true
           
        }
    }

    componentDidMount() {
        this.getRaceData();
    }


    getRaceData() {
        var url = `https://ergast.com/api/f1/${this.props.season}/results/1.json`;
        fetch(url)
            .then(response => response.json())
            .then(data =>  this.setState({
                data: data.MRData.RaceTable.Races,
                isLoading: false}));        
    }

    render(){
        if(this.state.isLoading) {
            return (
                <Loader />
            )
        }
       
        var race = this.state.data.map((data, i) => {
        var link = data.raceName.replace(/ /g,"-");            
            return (                                   
                    <tr key={i}>
                        <td className="text-right">{data.round}<Flag countryName={data.Circuit.Location.country}/></td>
                        <td>
                        <Link className="text-decoration-none text-reset"to={{
                                pathname: '/Races/'+link,
                                state: {
                                    data: data
                                }                                        
                                }}> {data.raceName}
                            </Link>
                        </td>
                        <td>{data.Circuit.circuitName}</td>
                        <td>{data.date}</td>
                        <td><Flag nationality={data.Results[0].Driver.nationality}/> {data.Results[0].Driver.familyName}</td>
                    </tr>                 
               );                    
        })
        return(
           
          <div className="rounded tableDiv m-1">
                <table className="table table-responsive-lg table-sm table-striped table-hover table-dark table-borderless mb-0">  
                      <thead>
                            <tr>
                                <th colSpan="5">Race Calendar - {this.props.season}</th>                               
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
                            { race }
                        </tbody>
                </table>
        </div> 
        )
    }
}

export default Races;