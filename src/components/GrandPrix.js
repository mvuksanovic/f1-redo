import Flag from './Flag';
import WikiImage from './WikiImage';

const GrandPrix = ({data}) => {

    return (
        <div className="d-flex flex-lg-column bg-dark text-white m-1 p-1 rounded">
            <div>
                <div className="p-1">
                    <h4 className="mb-0">{data.raceName} <Flag flagWidth='48px' countryName={data.Circuit.Location.country} /></h4>
                </div>
                <div>
                    <div className="d-flex flex-row flex-fill flex-lg-column align-items-center">
                        <div className="ml-2">
                            <p>{data.Circuit.Location.country}</p>
                            <p>{data.Circuit.Location.locality}</p>
                            <p className="mb-0">{data.date}</p>
                            <a className="btn btn-secondary m-1" href={data.url} target="_blank" rel="noreferrer">Details</a>
                        </div>
                        <div className="ml-2 flex-grow-1">
                            <WikiImage url={data.url} size="200" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>);

}
export default GrandPrix;