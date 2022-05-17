import Loader from './Loader';

function Mng404() {
    return (
        <div className="d-flex flex-fill bg-dark m-1 p-1 rounded text-white">
            <h5>Page not found...</h5>
            <Loader />
        </div>
    );
}

export default Mng404;