import React from 'react';
import Flag from './Flag';

class Qualifiers extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        var url = `https://ergast.com/api/f1/${this.props.season}/${this.props.id}/qualifying.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => (data.MRData.RaceTable.Races[0] && this.setState({ data: data.MRData.RaceTable.Races[0].QualifyingResults })));
    }

    render() {
        if(!this.state.data.length){
            return ("")
        }
        var result = this.state.data.map((data, i) => {
            var bestTime = [data.Q1, data.Q2, data.Q3].sort()[0];
            return (
                <tr key={i}>
                    <td>{data.position}</td>
                    <td><Flag nationality={data.Driver.nationality} /> {data.Driver.givenName} {data.Driver.familyName}</td>
                    <td>{data.Constructor.name}</td>
                    <td>{bestTime}</td>
                </tr>
            );
        })

        return (
            <div className="rounded tableDiv m-1 flex-fill">
            <table className="table table-sm table-striped table-hover table-dark table-borderless mb-0">
                <thead>
                    <tr>
                        <th colSpan="4">Qualifying Results</th>
                    </tr>
                    <tr>
                        <th>Pos</th>
                        <th>Driver</th>
                        <th>Team</th>
                        <th>Best Time</th>
                    </tr>

                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </div>
        );
    }

}
export default Qualifiers;