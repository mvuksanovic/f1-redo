import React from "react";
import Flag from './Flag';
import Loader from './Loader';

class Results extends React.Component {
    constructor() {
        super();
        this.state = {
            results: [],
            isLoading: true

        }
    }
    componentDidMount() {
        var url = `https://ergast.com/api/f1/${this.props.season}/${this.props.id}/results.json`;
        fetch(url)
            .then(response => response.json())
            .then(results => this.setState({ 
                results: results.MRData.RaceTable.Races[0].Results,
                isLoading: false
             }));
        
    }

    render() {
        if(this.state.isLoading) {
            return (
                <Loader />
            )
        }


        var result = this.state.results.map((result, i) => {
            var time = (result.status === "Finished") ? (result.Time && result.Time.time) : result.status;
            return (<tr key={i}>
                <td>{result.position}<Flag nationality={result.Driver.nationality} /></td>
                <td> {result.Driver.givenName} {result.Driver.familyName}</td>
                <td>{result.Constructor.name}</td>
                <td>{time}</td>
                <td>{result.points}</td>
            </tr>)

        })

        return (
            <div className="rounded tableDiv m-1 flex-fill">
                <table className="table table-sm table-striped table-hover table-dark table-borderless mb-0">
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
                </table>
                </div>
        );
    }

}
export default Results