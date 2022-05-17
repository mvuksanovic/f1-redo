import { useLocation } from "react-router-dom";
import DriverBio from './DriverBio';
import DriverResults from './DriverResults';
import Mng404 from './Mng404';

const DriverDetails = () => {
    const location = useLocation()
    if (!location.state) {
        return (<Mng404 />)
    };

    const data = location.state.posts;
    const season = location.state.season;
    return (

        <div className="grow d-lg-flex flex-lg-row flex-sm-fill">


            <DriverBio posts={data} />

            <div className="rounded tableDiv m-1 flex-grow-1">
                <DriverResults driverId={data.Driver.driverId} season={season} />
            </div>
        </div>


    );

}

export default DriverDetails;