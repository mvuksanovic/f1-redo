import { useEffect, useState } from "react";
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Flag from './Flag';
import { Table } from 'react-bootstrap'

const Drivers = ({ season }) => {
    
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        var url = "https://ergast.com/api/f1/" + season + "/driverStandings.json";
        fetch(url)
            .then(response => response.json())
            .then(posts => {

                setPosts(posts.MRData.StandingsTable.StandingsLists[0].DriverStandings)
                setIsLoading(false)
            })
    }, [season])


    if (isLoading) {
        return (
            <Loader />
        )
    }
    var driver = posts.map((post) => {
        var driverLink = "/Drivers/" + post.Driver.givenName + '-' + post.Driver.familyName;
        var teamLink = post.Constructors[0].constructorId.replace(/ /g, "-");
        //var state = { posts: post, season: season }
        return (<tr key={post.position}>
            <td className="text-end text-warning">{post.position}</td>
            <td><Flag nationality={post.Driver.nationality} />
                <Link className="text-decoration-none text-reset"
                    to={driverLink}
                    state={ { posts: post, season: season }}>
                    {post.Driver.givenName} {post.Driver.familyName}
                </Link>
            </td>
            <td>
                <Link className="text-decoration-none text-reset" to={{
                    pathname: '/Teams/' + teamLink,
                    state: {
                        constructor: post.Constructors[0].constructorId,
                        season: season
                    }
                }}>
                    {post.Constructors[0].name}
                </Link>
            </td>
            <td className="text-end">{post.points}</td>

        </tr>);
    }
    )

    return (
        <div className="rounded tableDiv m-1 bg-dark">
            <Table striped borderless hover size="sm" variant="dark">
                <thead>
                    <tr>

                        <th colSpan="4">Driver Championship Standings - {season}</th>
                    </tr>
                </thead>
                <tbody>
                    {driver}
                </tbody>
            </Table>
        </div>
    );


}


export default Drivers;