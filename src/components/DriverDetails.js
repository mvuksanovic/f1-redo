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

        <div className="grow rounded d-lg-flex h-100 flex-lg-row flex-sm-fill">


            <DriverBio posts={data} />
            <DriverResults driverId={data.Driver.driverId} season={season} />
            
                
            
        </div>


    );

}

export default DriverDetails;