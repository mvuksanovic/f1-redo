import loaderSrc from '../img/drifting.gif';

function Loader() {
    return (
        <div className="flex-grow-1 tableDiv">
            <img width="100%" style={{filter: "blur(4px) opacity(10%)"}} src={loaderSrc} alt=""></img>
        </div>
    )
}

export default Loader;